defmodule BroadcastLove.ContentController do
  use BroadcastLove.Web, :controller

  alias BroadcastLove.Content

  def index(conn, _params) do
    contents = Repo.all(Content)
    render(conn, "index.html", contents: contents)
  end

  def new(conn, _params) do
    changeset = Content.changeset(%Content{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"content" => content_params}) do
    changeset = Content.changeset(%Content{}, content_params)

    case Repo.insert(changeset) do
      {:ok, _content} ->
        conn
        |> put_flash(:info, "Content created successfully.")
        |> redirect(to: content_path(conn, :index))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    content = Repo.get!(Content, id)
    render(conn, "show.html", content: content)
  end

  def edit(conn, %{"id" => id}) do
    content = Repo.get!(Content, id)
    changeset = Content.changeset(content)
    render(conn, "edit.html", content: content, changeset: changeset)
  end

  def update(conn, %{"id" => id, "content" => content_params}) do
    content = Repo.get!(Content, id)
    changeset = Content.changeset(content, content_params)

    case Repo.update(changeset) do
      {:ok, content} ->
        conn
        |> put_flash(:info, "Content updated successfully.")
        |> redirect(to: content_path(conn, :show, content))
      {:error, changeset} ->
        render(conn, "edit.html", content: content, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    content = Repo.get!(Content, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(content)

    conn
    |> put_flash(:info, "Content deleted successfully.")
    |> redirect(to: content_path(conn, :index))
  end
end
