// import { Octokit } from '../../node_modules/octokit';
import { Octokit } from "https://esm.sh/@octokit/rest";

const octokit = new Octokit();

const displayname = document.querySelector("#username");
const displayPicture = document.querySelector("#profilepic");
const loginInput = document.querySelector("#login");
const bio = document.querySelector("#bio")
const submitButton = document.querySelector("#submit");

async function getUserInfo(username) {
  try {
    const response = await octokit.request("GET /users/{username}", {
      username: username
    });
    const data = response.data;
    displayname.textContent = data.name;
    displayPicture.src = data.avatar_url;
    bio.textContent = data.bio

    console.log(data.login, data.avatar_url)
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

submitButton.addEventListener("click", function() {
  const username = loginInput.value;
  getUserInfo(username);
});




// async function getUserData() {
//   try {
//     const data = await getUserInfo("ImStillBlessed");
    
//     diaplayname.textContent = data.login;
//     displayPicture.src = data.avatar_url;
    
//     console.log(`the user: ${name} with username: ${username}`)
//     console.log(data.repos_url);
    
//   } catch (error) {
//     console.error('Error', error);
//   }
// }



// async function getRepoInfo() {
//   const owner = "ImStillBlessed"
//   const repo = "AirBnB_clone"
//   try {
//     const url = `/repos/${owner}/${repo}`;
    
//     const data = getUserInfo("ImStillBlessed", url);
//     console.log(data);
//   } catch (error) {
//     console.error('Error', error);
//   }
// }

// getUserData();
// getRepoInfo();