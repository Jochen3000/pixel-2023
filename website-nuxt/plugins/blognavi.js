
// generate sidebar toc
const blogNavi = () => {
    document.getElementById("content").querySelectorAll("h2,h3").forEach(function (heading, i) { // runs a function for all h2 elements inside your rich text element
        heading.setAttribute("id", "toc-" + i); // gives each h2 a unique id
        // observer.observe(heading);
        heading.setAttribute("id", i); // gives each heading a unique id
        // const item = document.createElement("a"); // creates an anchor element called "item" for each h2
        // item.innerHTML = heading.innerHTML // gives each item the text of the corresponding heading
        // item.setAttribute("class", "tocitem"); // gives each item the correct class
        // item.setAttribute("href", "#" + i); // gives each item the correct anchor link
        // document.querySelector("#toc").appendChild(item); // places each item inside the Table of Contents div
    });
}

export default defineNuxtPlugin((nuxtApp) => {
    // Doing something with nuxtApp
    nuxtApp.blogNavi = blogNavi;
})
