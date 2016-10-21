defmodule BroadcastLove.Repo.Migrations.CreateContentsTags do
  use Ecto.Migration

  def change do
    create table(:contents_tags) do
      add :content_id, references(:contents, on_delete: :nothing)
      add :tag_id, references(:tags, on_delete: :nothing)

      timestamps()
    end
    create index(:contents_tags, [:content_id])
    create index(:contents_tags, [:tag_id])

  end
end
