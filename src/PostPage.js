import React from 'react'
import {useParams} from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa';
import Missing from './Missing';

const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id)
  return (
    <main className='PostPage'>
        <article className='post'>
          {post && 
            <>
              <h2>{post.title}</h2>
              <p className='postDate'>{post.datetime}</p>
              <p className='postBody'>{post.body}</p>
                <div className='item'>
                  <FaTrashAlt
                    onClick={() => handleDelete(post.id)}
                    role="button"
                    tabIndex="0"
                    aria-label={`Delete ${post.post}`}
                      />
                </div>
            </>
          }
          {!post &&
            <Missing />
          }
        </article>
    </main>
  )
}

export default PostPage