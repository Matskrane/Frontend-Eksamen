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
        <a href="post.html?id=${post.id}">
        ${post.title.rendered}</a>        
        </li>
        `;
    })

}
