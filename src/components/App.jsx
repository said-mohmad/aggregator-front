import style from "./App.module.css";
import Header from "./MainPage/Header/Header";
import Main from "./MainPage/Main";
import Form from "./MainPage/SearchForm/Form";

function App() {
  return <div className={style.app}>
<Header/>
<Form/>
<Main/>
  </div>;
}

export default App;
