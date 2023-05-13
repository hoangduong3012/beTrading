module.exports = (plugin) => {
    plugin.controllers.users.accessToken = (ctx) => {
        console.log('test')
    };
    plugin.policies[newPolicy] = (ctx) => {};
    plugin.routes['content-api'].routes.push({
            "method": "GET",
            "path": "/access-token",
            "handler": "controller.action"
    });

    return plugin;
}