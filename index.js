// Write your code here!
async: function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  if (!ul) {
    console.error("post-list not found!");
    return;
  }

  ul.innerHTML = ""; // important for tests

  posts.forEach(post => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}();

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json

    displayPosts(data);
  } catch (error) {
    console.error(error);
  }
}


fetchPosts();