defmodule GraphQL.Schema.Root do
  alias GraphQL.Schema
  alias GraphQL.Schema.{Root}
  alias GraphQL.Type.{ObjectType, String, List}
  alias BroadcastLove.{Repo, Content}

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

    def find(%{content_id: id}, _, _) do
      Repo.get(Content, id)
    end

    def find_all(_, _, _) do
      Repo.all(Content)
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
            description: "A piece of uploaded content",
            resolve: fn
              _, _, _ -> for id <- 1..4, do: Root.make_content(id)
            end
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
