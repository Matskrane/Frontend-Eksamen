const url = "https://www.matskrane.no/wp-json/wp/v2/posts";
const postHTML = document.querySelector(".posts")
const loader = document.querySelector('.loading-spinner');

async function getPosts() {
    try{
        const response = await fetch(url);
        const getPosts = await response.json();
        listPosts(getPosts);
        console.log(getPosts);
        loader.style.display = "none"
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
          <div class="background-card">
            <a href="specificpost.html?id=${post.id}">
              <h3>${post.title.rendered}</h3>
            </a>
              <div alt="YouTube Video" ${post.content.rendered} </div>
             <a class="button" href="specificpost.html?id=${post.id}">Go to post</a>
          </div>      
        </div>
        
        `;
    })

}


/* Next page or load more  */ 

const viewMoreBtn = document.querySelector('button');
let page = 1;

const loadPosts = () => {
  page++;
let viewMore = `https://matskrane.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=${page}`;
  fetch(viewMore)
    .then((response) => response.json())
    .then((data) => listPosts(data))
    .catch((error) => loadPosts())
    console.log(error);
};

viewMoreBtn.addEventListener("click", loadPosts)


