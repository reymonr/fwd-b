const posts = [
  {
    title: 'My First Post',
    content: 'Lorem ipsum dolor sit amet.'
  },
  {
    title: 'Oh Second Post',
    content: 'Lorem ipsum dolor sit amet.'
  },
];

function getPosts() {
  setTimeout(() => {
    let allPosts = '';

    posts.forEach((post) => {
      allPosts += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = allPosts;
  }, 3000);
}

function newPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 6000);
}

newPost({ title: 'Brand New Post', content: 'Lorem ipsum dolor sit amet.'}, getPosts);

