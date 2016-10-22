defmodule BroadcastLove.Router do
  use BroadcastLove.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]

    forward "/api", GraphQL.Plug, schema: {
      GraphQL.Schema.Root,
      :schema
    }
  end

  scope "/", BroadcastLove do
    pipe_through :browser # Use the default browser stack

    resources "/pages", PageController
    resources "/contents", ContentController
    resources "/tags", TagController
  end

  # Other scopes may use custom stacks.
  scope "/api", BroadcastLove do
    pipe_through :api
  end
end
