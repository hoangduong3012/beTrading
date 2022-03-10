module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3300),
      database: env('DATABASE_NAME', 'trading-db'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'Duong3019@@@@'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
