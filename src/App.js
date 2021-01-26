import './App.css';
import NavBar from './components/navBar/navBar';
import HeaderSlider from './components/HeaderSlider/HeaderSlider';
import Services from './components/Services/Services';
import OurCompany from './components/OurCompany/OurCompany';
import Footer from './components/Footer/footer';
import HeaderSliderMobile from './components/HeaderSlider/HeaderSliderMobile';
import Media from 'react-media'
import NavBarTel from './components/navBar/navBarTel';

function App() {
  return (
    <div>
      <Media query={{ maxWidth: 1360 }}>
          {page =>page ? 
          <div>
            <NavBarTel/>
            <HeaderSliderMobile/>
          </div> 
          : 
          <div>
            <NavBar/>
            <HeaderSlider/>
          </div>
          }
      </Media>
      <Services/>
      <OurCompany/>
      <Footer/>
    </div>
  );
}

export default App;
