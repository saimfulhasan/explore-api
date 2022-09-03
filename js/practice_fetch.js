function loadData2 () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}


function loadUsers () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
function displayUsers (data) { /* displayUsers function কে loadUsers function এ
ইউজ করতে হলে অবশ্যই displayUsers function এ একটি parameter দিতে হবে। */
    console.log(data)
}