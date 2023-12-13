import React, {useCallback, useState} from 'react';
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import {Route, Routes} from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<NewsPage />}/>
            <Route path={"/:category"} element={<NewsPage />}/>
        </Routes>
    );
};

export default App;