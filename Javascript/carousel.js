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



