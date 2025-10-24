import { introData, blogData } from "./data.js";

function renderIntro(){
    document.getElementById("intro").innerHTML = `
    <p>${introData.date}</p>
    <h2>${introData.topic}</h2>
    <p>${introData.content}</p>
    `;
}

function renderBlogs(){
    console.log(document.getElementById("blogs"))
    document.getElementById("blogs").innerHTML = getBlogsHtml();
}

function getBlogsHtml(){
    return blogData.map(blog => `
        <div>
            <img src="./images/${blog.image}">
            <p>${blog.date}</p>
            <h2>${blog.topic}</h2>
            <p>${blog.content}</p>
        </div>
        `).join('');
}

renderIntro()
renderBlogs()