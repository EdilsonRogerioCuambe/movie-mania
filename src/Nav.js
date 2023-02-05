import React, { useEffect, useState } from 'react';

import logo from "./assets/image/NetFlix.svg";
import avatar from "./assets/avatar/homem preto.svg";

const Nav = () => {

    const [mostrar, setMostrar] = useState(false);

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