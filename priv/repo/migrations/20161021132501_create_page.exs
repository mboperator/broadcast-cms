defmodule BroadcastLove.Repo.Migrations.CreatePage do
  use Ecto.Migration

  def change do
    create table(:pages) do
      add :title, :string
      add :subtitle, :string

      timestamps()
    end

  end
end
