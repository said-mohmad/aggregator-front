import style from "./App.module.css";
import Header from "./Header/Header";
import SearchPage from "./SearchPage/SearchPage";
import PersonPage from "./PersonPage/PersonPage";
import Footer from "./Footer/Footer";
import MainPage from "../components/MainPage/Main";

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <MainPage />
      {/* <SearchPage /> */}
      {/* <PersonPage /> */}
      <Footer />
    </div>
  );
};

export default App;
