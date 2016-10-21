defmodule BroadcastLove.Page do
  use BroadcastLove.Web, :model

  schema "pages" do
    field :title, :string
    field :subtitle, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:title, :subtitle])
    |> validate_required([:title, :subtitle])
  end
end
