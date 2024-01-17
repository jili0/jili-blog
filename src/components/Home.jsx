import "../stylesheets/home.css"

const Home = ({posts}) => {
  return (
    <>
      <ul>{posts.map(post => <li><p>{post.postTitle}</p><p>{post.postBody}</p></li>)}</ul>
    </>
  )
}

export default Home
