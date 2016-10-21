defmodule BroadcastLove.Repo.Migrations.CreateContentsPages do
  use Ecto.Migration

  def change do
    create table(:contents_pages) do
      add :content_id, references(:contents, on_delete: :nothing)
      add :page_id, references(:pages, on_delete: :nothing)

      timestamps()
    end
    create index(:contents_pages, [:content_id])
    create index(:contents_pages, [:page_id])

  end
end
