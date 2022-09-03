function loadUsers2 () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data)) /* json দিলেও হবে */
}

function displayUsers2 (data) {
    // console.log(data)
    /* এখন যেহেতু ডাটাগুলো একটি array এর মধ্যে আছে (array of objects) তাই 
    For-of Loop চালাতে হবে। */
    // for(const user of data){
    //     // console.log(user)
    //     // console.log(user.name)
    //     // console.log(user.email)
    // }

    const ul = document.getElementById('users-list')
    /* এখানে ul টা কে কল করেছি কারণ এই ul এর ভিতরে একটা li ক্রিয়েট করে নামগুয়লোকে
    একটা লিস্ট এর মধ্যে রাখবো। */
    for(const user of data){
        console.log(user.name)
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.appendChild(li);
    }
}