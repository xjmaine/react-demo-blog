import {useState} from 'react'; //updating state
import BlogList from './BlogList';
import { useEffect } from 'react';


const Home = () => {

    const [blogs, setBlogs] = useState(null); //populate this with db.json
    const[isPending, setIsPending] = useState(true); //loading message if fetching delays using state
    const [error, setError] = useState(null);// use state to show errow on browser

    //change state
    const [name, setName] = useState('Freddie');

    // fires on any state render (change state)
    useEffect(() =>{
        //using fetch for the endpoint
        fetch(' http://localhost:8000/blogss')
        .then(res => {
            if(!res.ok){
                throw Error('Failed to fetch data for that resource....');
            }
            return res.json()
        })
        .then( data => {
            // console.log(data);
            setBlogs(data);
            setIsPending(false);
            setError(null);
        }, 100)
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })

        //forcing delayed loading
        // useEffect(() =>{
        //     //using fetch for the endpoint
        //     setTimeout(() => {
        //         fetch(' http://localhost:8000/blogs')
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then( data => {
        //         // console.log(data);
        //         setBlogs(data);
        //         setIsPending(false);
        //     })
        //     }, 1000);
    }, 
    //using dependency array
    []);
 
    return ( 
        <div className="home">
            {/* <h1>Home Page</h1> */}
            {error && <div>{error}</div>}
            {isPending && <div className="">Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="News and Events"/> }
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Thor')} title="Internal Annoucements" handleDelete={handleDelete}/> */}
  
        </div>
        
     );
}
//start json server
 // npx json-server --watch data/db.json --port 8000
export default Home;