
// generate sidebar toc
const blogNavi = () => {
    document.getElementById("content").querySelectorAll("h2,h3").forEach(function (heading, i) { // runs a function for all h2 elements inside your rich text element
        heading.setAttribute("id", "toc-" + i); // gives each h2 a unique id
        // observer.observe(heading);
        let str = heading.innerHTML; // adds section titles to slugs
        str = str.replace(/\s+/g, '-').replace(/[°&\/\\#,+()$~%.'":;*?<>{}]/g, "").toLowerCase(); // replaces spaces with hyphens, removes special characters and extra spaces from the headings, and applies lowercase in slugs
        heading.setAttribute("id", str); // gives each heading a unique id
        const item = document.createElement("a"); // creates an anchor element called "item" for each h2
        item.innerHTML = heading.innerHTML // gives each item the text of the corresponding heading
        item.setAttribute("class", "tocitem"); // gives each item the correct class
        item.setAttribute("href", "#" + str); // gives each item the correct anchor link
        document.querySelector("#toc").appendChild(item); // places each item inside the Table of Contents div
    });

    // This is for the Table of Contents
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            if (entry.isIntersecting) {
                document.querySelectorAll(".active").forEach((z) => {
                    z.classList.remove("active")
                });
                document.querySelector(`a[href="#${id}"]`).classList.add("active");
            }
        });
    }, { rootMargin: '0px 0px -75% 0px' });
}

export default defineNuxtPlugin((nuxtApp) => {
    // Doing something with nuxtApp
    nuxtApp.blogNavi = blogNavi;
})
