import { blogData } from "./data.js";

function renderBlogs(){
    console.log(document.getElementById("blogs"))
    document.getElementById("blogs").innerHTML += getBlogsHtml();
}

function getBlogsHtml(){
    return blogData.map(blog => `
        <div>
            <img src="./images/${blog.image}" class="blog-img">
            <p class="date">${blog.date}</p>
            <h2 class="topic">${blog.topic}</h2>
            <p class="content">${blog.content}</p>
        </div>
        `).join('');
}

renderBlogs()