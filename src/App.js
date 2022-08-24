import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import PostPage from './PostPage'
import NewPost from './NewPost'
import Missing from './Missing'
import { Route, Routes, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import {format} from 'date-fns'
import api from './api/posts'



function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () =>{
      try{
        const response = await api.get('/posts')
        setPosts(response.data)
      }catch(err){
        if(err.response){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else{
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchPosts()
  }, [])

 useEffect(() => {
  const filteredResults = posts.filter((post) => (
    (post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()))
    setSearchResults(filteredResults.reverse())
 }, [posts, search])

  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost =  {id, title:postTitle, datetime, body:postBody};
  //   // const customConfig = {
  //   //   headers: {
  //   //     'Content-Type': 'application/json;charset=UTF-8',
  //   //     "Access-Control-Allow-Origin": "*",
  //   //   }
  // };
    try{
        const response = await api.post('/posts', newPost)
        const allPosts = [ ...posts, response.data]
        setPosts(allPosts)
        setPostTitle('') //so itll revert back to emoty
        setPostBody('')
        navigate('/')
    } catch(err){
      // console.log(`Error: ${err.message}`)
      console.log(`Error: ${err.response.data}`)
    }
  }

  const handleDelete = (id) =>{
    const listPosts = posts.filter((post) => post.id !== id)
    setPosts(listPosts)
    navigate('/')
  }

  return (
    <div className="App">
      <Header title="Blog" />
      <Nav search={search}
            setSearch= {setSearch}/>
        <Routes>
          <Route exact path='/' element={<Home posts = {searchResults} setPosts = {setPosts}/>} />
          <Route exact path='/post' element={<NewPost postTitle = {postTitle}
                                                      postBody = {postBody}
                                                      setPostBody = {setPostBody}
                                                      setPostTitle = {setPostTitle}
                                                      handleSubmit = {handleSubmit}/>} />
          <Route exact path='/post/:id' element={<PostPage posts={posts} handleDelete = {handleDelete}/>}  />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='*' element={<Missing/>} />
        </Routes>
        
      <Footer />
    </div>
  );
}


                        

export default App;
