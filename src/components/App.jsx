import style from "./App.module.css";
import Header from "./Header/Header";
import Main from "./MainPage/Main";
import Form from "./MainPage/SearchForm/Form";
import SearchPage from "./SearchPage/SearchPage";
import PersonPage from "./PersonPage/PersonPage";
import Footer from "./Footer/Footer";
import MainPage from '../components/MainPage/Main'



const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <MainPage />
      <Form />
      <Main />
      <SearchPage />
      <PersonPage />
      <Footer />
    
    </div>
  );
};


export default App;
