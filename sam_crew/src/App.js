import { useSelector } from "react-redux";
import "./App.css";
import StartShop from "./Components/StartShop";
import SignIn from "./Components/SignIn";
import SignUpModal from "./Components/SignUp";
import AllRouts from "./Pages/AllRouts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    const { isOpen } = useSelector((store) => store.modal);
    const { isLoginOpen, isSignUpOpen } = useSelector((store) => store.login);
    return (
        <div className="App">
            {isLoginOpen && <SignIn/>}
            {isSignUpOpen && <SignUpModal />}
            {isOpen && <StartShop/>}
            <AllRouts />
        </div>
    );
}

export default App;
