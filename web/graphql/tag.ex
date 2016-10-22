defmodule BroadcastLove.GraphQL.Tag do
  alias GraphQL.Type.{ObjectType, String}
  alias BroadcastLove.{Repo}

  def type do
    %ObjectType{
      name: "Tag",
      description: "a tag object",
      fields: %{
        id: %{type: %String{}},
        description: %{type: %String{}},
        title: %{type: %String{}}
      }
    }
  end

  def find(_, %{id: id}, _) do
    Repo.get!(BroadcastLove.Tag, id)
  end

  def find(_, _, _) do
    Repo.all(BroadcastLove.Tag)
  end
end
