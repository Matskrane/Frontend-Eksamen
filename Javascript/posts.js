const api = "https://www.matskrane.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia";
const output = document.querySelector('#output');

fetch(api)
.then (response => response.json())
.then (data => listPosts(data))
.error (error => console.error("This happened: "+error));

function listPosts (posts) {
  for (let post of posts) {
    if (post.featured_media > 0) {
      let videoLink = post._embedded["_emded=wp:featuredmedia"][0];
      output.innerHTML += `<div>${videoLink}"</div>`;     
    } else {
      output.innerHTML += `<div>[Post id=${post.id} does not have a featured image]</div>`;   
    }
  }
}