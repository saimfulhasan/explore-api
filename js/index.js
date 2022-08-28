function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data /*এখানে data না লিখে অন্য কোনো 
    value এর নাম দিলেও হবে। data হচ্ছে এখানে Argument. parameter নয়।*/))
}

function displayUsers2(data /*এখানে যেই নাম*/){
    // Step-1: যেই এলিমেন্ট এর ভিতরে কিছু একটা ক্রিয়েট করবো তাকে id দিয়ে কল করে একটা variablr এ রাখতে হবে।
    // Step-2: For-of Loop চালিয়ে specific infoemation নিতে হবে।
    // Step-3: প্রয়োজনমতো কিছু elements ক্রিয়েট করবো।
    // Step-4: ক্রিয়েট করা element এর ভিতরে innerHTML এড করতে হবে।
    // Step-5: ক্রিয়েট করা element কে প্রথমে সেট করা variable এ append করতে হবে।
    const ul = document.getElementById('users-list');
    for(const user of data /*এখানেও সেই নাম*/){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}


function deleteAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}

function patchAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function createAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}