import { introData, blogData } from "./data.js";

function renderIntro(){
    document.getElementById("intro").innerHTML = `
    <div class="container">
        <p class="date">${introData.date}</p>
        <h2>${introData.topic}</h2>
        <p>${introData.content}</p>
    </div>
    `;
}

function renderBlogs(){
    console.log(document.getElementById("blogs"))
    document.getElementById("blogs").innerHTML = getBlogsHtml();
}

function getBlogsHtml(){
    return blogData.map(blog => `
        <div class="container">
            <img src="./images/${blog.image}" class="blog-img">
            <p class="date">${blog.date}</p>
            <h2 class="topic">${blog.topic}</h2>
            <p class="content">${blog.content}</p>
        </div>
        `).join('');
}

renderIntro()
renderBlogs()