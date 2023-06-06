import  React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DetailsContainer from '../Container/Details';
import FooterComponent from  '../Components/Footer';
import HeaderComponent from '../Components/Header';
import HomeContainer from '../Container/Home';
import MoviesContainer from '../Container/Movies';
import TvSeriesContainer from '../Container/TvSeries';
import SearchContainer from '../Container/Search';
import AboutContainer from '../Container/Popular';
import ContactContainer from '../Container/User';

const  RouteComponent = ()=>{

    return (
        <>
            <BrowserRouter basename='/TestFinal'>
                <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<HomeContainer />} />
                        <Route path="/movies" element={<MoviesContainer />} />
                        <Route path="/series" element={<TvSeriesContainer />} />
                        <Route path="/search" element={<SearchContainer />} />
                        <Route path="/details/:movieid/:mediatype" element={<DetailsContainer />}/>
                        <Route path="/contact" element={<ContactContainer />} />
                        <Route path='/about' element={<AboutContainer />} />
                
                    </Routes>        
                <FooterComponent />
            </BrowserRouter>
        </>
    )
}

export default RouteComponent;