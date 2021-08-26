import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
// import UserProfile from "./components/Userprofile";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Fragment>
      <Header />
      {!isLoggedIn && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
