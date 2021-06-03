const Heroku = require('heroku-client');
const {
    MY_APP_ID,
    HEROKU_AUTH_TOKEN,
    GITHUB_AUTH_TOKEN,
    GITHUB_URL
} = require('./constants/constants');
const { getLatestGithubSHA, writeContent } = require('./utils/utils');
const heroku = new Heroku({ token: HEROKU_AUTH_TOKEN })

heroku.get('/apps').then(async (apps) => {
    try {
        let newConfigVars = await getLatestGithubSHA();

        for (let i = 0; i < apps.length; i++) {
            if (apps[i].id === MY_APP_ID) {
                // let releases = await heroku.get(`/apps/${MY_APP_ID}/releases`)
                // writeContent(releases, "test3.json")
                // const latestReleaseVersion = releases.length;
                await heroku.patch(`/apps/${MY_APP_ID}/config-vars`, {
                    body: {
                        ...newConfigVars,
                        MY_APP_ID,
                        HEROKU_AUTH_TOKEN,
                        GITHUB_AUTH_TOKEN,
                        GITHUB_URL,
                        // REACT_APP_CURRENT_RELEASE_VERSION: latestReleaseVersion
                    }
                });
                response = await heroku.get(`/apps/${MY_APP_ID}/config-vars`);
            }
        }
    }
    catch (e) {
        console.log(e)
    }
});