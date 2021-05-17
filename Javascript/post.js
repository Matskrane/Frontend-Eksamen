const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');


const url = `https://www.matskrane.no/wp-json/wc/store/products/${id}`;
fetch(url)
.then(response => response.json())
.then(data => {

displayProduct(data);
})

.catch((error) => {
  console.log(error)
});

const output = document.querySelector("#product");
function displayProduct (data) {
    console.log(data);
          
     let html = `
     
        <h1>${data.name}</h1>
        <img src="${data.images[0].src}" alt="${data.name}">
        <p>${data.price_html}</p>       
         
        `;

        output.innerHTML = html;
}