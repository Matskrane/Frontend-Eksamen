const url = "https://www.matskrane.no/wp-json/wp/v2/posts";
const postHTML = document.querySelector(".posts")

async function getPosts() {
    try{
        const response = await fetch(url);
        const getPosts = await response.json();
        listPosts(getPosts);
        console.log(getPosts);
    }
   
    catch(error){
        console.log(error);
    }
    
}


getPosts();

function listPosts(posts){
    posts.forEach(function(post){
        postHTML.innerHTML += `
        
        <div class="video">
        <a href="specificpost.html?id=${post.id}">
        <h3> ${post.title.rendered}</h3>
        </a>
        ${post.content.rendered}      
        </div

        `;
    })

}