defmodule BroadcastLove.Content do
  use BroadcastLove.Web, :model

  schema "contents" do
    field :description, :string
    field :type, :string
    field :data, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:description, :type, :data])
    |> validate_required([:description, :type, :data])
  end
end
