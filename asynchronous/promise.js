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

function newPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = true;

      if(!error) {
        resolve();
      } else {
        reject('Error: Server error or something wrong');
      }
    }, 6000);
  });
}

// newPost({ title: 'Brand New Post', content: 'Lorem ipsum dolor sit.'})
//   .then(getPosts)
//   .catch(err => console.log(err));

const promise2 = fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json());

const promise1 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());



Promise.all([promise1, promise2])
  .then((val) => console.log(val));
