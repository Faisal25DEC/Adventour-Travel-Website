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
  db,
  getUserDocumentFromAuth,
  onAuthStateChangedListener,
  updateBookings,
} from "./Utils/firebase/firebase";
import { loginUser } from "./Redux/userReducer/userActions";
import { useDispatch, useSelector } from "react-redux";
import { userReducer } from "./Redux/userReducer/userReducer";
import { setWindowClick } from "./Redux/windowReducer/windowActions";
import { doc, onSnapshot } from "firebase/firestore";
function App() {
  const { isAuth, userDetails } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleWindowClicked = () => {
    dispatch(setWindowClick());
  };

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
          const unSub = onSnapshot(doc(db, "users", res.id), (doc) => {
            doc.exists() &&
              dispatch(loginUser({ ...doc.data(), uid: res.uid }));
          });
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
