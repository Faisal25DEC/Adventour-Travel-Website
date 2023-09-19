import "./App.css";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import AllRoutes from "./AllRoutes";
import { Footer } from "./Components/Shared/Footer";
import { NavbarShared } from "./Components/Shared/Navbar";
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
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        console.log(user);
        console.log(user.displayName);
        await createUserDocumentFromAuth(user, {
          bookings: [{ id: "adventour@test" }],
        });
        const data = getUserDocumentFromAuth(user);
        data.then((res) => {
          console.log(res.data());
          dispatch(loginUser({ ...res.data(), uid: user.uid }));
        });
        console.log(user);
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div>
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <NavbarShared />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
