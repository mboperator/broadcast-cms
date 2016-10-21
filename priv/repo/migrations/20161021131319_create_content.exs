defmodule BroadcastLove.Repo.Migrations.CreateContent do
  use Ecto.Migration

  def change do
    create table(:contents) do
      add :description, :string
      add :type, :string
      add :data, :string

      timestamps()
    end

  end
end
