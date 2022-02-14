import './App.css';
import Signup from './components/Signup';
import sideImg from './assets/sideimg.png';

function App() {
  return (
   <div className="container mt-3">
     <div className="row">
       <div className="col-md-5">
         <Signup/>
       </div>
       <div className="col-md-7 my-auto ">
         <img  className="img-fluid w-100 h-70"   src={sideImg} alt="/"></img>
       </div>
     </div>
   </div>

  );
}

export default App;
