import React from 'react'
import Feed from './MinorComponents/Feed'

const Home = ({posts, setPosts}) => {
  return (
    <main className='Home'>
        <>
            {posts.length ? (
               <Feed posts = {posts}/>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </>
    </main>
  )
}

export default Home