defmodule BroadcastLove.GraphQL.Root do
  alias GraphQL.Schema
  alias GraphQL.Type.{ObjectType, List, ID}
  alias BroadcastLove.GraphQL.{Tag, Content}

  defmodule Query do
    def type do
      %ObjectType{
        name: "Root",
        description: "All the queries available to the client",
        fields: %{
          content: %{
            type: %List{ofType: Content},
            args: %{
              id: %{type: %ID{}},
            },
            description: "A piece of uploaded content",
            resolve: &Content.find/3
          },
          tag: %{
            type: %List{ofType: Tag},
            args: %{
              id: %{type: %ID{}}
            },
            description: "A tag for identifying content",
            resolve: &Tag.find/3
          }
        }
      }
    end
  end

  def schema do
    %Schema{
      query: Query
    }
  end
end
