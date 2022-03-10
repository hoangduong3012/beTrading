module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '63d4b261e1175aa571836f81f396aa07'),
  },
});
