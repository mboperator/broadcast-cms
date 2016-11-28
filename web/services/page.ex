defmodule BroadcastLove.Services.Page do
  alias BroadcastLove.{ContentsPages, Repo}
  alias Ecto.DateTime

  def add_content({:ok, page}, contents) do
    changesets = Enum.map(contents, fn content_id ->
      # Ecto.build_assoc(page, :contents_pages, content_id: content_id)
      %{
        page_id: page.id,
        content_id: content_id,
        inserted_at: DateTime.from_erl(:calendar.universal_time()),
        updated_at: DateTime.from_erl(:calendar.universal_time())
      }
    end)

    case Repo.insert_all(ContentsPages, changesets) do
      {inserted, nil} ->
        {:ok, Map.merge(page, %{contents: inserted})}
      nil ->
        {:error, changesets}
    end
  end

  def add_content({:error, changesets}, _contents) do
    IO.puts("======ADD_CONTENT_ERR======")
    {:error, changesets}
  end
end
