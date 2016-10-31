defmodule BroadcastLove.GraphQL.Content do
  alias BroadcastLove.{Repo}
  alias GraphQL.Relay.{Connection, Node}
  alias GraphQL.Type.{ObjectType, String, List}

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
    Repo.get(BroadcastLove.Content, id)
  end

  def find(_, _, _) do
    Repo.all(BroadcastLove.Content)
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
end
