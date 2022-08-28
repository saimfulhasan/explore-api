// Method 1
function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));
}

// Method 2
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .then(data => displayUsers(data))
}

// Method 3
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => displayUsers(data))
}
function displayUsers(data){
    console.log(data);
}

// Module: 32-4