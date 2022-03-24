import style from "./App.module.css";
import Header from "./Header/Header";
import SearchPage from "./SearchPage/SearchPage";
import PersonPage from "./PersonPage/PersonPage";
import Footer from "./Footer/Footer";
import MainPage from "../components/MainPage/Main";
import Carts from "../components/Cart/Carts";

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      {/* <MainPage /> */}
      {/* <SearchPage /> */}
      <PersonPage />
      {/* <Carts/> */}
      {/* <PersonPage /> */}
      <Footer />
    </div>
  );
};

export default App;
