// const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};
// console.log(user);

const school = {
    owner: 'Govt',
    address: {
        street: 'College Road, Laxmipur',
        city: 'Laxmipur',
        divition: 'Chittagong',
        country: 'Bangladesh'
    },
    type: ['Primary', 'Secondery', 'Higher', 'Higher Secondery', 'Honers', 'Masters'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(school)
const schoolJSON = JSON.stringify(school)
console.log(schoolJSON)
const schoolObj = JSON.parse(schoolJSON)
console.log(schoolObj)


// node api.js
