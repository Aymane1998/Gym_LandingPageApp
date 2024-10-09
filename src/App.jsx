import './App.css'
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import BgImage from './assets/bg.png'

function App() {
 
const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize:'cover',
  backgroundPosition:'center',
  backGroundAttachement:'fixed'
}
  return (
    <div className='overflow-hidden'>
      <div style={bgStyle}>
        <Navbar/>
        <Hero/>
      </div>
      
    </div>
  );
}

export default App
