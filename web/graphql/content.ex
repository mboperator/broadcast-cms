defmodule BroadcastLove.GraphQL.Content do
  alias BroadcastLove.{Repo, Content}
  alias GraphQL.Relay.{Connection, Node, Mutation}
  alias GraphQL.Type.{ObjectType, String, List, NonNull}

  def connection do
    %{
      name: "Content",
      node_type: type,
      edge_fields: %{},
      connection_fields: %{},
      resolve_node: nil,
      resolve_cursor: nil
    } |> Connection.new
  end

  def type do
    %ObjectType{
      name: "Content",
      description: "a content object",
      fields: %{
        id: Node.global_id_field("content"),
        description: %{type: %String{}},
        type: %{type: %String{}},
        data: %{type: %String{}}
      },
      interfaces: [BroadcastLove.GraphQL.Schema.Root.node_interface]
    }
  end

  def find(id) do
    Repo.get(Content, id)
  end

  def find(%{id: id}, _, _) do
    find(id)
  end

  def find(_, _, _) do
    Repo.all(Content)
  end


  def create(params) do
    case %Content{} |> Content.changeset(params) |> Repo.insert do
      {:ok, content} -> content
      {:error, changeset} -> changeset
    end
  end

  defmodule Queries do
    alias BroadcastLove.GraphQL.Content
    def find do
      %{
        type: %List{ofType: Content.type},
        args: %{},
        resolve: &Content.find/3
      }
    end
  end

  defmodule Mutations do
    alias BroadcastLove.GraphQL.Content
    def create do
      %{
        name: "CreateContent",
        input_fields: %{
          description: %{type: %NonNull{ofType: %String{}}},
          type: %{type: %NonNull{ofType: %String{}}},
          data: %{type: %NonNull{ofType: %String{}}}
        },
        mutate_and_get_payload: fn(input, _info) ->
          content = Content.create(input)
          %{ id: content.id }
        end,
        output_fields: %{
          content: %{
            type: Content.type,
            resolve: &Content.find/3
          }
        }
      } |> Mutation.new
    end
  end
end
