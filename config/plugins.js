module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dvjewmnhq',
        api_key: '476191923892215',
        api_secret: 'ntTeRfIJYqfVFyfawU-yaw9-Esk',
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});