import React from 'react';
import logo from '../assets/image/NetFlix.svg';
import avatar from '../assets/avatar/homem preto.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const PerfilScreen = () => {
    const navigate = useNavigate();

    const user = useSelector(selectUser);

    return (
        <div
            className=" h-screen bg-black"
        >
            <div
                className=""
            >
                <div
                    className="h-full w-full bg-gradient-to-t from-black to-transparent"
                >
                    <div
                        className="flex items-center justify-between pt-5 px-10"
                    >
                        <img
                            onClick={() => navigate('/')}
                            src={logo}
                            alt="logo"
                            className="w-36 hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
                        />

                        <img
                            src={avatar}
                            alt="avatar"
                            className="w-12 h-12 rounded-full hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
                        />

                    </div>

                </div>
            </div>

            <div
                className="flex flex-col items-center justify-center mt-40"
            >
                <img
                    className="h-32 w-32 rounded-full"
                    src={user.profileUrl ? user.profileUrl : avatar}
                    alt="Avatar"
                />
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-white text-2xl font-bold py-2">{user.email}</h1>
                    <div className="flex items-center justify-center py-3">
                        <h1 className="text-white text-xl font-bold">Plano:</h1>
                        <div className="bg-purple-600 rounded-md px-4 py-1 text-white font-bold ml-2">
                            <h1 className="text-white text-xl font-bold">
                                R$ 17,90
                            </h1>
                        </div>
                        <div className="bg-purple-600 rounded-md px-4 py-1 text-white font-bold ml-2">
                            <h1 className="text-white text-xl font-bold">
                                R$ 21,90
                            </h1>
                        </div>
                    </div>
                    <button
                        onClick={() => auth.signOut()}
                        className="bg-red-600 rounded-md px-4 py-2 text-white font-bold mt-4 hover:bg-red-500 transition duration-200 ease-in-out"
                    >
                        Sair
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PerfilScreen;