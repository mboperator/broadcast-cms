defmodule BroadcastLove.GraphQL.Page do
  alias BroadcastLove.{Repo, Page}
  alias GraphQL.Relay.{Connection, Node, Mutation}
  alias GraphQL.Type.{ObjectType, String, List, NonNull, Boolean, ID}

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
      },
      interfaces: [BroadcastLove.GraphQL.Schema.Root.node_interface]
    }
  end

  def find(id) do
    Repo.get(Page, id)
  end

  def find(%{id: id}, _, _) do
    find(id)
  end

  def find(_, _, _) do
    Repo.all(Page)
  end

  defmodule Queries do
    alias BroadcastLove.GraphQL.Page
    def find do
      %{
        type: %List{ofType: Page.type},
        args: %{},
        resolve: &Page.find/3
      }
    end
  end
end
