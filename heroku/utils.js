var exec = require('child_process').exec;

module.exports.getLatestGithubSHA = () => {
    return new Promise((resolve, reject) => {
        exec("cd app && git rev-parse --short HEAD", function (err, stdout, stderr) {
            if (err) {
                reject(err);
            }
            resolve({ REACT_APP_CURRENT_GIT_SHA: stdout.trim() })
        });
    })
}