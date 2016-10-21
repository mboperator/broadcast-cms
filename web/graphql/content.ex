defmodule BroadcastLove.GraphQL.Schema.Content do
  alias GraphQL.Type.{ObjectType, String, ID, List}
  alias BroadcastLove.{Content}

  @string_type %{type: %String{}}

  def type do
    %ObjectType{
      name: "Content",
      description: "a content object",
      fields: %{
        description: @string_type,
        type: @string_type,
        data: @string_type
      }
    }
  end

  def find(%{content_id: id}, _, _) do
    Repo.get(Content, id)
  end
end
