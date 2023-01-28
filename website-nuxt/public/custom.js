// generate sidebar navi

// add ids to headlines
document
    .getElementById("content")
    .querySelectorAll("h2,h3")
    .forEach(function (heading, i) {
        heading.setAttribute("id", i);
    });

// get headlines and add to array
const articleTitles = document
    .getElementById("content")
    .querySelectorAll("h2,h3");

console.log('Huhu', articleTitles);