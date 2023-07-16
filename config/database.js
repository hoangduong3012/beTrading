module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DB_HOST', '0.0.0.0'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'trading-db'),
      user: env('DATABASE_USERNAME', 'sysuser'),
      password: env('DATABASE_PASSWORD', 'Duong3019@@@@'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
