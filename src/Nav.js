import React, { useEffect, useState } from 'react';
import requests from './Requests';
import axios from './axios';

import logo from "./assets/image/NetFlix.svg";
import avatar from "./assets/avatar/homem preto.svg";

const Nav = () => {

    const [mostrar, setMostrar] = useState(false);
    const [buscar, setBuscar] = useState("");

    const handleInput = (e) => {
        setBuscar(e.target.value);
    }

    const transicaoNavBar = () => {
        if (window.scrollY > 100) {
            setMostrar(true);
        } else {
            setMostrar(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transicaoNavBar);
        return () => window.removeEventListener("scroll", transicaoNavBar);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (buscar) {
                const request = await axios.get(`${requests.fetchSearch}${buscar}`);
                console.log(request);
            }
        }
        fetchData();
    }, [buscar]);

    console.log(buscar);

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 transition duration-200 ease-in-out ${mostrar && "bg-black"
                }`}
        >   
            <div
                className="h-20 flex items-center justify-between px-10"
            >
                <img
                    className="w-28 cursor-pointer transition duration-200 transform hover:scale-125"
                    src={logo}
                    alt="Netflix Logo"
                />
                <input
                    className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="text"
                    placeholder="Buscar"
                    onChange={(e) => { e.preventDefault() }}
                />
                <img
                    className="h-12 w-12 rounded-full cursor-pointer transition duration-200 transform hover:scale-125"
                    src={avatar}
                    alt="Avatar"
                />
            </div>
        </div>
    )
}

export default Nav;