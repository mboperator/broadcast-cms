defmodule GraphQL.Schema.Root do
  alias GraphQL.Schema
  alias GraphQL.Schema.{Root}
  alias GraphQL.Type.{ObjectType, String, List, ID}
  alias BroadcastLove.{Repo}

  defmodule Content do
    def type do
      %ObjectType{
        name: "Content",
        description: "a content object",
        fields: %{
          id: %{type: %String{}},
          description: %{type: %String{}},
          type: %{type: %String{}},
          data: %{type: %String{}}
        }
      }
    end

    def find(_, %{id: id}, _) do
      Repo.get(BroadcastLove.Content, id)
    end

    def find(_, _, _) do
      Repo.all(BroadcastLove.Content)
    end
  end

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

  def make_content(id) do
    %{
      id: "#{id}",
      description: "Hello",
      type: "image",
      data: "some/image/url"
    }
  end
end
