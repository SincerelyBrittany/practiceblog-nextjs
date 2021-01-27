function renderPosts(blog) {
  return (
    <div className="blogCard">
      <div className="blogCardImage">
        <img src={blog.social_image} alt="Image" />
      </div>
      <div className="blogCardContent">
        <h3>{blog.title}</h3>
        <span>{blog.description}</span>
      </div>
      <a href={blog.url} target="_blank">
        {" "}
        <span className="blogIcon"> </span>
      </a>
    </div>
  );
}

function devPosts({ posts }) {
  return <>{posts.map((post) => renderPosts(post))}</>;
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://dev.to/api/articles?username=sincerelybrittany"
  );
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default devPosts;
