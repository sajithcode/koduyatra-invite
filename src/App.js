import logo from './logo.svg';
import './App.css';
import Img2 from './Assets/img2.png';
import Particle from './components/Particle';
import Invite from './components/Invite';
import Logo from './Assets/logo.png'

function App() {
  return (
    <>
    <Particle />
    
      <div  className='logo'>
      <img src={Logo} width={200}/>
      </div>
      

      
    <Invite />
  
    
</>
  );
}

export default App;
