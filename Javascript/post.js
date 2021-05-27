const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');


const url = `https://www.matskrane.no/wp-json/wp/v2/posts/${id}`;
fetch(url)
.then(response => response.json())
.then(data => {

displayProduct(data);
})

.catch((error) => {
  console.log(error)
});

const output = document.querySelector("#post");
function displayProduct (data) {
    console.log(data);
          
      let html = `

        <div class="specific-video">
        <div class="background-video">
        <h2> ${data.title.rendered} </h2> 
        <div class="video" ${data.content.rendered} </div>
        </div>      
        </div>
          
      
        `;

      output.innerHTML = html;
}