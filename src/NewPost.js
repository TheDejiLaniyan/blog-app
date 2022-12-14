import React from 'react'

const NewPost = ({
  handleSubmit, postTitle, postBody, setPostTitle, setPostBody
}) => {
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
        <form onSubmit={handleSubmit} className='newPostForm'>
          <label htmlFor="postTitle">Title:</label>
          <input type="text"id="postTitle" value={postTitle} onChange= {(e) => setPostTitle(e.target.value)} />

          
          <label htmlFor="postBody">Post:</label>
          <textarea type="text"id="postBody" 
                  value={postBody} onChange= {(e) => setPostBody(e.target.value)} ></textarea>
                  <button type="submit">Submit</button>
        </form>
    </main>
  )
}

export default NewPost