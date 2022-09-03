/*
এখানে fetch function টা একটা API(বা url) কে কল করতেছে। কল করার পর ওই API fetch 
function কে কিছু ডাটা স্ট্রিং আকারে দেয় response function এ। অর্থাৎ Api তার প্রমিস রেখেছে। 
না দিলে সে প্রমিস রাখে নাই। আবার অনেক সময় Api তার প্রমিস রাখে, কিন্তু অনেক দেরিতে। 
তখন আমাদেরকে wait করতে হয়। 

এরপর সেই response arrow function কে আমরা .json করলে স্ট্রিং টি(ডাটা গুলো) JS Object 
এ রুপান্তরিত হয়। তারপর আমরা সেই object টি কে console.log করে দেখি। 
*/
fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => console.log(response))
    .then(response => response.json()) /* response.json অনেকটা JSON.parse এর মতো 
    কাজ করে অর্থাৎ fetch url টা আগে ছিলো string এ। এখন Object এ convert হয়েছে। */
    // .then(json => console.log(json))

// Again 
const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
.then(res => res.json())
// .then(json => console.log(json))

// Afain 
/* এখানে fetch কে function এর ভিতরে রেখেছি কারণ এটি একটি বাটনে ক্লিক করলে কাজ করবে/ */
function loadData () {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}