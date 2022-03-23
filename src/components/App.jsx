import style from "./App.module.css";
import Header from "./MainPage/Header/Header";
import Main from "./MainPage/Main";
import SearchPage from "./SearchPage/SearchPage";
import PersonPage from "./PersonPage/PersonPage";
import Footer from "./Footer/Footer";
import Carts from "./Cart/Carts";

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      {/* <Main /> */}
      {/* <SearchPage /> */}
      {/* <PersonPage /> */}
      <Carts/>
      <Footer />
    </div>
  );
};

export default App;
