const { Octokit } = require('@octokit/rest');

const octokit = new Octokit();



async function getUserInfo(username,) {
  // collect all information on the users account
  try {
    const response = await octokit.request("GET /users/{username}", {
      username: username
    });
    // (response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

module.exports = getUserInfo;
