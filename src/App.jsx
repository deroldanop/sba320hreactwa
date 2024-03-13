//import { useEffect, useState } from "react";
import "./index.css";
//import SearchIcon from "./qMezIG01.svg";
import MovieCard from "./pages/MovieCard";
import Movies from "./pages/Movies";
import NavBar from "./components/NavBar";
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from "./pages/MovieDetail";

//Here is your key: 97e9bb6a
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/MovieDetail/:imdbID' element={<MovieDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
  
}
export default App;