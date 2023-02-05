import React from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import Linha from '../Linha';
import requests from '../Requests'
import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <div className='home__screen'>
            <Nav />
            <Banner />
            <Linha title="Originais Netflix" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Linha title="Tendências" fetchUrl={requests.fetchTrending} />
            <Linha title="Em Alta" fetchUrl={requests.fetchTopRated} />
            <Linha title="Ação" fetchUrl={requests.fetchActionMovies} />
            <Linha title="Comédia" fetchUrl={requests.fetchComedyMovies} />
            <Linha title="Terror" fetchUrl={requests.fetchHorrorMovies} />
            <Linha title="Romance" fetchUrl={requests.fetchRomanceMovies} />
            <Linha title="Documentários" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen;