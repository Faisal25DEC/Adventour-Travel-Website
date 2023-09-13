import "./App.css";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import AllRoutes from "./AllRoutes";
import { Footer } from "./Components/Shared/Footer";
import {Navbar} from './Components/Shared/Navbar'
import { Home } from "./Pages/Home";
function App() {
  return <div>
    <Navbar/>
  <AllRoutes/>
    <Footer/>
  </div>;
}

export default App;
