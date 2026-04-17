// Write your code here!
async function getSocialPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    
    console.log(data);
    
    displayPosts(data);
}

function displayPosts(posts) {
    const postList = document.querySelector('#post-list');

    posts.forEach(post => {
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        h1.textContent = post.title;
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);
        
        postList.appendChild(li);
    });
}

getSocialPosts();