import "./App.css";
import { Footer } from "./Components/Shared/Footer";
import {Navbar} from './Components/Shared/Navbar'
import { Home } from "./Pages/Home";

function App() {
  return <div>
    <Navbar/>
    <Home/>
    <Footer/>
  </div>;
}

export default App;
