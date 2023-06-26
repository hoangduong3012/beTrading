'use strict';
//const {resolve} = required ('nexus');
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
   register({ strapi }) {
    const extensionService = strapi.plugin('graphql').service('extension');
    extensionService.use(({ nexus }) => ({
      types: [
        nexus.extendType({
          type: 'UsersPermissionsMe',
          definition(t) {
            // here define fields you need
            t.string('photoURL');
            t.list.field('shortcuts', { type: 'Shortcuts',
            resolve(root, args, ctx) {
              const shortcuts = strapi.db.query('api::shortcuts.shortcuts').findMany({ // uid syntax: 'api::api-name.content-type-name'
                where: {
                  users: {
                    id: root.id
                  },
                },
              });
              return shortcuts;
            },
          });
          },
        }),
      ]
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
