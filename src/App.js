import NavigationBar from "./components/NavigationBar";
import "./style/page.css"
import "./style/Acara.css"
import "./style/tentang.css"
import "./style/startup.css"
import "./style/Kontak.css"
import "./style/Tab.css"
import "./style/layanan.css"
import "./style/Acara2.css"
import "./Eror/eror.css"
import Beranda from "./components/Beranda";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div> 
      <NavigationBar/>
      <FontAwesomeIcon/> 
      <Beranda/> 
      <Footer/>
    </div>
  
  );
}

export default App;
