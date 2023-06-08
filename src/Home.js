const Home = () => {

    const handleClick = () => {
        console.log('handleClick event called!');
    }

    const handleClick2 = (name) => {
        console.log('Author: '+name);
    }

    return ( 
        <div className="home">
            <h1>Home Page</h1>
             {/* click event */}
         <button onClick={handleClick}>Click Me</button>
         <button onClick={()=>{
            handleClick2('freddie');
         }}>Click Me 2</button>
        </div>
        
     );
}
 
export default Home;