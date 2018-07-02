const data = require('./data.js');
let container = document.querySelector('.items');
let item = document.querySelector('.fork')

let allInfo = data.load('https://api.github.com/orgs/hillel-front-end/repos','GET');

allInfo.then(repos => {
        data.render(repos,container);
        return data.executeRequests(repos)})
       .then(asyncList => Promise.all(asyncList))
       .then(items => console.log(items));






