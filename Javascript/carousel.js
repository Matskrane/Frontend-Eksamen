const url = "https://www.matskrane.no/wp-json/wp/v2/posts";
const latestPosts = document.querySelector(".posts");

async function makeSlider(){
  try{
      const response = await fetch(url);
      const getResults = await response.json();
      createHTML(getResults);
      console.log(getResults);
  }

  catch(error){
      console.log(error);
  }
};

makeSlider();

function createHTML(carouselSlider){
  carouselSlider.forEach(function(post){
      latestPosts.innerHTML += `
       
      <div class="carousel-slide">
        <div class="video">
          <div class="background-card">
            <div class="flex-sliders">
              <a class="prev" onclick="plusSlides(-1)">❮-</a>
              <a class="next" onclick="plusSlides(1)">-❯</a>
            </div>

              <a href="specificpost.html?id=${post.id}">
              <h3>${post.title.rendered}</h3>
              </a>
              ${post.content.rendered}
              <a class="button" href="specificpost.html?id=${post.id}">Go to post</a>
              
          </div>
        </div>      
      </div>  
      
      `;
  })

};


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll('.carousel-slide');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

/* Next page or load more  */ 

/*
const ViewMoreBtn = document.querySelector('button');

let page = 1;
let viewMore = `https://matskrane.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=${page}`;

function viewMorePosts(posts){
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


const loadPosts = () => {
  page++;
  viewMore = `https://matskrane.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&page=${page}`;
  console.log(viewMore);
  fetch(viewMore)
    .then((response) => response.json())
    .then((data) => viewMorePosts(data))
    .catch((error) => loadPosts());
    console.log(error);
};

ViewMoreBtn.addEventListener("click", loadPosts)

*/