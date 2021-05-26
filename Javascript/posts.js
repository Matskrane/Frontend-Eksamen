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
        <div class="background-card">
        <a href="specificpost.html?id=${post.id}">
        <h3>${post.title.rendered}</h3>
        </a>
        ${post.content.rendered}
        <a class="button" href="specificpost.html?id=${post.id}">Go to post</a>
        </div>      
        </div>

        `;
    })

}

/* Next page or load more  */ 

const loadMoreBtn = document.querySelector('button');
let pageCounter = 1;
let loadMoreUrl = `https://matskrane.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=${pageCounter}`;

function displayMoreMedia(posts){
    posts.forEach(function(post){
        postHTML.innerHTML += `

    <div class="video">
    <div class="background-card">
    <a href="specificpost.html?id=${post.id}">
    <h3>${post.title.rendered}</h3>
    </a>
    ${post.content.rendered}
    <a class="button" href="specificpost.html?id=${post.id}">Go to post</a>
    </div>      
    </div>

    `;
  })
}

const lastPage = () => {
  loadMoreBtn.innerHTML = "Last page";
  loadMoreBtn.disabled = true;
};

const loadPosts = () => {
  pageCounter++;
  loadMoreUrl = `https://matskrane.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=${pageCounter}`;
  console.log(loadMoreUrl);
  fetch(loadMoreUrl)
    .then((response) => response.json())
    .then((data) => displayMoreMedia(data))
    .catch((error) => lastPage());
};

loadMoreBtn.addEventListener("click", loadPosts);