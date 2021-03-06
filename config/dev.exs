use Mix.Config

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
config :broadcast_love, BroadcastLove.Endpoint,
  http: [port: 3000],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  # watchers: [node: ["webpack.server.js"],
  #            mix: ["eye_drops"]]
  watchers: [mix: ["eye_drops"]]

# Watch static and templates for browser reloading.
config :broadcast_love, BroadcastLove.Endpoint,
  live_reload: [
    patterns: [
      ~r{priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$},
      ~r{priv/gettext/.*(po)$},
      ~r{web/views/.*(ex)$},
      ~r{web/templates/.*(eex)$}
    ]
  ]

config :eye_drops,
  tasks: [
    %{
      id: :graphql_update_schema,
      name: "Update GraphQL Schema",
      cmd: "mix graphql.gen.schema",
      paths: ["web/graphql/*"]
    }
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

# Configure your database
config :broadcast_love, BroadcastLove.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "marcusbernales",
  password: "",
  database: "broadcast_love_dev",
  hostname: "localhost",
  pool_size: 10
