import "../stylesheets/post.css"

const Post = ({postTitle, setPostTitle, postBody, setPostBody, handleSubmit}) => {
  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <label className="postLabel" htmlFor="postTitle">Add post title</label>
        <input type="text" className="postTitle" id="postTitle" placeholder="Add post title" value={postTitle} onChange={e => setPostTitle(e.target.value)}/>
        <label className="postLabel" htmlFor="postBody">Add post content</label>
        <textarea name="postBody" className="postBody" id="postBody" cols="30" rows="10" placeholder="Add post content" value={postBody} onChange={e => setPostBody(e.target.value)}></textarea>
        <button type="submit" className="submitButton" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default Post
