import './App.css';
import SideTitle from './Components/SideTitle';
import Navbar from './Components/Navbar';
// import EllipseBG from './Components/EllipseBG';
import Shoe from './Components/Shoe';
import MainText from './Components/MainText';
// import SideTitle from './Components/SideTitle';

function App() {
  return (
    <div className='main'>
      <SideTitle />
      <Navbar />
      {/* <EllipseBG /> */}
      <Shoe />
      <MainText />
      {/* <Ellipse /> */}
    </div>
  );
}

export default App;