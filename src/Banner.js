import React, { useState, useEffect } from 'react';
import banner from "./assets/image/banner.jpg";
import axios from './axios';
import requests from './Requests';

const Banner = () => {

    const [filme, setFilme] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setFilme(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(filme);

    const cortar = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
            className='h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[500px] 2xl:h-[7000px] bg-no-repeat bg-cover bg-center'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${filme?.backdrop_path}")`,
            }}
        >
            <div
                className="h-full w-full bg-gradient-to-t from-black to-transparent"
            >
                <h1
                    className="text-6xl font-bold text-white px-10 pt-52"
                >{filme?.title || filme?.name || filme?.original_name}</h1>
                <div
                    className="flex items-center px-10 pt-4"
                >
                    <button
                        className="flex items-center bg-purple-600 text-white px-6 py-2 rounded-md transition duration-200 transform hover:scale-105"
                    >Assitir</button>
                    <button
                        className="flex items-center bg-gray-800 text-white px-6 py-2 rounded-md ml-4 transition duration-200 transform hover:scale-105"
                    >Minha Lista</button>
                </div>
                <p
                    className="text-white px-10 pt-4 max-w-2xl"
                >
                    {cortar(
                        filme?.overview, 175
                    )}
                </p>
            </div>

        </header>
    )
}

export default Banner;