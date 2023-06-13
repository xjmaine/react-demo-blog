import {useState} from 'react';
import BlogList from './BlogList';
const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author:'Freddie',id:1},
        {title: 'Best programming langugees for this year!', body: 'lorem ipsum...', author:'Thor',id:6},
        {title: 'Welcome party!', body: 'lorem ipsum...', author:'Thor',id:2},
        {title: 'web dev top tips!', body: 'lorem ipsum...', author:'Freddie',id:3},
        {title: 'Best programming langugees for this year!', body: 'lorem ipsum...', author:'Thor',id:4},
        {title: 'Best programming langugees for this year!', body: 'lorem ipsum...', author:'Thor',id:5}
    ] );

    const handleDelete =(id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            {/* <h1>Home Page</h1> */}
            <BlogList blogs={blogs} title="News and Events" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Thor')} title="Internal Annoucements" handleDelete={handleDelete}/>
  
        </div>
        
     );
}
 
export default Home;