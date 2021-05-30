const url = "https://www.matskrane.no/wp-json/wp/v2/posts";
const latestPosts = document.querySelector(".posts");
const loader = document.querySelector('.loading-spinner');

async function makeSlider(){
  try{
      const response = await fetch(url);
      const getResults = await response.json();
      createHTML(getResults);
      console.log(getResults);
      loader.style.display = "none"
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
              <a class="prev" onclick="plusSlides(-1)">❮</a>
              <a class="next" onclick="plusSlides(1)">❯</a>
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


/*  Sliders */

var videoNumber = 1;
  showSliders(videoNumber);

function plusSlides(number) {
  showSliders(videoNumber += number);
}
function currentSlides(number) {
  showSliders(videoNumber = number);
}

function showSliders(number) {
    var i;
    var slides = document.querySelectorAll('.carousel-slide');
    if (number > slides.length) {videoNumber = 1}
    if (number < 1) {videoNumber = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[videoNumber-1].style.display = "block";
}