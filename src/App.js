import "./App.css";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import AllRoutes from "./AllRoutes";
import { Footer } from "./Components/Shared/Footer";
import { Navbar } from "./Components/Shared/Navbar";
import { Home } from "./Pages/Home";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  getUserDocumentFromAuth,
  onAuthStateChangedListener,
  updateBookings,
} from "./Utils/firebase/firebase";
import { loginUser } from "./Redux/userReducer/userActions";
import { useDispatch, useSelector } from "react-redux";
import { userReducer } from "./Redux/userReducer/userReducer";
function App() {
  const { isAuth, userDetails } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user, { bookings: ["test"] });
        const data = getUserDocumentFromAuth(user);
        data.then((res) => {
          console.log(res.data());
        });
        console.log(user);
        dispatch(loginUser(user));
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
