// main javascript file that will import all the 
// other functions and be conected direcctly to the main page
// import { Octokit } from "octokit";
// const { Octokit } = require('@octokit/rest')

// const octokit = new Octokit();

// async function getBranches() {  
//   const response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
//     owner: "ImStillBlessed",
//     repo: "AirBnB_clone_v2",
//     params: {
//       per_page: 2
//     }
//   });
  
//   console.log(`Status: ${response.status}`);
//   console.log(`Url: ${response.url}`);
//   console.log(response.data.length);
// }
const getBranches = require('./branches')
const response = getBranches("ImStillBlessed", "AirBnB_clone_v2");

console.log(`testing: ${response.status}`)