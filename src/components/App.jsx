import style from "./App.module.css";
import Header from "./MainPage/Header/Header";
import Main from "./MainPage/Main";
import Form from "./MainPage/SearchForm/Form";
import SearchPage from "./SearchPage/SearchPage";

const App = () => {
  return <div className={style.app}>
    <Header/>
    <Form/>
    <Main/>
    <SearchPage />
  </div>;
}

export default App;
