// fetch ფუნქციის გამოყენებით წამოიღე მონაცემები მოცემული მისამართიდან და გამოიტანე DOM-ში პოსტის სახით

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => print(data))

// function print (data) {
//     for (user of data) {
//         console.log(user)
//     }
// }

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        const postsContainer = document.getElementById('posts-container');
        postsContainer.innerHTML = ''; // Clear previous content

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <hr>
            `;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Call the function when the window loads
document.addEventListener('DOMContentLoaded', fetchPosts);
    