defmodule BroadcastLove.GraphQL.Page do
  alias BroadcastLove.{Repo, Page, ContentsPages, Services}
  alias GraphQL.Relay.{Connection, Node, Mutation}
  alias GraphQL.Type.{ObjectType, String, List, NonNull, Boolean, ID}
  import Ecto.Query, only: [from: 2]

  def connection do
    %{
      name: "Page",
      node_type: type,
      edge_fields: %{},
      connection_fields: %{},
      resolve_node: nil,
      resolve_cursor: nil
    } |> Connection.new
  end

  def type do
    %ObjectType{
      name: "Page",
      description: "a page object",
      fields: %{
        gid: Node.global_id_field("page"),
        id: %{type: %ID{}},
        title: %{type: %String{}},
        subtitle: %{type: %String{}},
        contents: %{
          type: %List{ofType: BroadcastLove.GraphQL.Content.type},
          description: "The content associated to this page",
          args: Connection.args,
          resolve: fn(page, _args, _ctx) ->
            page.contents
          end
        }
      },
      interfaces: [BroadcastLove.GraphQL.Schema.Root.node_interface]
    }
  end

  def find(id) do
    IO.puts("FIND ONE")
    query = from p in Page,
            where: p.id == ^id,
            preload: [:contents]
    Repo.all(query)
  end

  def find(_, %{id: id}, _) do
    find(id)
  end

  def find(_, _, _) do
    IO.puts("FIND ALL")
    query = from p in Page,
            preload: [:contents]
    Repo.all(query)
  end

  def create(%{title: title, subtitle: subtitle, contents: contents}) do
    result = %Page{}
      |> Page.changeset(%{title: title, subtitle: subtitle})
      |> Repo.insert
      |> Services.Page.add_content(contents)

    case result do
      {:ok, page} -> page
      {:error, changesets} -> changesets
    end
  end

  def destroy(id) do
    page = Repo.get(Page, id)
    Repo.delete!(page)
    %{id: id}
  end

  defmodule Queries do
    alias BroadcastLove.GraphQL.Page
    def find do
      %{
        type: %List{ofType: Page.type},
        args: %{
          id: %{type: %NonNull{ofType: %ID{}}}
        },
        resolve: &Page.find/3
      }
    end
  end

  defmodule Mutations do
    alias BroadcastLove.GraphQL.Page

    def create do
      %{
        name: "CreatePage",
        input_fields: %{
          title: %{type: %NonNull{ofType: %String{}}},
          subtitle: %{type: %String{}},
          contents: %{type: %List{ofType: %ID{}}}
        },
        mutate_and_get_payload: fn(input, _info) ->
          content = Page.create(input)
          %{ id: content.id }
        end,
        output_fields: %{
          page: %{
            type: Page.type,
            resolve: &Page.find/3
          }
        }
      } |> Mutation.new
    end

    def destroy do
      %{
        name: "DestroyPage",
        input_fields: %{
          id: %{type: %NonNull{ofType: %ID{}}}
        },
        mutate_and_get_payload: fn(input, _info) ->
          Page.destroy(input[:id])
        end,
        output_fields: %{
          deleted: %{
            type: %Boolean{},
            resolve: fn(_, _, _) -> true end
          },
          id: %{
            type: %ID{},
            resolve: fn(%{id: id}, _, _) -> id end
          }
        }
      } |> Mutation.new
    end
  end
end
