const btnAdd = document.getElementById("btnAddPost");
const content = document.getElementById("content");
const display = document.getElementById("display");

btnAdd.addEventListener('click', function() {
    
    // AppendChild
    // CreateElement
    // CreateTextNode
    // ClassList.Add()
  
    let para = document.createElement("p");
    let paraContent = document.createTextNode("Sometext");
    para.appendChild(paraContent);

    let blogPost = document.createElement("div");
    blogPost.classList.add("post");
    blogPost.classList.add("dark");
    blogPost.appendChild(para);

    display.appendChild(blogPost);

});