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
  end

  scope "/", BroadcastLove do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    resources "/pages", PageController
    resources "/contents", ContentController
    resources "/tags", TagController
  end

  # Other scopes may use custom stacks.
  scope "/api" do
    pipe_through :api
    get "/", GraphQL.Plug, schema: { BroadcastLove.GraphQL.Schema.Root, :schema }
    post "/", GraphQL.Plug, schema: { BroadcastLove.GraphQL.Schema.Root, :schema }
  end
end
