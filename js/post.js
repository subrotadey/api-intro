function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}
loadPosts()
function displayPosts(posts){
    const postContainer = document.getElementById('posts');  //post id k niye asha hoyeche
    for(const post of posts){     // loop through
        // console.log(post);
        const div = document.createElement('div');  //div create
        div.classList.add('post');   // class create
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `                        //inner html set
        postContainer.appendChild(div);   // add the div
    }
}

function addAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function addAPost2(){
    fetch('https://jsonplaceholder.typicode.com/pusts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}