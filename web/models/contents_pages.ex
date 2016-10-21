defmodule BroadcastLove.ContentsPages do
  use BroadcastLove.Web, :model

  schema "contents_pages" do
    belongs_to :content, BroadcastLove.Content
    belongs_to :page, BroadcastLove.Page

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
