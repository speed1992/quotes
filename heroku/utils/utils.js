const https = require('https');
// const fs = require('fs');
const { GITHUB_URL, GITHUB_AUTH_TOKEN } = require('../constants/constants');

module.exports.getLatestGithubSHA = () => {
    return new Promise(async (resolve, reject) => {

        https.get(`${GITHUB_URL}?access_token=${GITHUB_AUTH_TOKEN}`, { headers: { 'user-agent': 'node.js' } },
            (resp) => {
                let data = '';

                resp.on('data', (chunk) => {
                    data += chunk;
                });

                resp.on('end', () => {
                    latestSHA = JSON.parse(data).reduce((acc, { name, commit: { sha } }) => {
                        if (name === ("master" || "main")) {
                            acc = sha;
                        }
                        console.log({ REACT_APP_CURRENT_GIT_SHA: acc.substr(0, 7) });
                        resolve({ REACT_APP_CURRENT_GIT_SHA: acc.substr(0, 7) });
                    }, null)
                });

            }).on("error", (err) => {
                console.log("Error: " + err.message);
                reject(err);
            });

    })
}

// module.exports.writeContent = (content, fileName) => {
//     fs.writeFile(fileName, JSON.stringify(content), err => {
//         if (err) {
//             console.error(err)
//             return
//         }
//     })
// }