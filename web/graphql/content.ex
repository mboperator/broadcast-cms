defmodule BroadcastLove.GraphQL.Content do
  alias GraphQL.Type.{ObjectType, String}
  alias BroadcastLove.{Repo}

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
    Repo.get!(BroadcastLove.Content, id)
  end

  def find(_, _, _) do
    Repo.all(BroadcastLove.Content)
  end
end
