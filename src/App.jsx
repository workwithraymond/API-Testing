import {useState, useEffect} from 'react'
import Loading from './Loading';
import Posts from './Posts';

const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState([])

const removePost = (id) => {
  const newPosts = post.filter((posts) => posts.id !== id);
  setPost(newPosts);
}


const fetchData = async () => {
  setLoading(true)
  try {
    const response = await fetch(url)
    const newPost = await response.json()
    setPost(newPost)
  } catch (error) {
    console.log(error)
  }
  setLoading(false)
}

useEffect(() => {
  fetchData()
}, [])

if(loading) {
  return(
    <main>
      <Loading/>
    </main>
  )
}

if(post.length === 0) {
  return(
    <main>
      <div className='title'>
        <h2>no posts left</h2>
        <button type='button' style={{marginTop: '2rem'}} className='btn' onClick={fetchData}> Refresh</button>

      </div>
    </main>
  )
}

  return (
    <main>
      <Posts post = {post} removePost={removePost}/>
    </main>
  )
};
export default App;