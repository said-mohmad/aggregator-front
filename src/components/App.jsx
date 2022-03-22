import style from "./App.module.css";
import SearchPage from "./SearchPage/SearchPage";

const App = () => {
  return <div className={style.app}>
    <SearchPage />
  </div>;
}

export default App;
