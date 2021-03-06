# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :broadcast_love,
  ecto_repos: [BroadcastLove.Repo]

# Configures the endpoint
config :broadcast_love, BroadcastLove.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "ngtwBkGNr3jkY+oZP9I8Ca+pnQvH0jmYKj+y20bJBPs0370/vi6yTkcaWqGlOZTy",
  render_errors: [view: BroadcastLove.ErrorView, accepts: ~w(html json)],
  pubsub: [name: BroadcastLove.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

# Relay configuration
config :graphql_relay,
  schema_module: BroadcastLove.GraphQL.Schema.Root,
  schema_json_path: "#{Path.dirname(__DIR__)}/priv/graphql"
