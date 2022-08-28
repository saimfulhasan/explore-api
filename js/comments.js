function loadComments () {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}

function displayComments (comments) {
    const commentsContainer = document.getElementById('comments-container');
    for (const comment of comments) {
        const commentDiv = document.createElement('div')
        commentDiv.classList.add('comment')
        commentDiv.innerHTML = `
        <h2>ID: ${comment.id}</h2>
        <H4>UserName: ${comment.name}</H4>
        <H5>Email: ${comment.email}</H5>
        <p>Body: ${comment.body}</p>
        `;
        commentsContainer.appendChild(commentDiv)
    }
}
loadComments()