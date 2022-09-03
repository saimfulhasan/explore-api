function loadPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data)) 
    /* এখানে displayPosts(data) এর data হচ্ছে একটি argument এবং এই argument এর 
    parameter হচ্ছে displayPosts (posts) এর posts */
}

function displayPosts (posts) {
    console.log(posts)
    const postContainer = document.getElementById('posts-container') /* এটা পরে কাজে লাগবে। */
    for(const post of posts) {
        console.log(post)
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4>User: ${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Descriotion: ${post.body}</p>
        `
        postContainer.appendChild(postDiv)
    }
}

loadPosts()