import React, { useState, useEffect } from 'react';
import axios from './axios';

const Linha = ({ title, fetchUrl, isLargRow = false }) => {

    const [filmes, setFilmes] = useState([]);

    const [offset, setOffset] = useState(0);
    
    const handleProximo = () => {
        if (offset + 7 < filmes.length) {
            setOffset(offset + 1);
        }
    }

    const handleAnterior = () => {
        if (offset > 0) {
            setOffset(offset - 1);
        }
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setFilmes(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(filmes);

    return (
        <div className="">
            <h2 className="text-2xl ml-6 text-white font-bold">{title}</h2>
            <div 
                className="flex p-4 transition duration-200 ease-linear transform"
            >
                <button
                    className="flex items-center bg-gray-800 text-white px-6 py-2 rounded-md mr-4 transition duration-200 transform hover:scale-105"
                    onClick={handleAnterior}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                {filmes.slice(offset, offset + 7).map((filme) => (
                    <img
                        key={filme.id}
                        className={`h-60 w-44 pr-4 cursor-pointer transition duration-200 transform hover:scale-110 ease-linear ${
                            isLargRow && "h-32"
                        }`}
                        src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                        alt={filme.name}
                    />
                ))}
                <button
                    className="flex items-center bg-gray-800 text-white px-6 py-2 rounded-md ml-4 transition duration-200 transform hover:scale-105"
                    onClick={handleProximo}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Linha