import logo from './logo.svg';
import './App.css';
import Img2 from './Assets/img2.png';
import Particle from './components/Particle';
import Invite from './components/Invite';

function App() {
  return (
    <>
    
    <div className="App">
      <div  className='logo'>
      <img src={Img2} width={200}/>
      </div>
      

      <h1>hello</h1>
    </div>
    <Particle />
    <Invite />
</>
  );
}

export default App;
