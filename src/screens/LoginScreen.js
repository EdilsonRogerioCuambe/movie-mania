import React from 'react';
import banner from '../assets/image/banner.jpg';
import logo from '../assets/image/NetFlix.svg';

const LoginScreen = () => {
    return (
        <div
            className=""
        >
            <header
                className='h-screen bg-no-repeat bg-cover bg-center'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("${banner}")`,
                }}
            >
                <div
                    className="h-full w-full bg-gradient-to-t from-black to-transparent"
                >
                    <div
                        className="flex items-center justify-between pt-5 px-10"
                    >
                        <img
                            src={logo}
                            alt="logo"
                            className="w-52"
                        />

                        <button
                            className="flex items-center bg-purple-600 text-white px-6 py-2 rounded-md transition duration-200 transform hover:scale-105"
                        >Entrar</button>

                    </div>
                    <div
                        className="px-10 pt-44"
                    >
                        <h1
                            className="text-6xl font-bold text-white"
                        >Filmes, séries e muito mais. Sem limites.</h1>
                        <p
                            className="text-white pt-4 max-w-2xl"
                        >Assista onde quiser. Cancele quando quiser.</p>
                        <p
                            className="text-white pt-4 max-w-2xl"
                        >Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                        <div
                            className="flex items-center pt-4"
                        >
                            <form
                                className="flex items-center"
                            >
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-gray-800 text-white px-6 py-2 rounded-md mr-5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                />
                                <button
                                    className="flex items-center bg-purple-600 text-white px-6 py-2 rounded-md transition duration-200 transform hover:scale-105"
                                >Já sou assinante</button>
                            </form>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default LoginScreen;