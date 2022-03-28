import style from "./App.module.css";
import Header from "./Header/Header";
import SearchPage from "./SearchPage/SearchPage";
import PersonPage from "./PersonPage/PersonPage";
import Footer from "./Footer/Footer";
import MainPage from "../components/MainPage/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import { useSelector } from "react-redux";
import { useState } from "react";
import OneCart from "./OneCart/OneCart";
import SidebarBlock from "./SearchPage/SidebarBlock/SidebarBlock";


const App = () => {

    const [inputText, setInputText] = useState("");
    const token = useSelector(state => state.application.token)
    if (token) {
        return (
        <div className={style.app}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/oneCard/:id" element={<><Header/> <div className={style.wrapper}><OneCart/> <SidebarBlock/></div><Footer/></>} />
                    <Route path="/home" element={<><Header /><MainPage /> <Footer /></>} />
                    <Route path="/search" element={<><Header /><SearchPage  /><Footer /></>} />
                    <Route path="/executor" element={<><Header /><PersonPage /><Footer /></>} />
                </Routes>
            </BrowserRouter>        
        </div>);
    } else {
        return (
            <div className={style.app}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/oneCard/:id" element={<><Header/> <div className={style.wrapper}><OneCart/> <SidebarBlock/></div><Footer/></>} />
                        <Route path="/home" element={<><Header /><MainPage /><Footer /></>}/>
                        <Route path="/search" element={<><Header /><SearchPage /><Footer /></>} />
                        {/* <Route path="/executor" element={<Navigate to='/home' replace/> } /> */}
                        <Route path="/executor" element={<><Header /><PersonPage /><Footer /></>} />

                    </Routes>
                </BrowserRouter>        
            </div>);
    }
    


};

export default App;
