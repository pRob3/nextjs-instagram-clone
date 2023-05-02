import Post from './Post';

export default function Posts() {
  const posts = [
    {
      id: '1',
      username: 'dennis',
      userImg:
        'https://media.licdn.com/dms/image/C5603AQGdK493X-2G0Q/profile-displayphoto-shrink_800_800/0/1629999642500?e=2147483647&v=beta&t=Xm3UfIawdbGeWSGt-ngqmKWOLrTufjlSFSO2aIgVUlk',
      img: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      caption: 'This is a dope caption',
    },
    {
      id: '2',
      username: 'notdennis',
      userImg:
        'https://media.licdn.com/dms/image/C5603AQGdK493X-2G0Q/profile-displayphoto-shrink_800_800/0/1629999642500?e=2147483647&v=beta&t=Xm3UfIawdbGeWSGt-ngqmKWOLrTufjlSFSO2aIgVUlk',
      img: 'https://images.unsplash.com/photo-1528046657509-cb5f732754b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      caption: 'This is another dope caption',
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
