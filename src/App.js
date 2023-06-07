
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog!';
  const likes = 50;
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        
      </div>
    </div>
  );
}

// function eButton(){
//   return(
//     <div>
//     <button>
//       Click Me!
//     </button>
    
//     <h1>Button</h1>
//   </div>
//   );
// }

// export default  eButton;

export default App;
