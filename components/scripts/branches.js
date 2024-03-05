const { Octokit } = require('@octokit/rest')

const octokit = new Octokit();

async function getBranches(owner, repo) {  
  const response = await octokit.request("GET /repos/{owner}/{repo}/branches", {
    owner: owner,
    repo: repo,
    params: {
      per_page: 2
    }
  });
  console.log(response.status)
  return (response);
}

module.exports = getBranches;
// getBranches();