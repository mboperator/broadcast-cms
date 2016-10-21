defmodule BroadcastLove.ContentsTags do
  use BroadcastLove.Web, :model

  schema "contents_tags" do
    belongs_to :content, BroadcastLove.Content
    belongs_to :tag, BroadcastLove.Tag

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [])
    |> validate_required([])
  end
end
