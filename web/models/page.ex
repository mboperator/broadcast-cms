defmodule BroadcastLove.Page do
  use BroadcastLove.Web, :model

  schema "pages" do
    field :title, :string
    field :subtitle, :string

    has_many :contents_pages, BroadcastLove.ContentsPages
    has_many :contents, through: [:contents_pages, :content]
    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct \\ %BroadcastLove.Page{}, params \\ %{}) do
    struct
    |> cast(params, [:title, :subtitle])
    |> validate_required([:title, :subtitle])
  end
end
