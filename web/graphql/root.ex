defmodule BroadcastLove.GraphQL.Schema.Root do
  alias GraphQL.Schema
  alias GraphQL.Type.ObjectType
  alias GraphQL.Relay.Node
  alias BroadcastLove.GraphQL.{Tag, Content}

  def node_interface do
    Node.define_interface(fn(obj) ->
      case obj do
        %{type: _type} ->
          Content.type
      end
    end)
  end

  def node_field do
    Node.define_field(node_interface, fn (_item, args, _ctx) ->
      [type, id] = Node.from_global_id(args[:id])
      case type do
        "content" ->
          Content.find(id)
      end
    end)
  end

  def query do
    %ObjectType{
      name: "Root",
      description: "All the queries available to the client",
      fields: %{
        node: node_field,
        content: Content.Queries.find
      }
    }
  end

  def schema do
    %Schema{
      query: query
    }
  end
end
