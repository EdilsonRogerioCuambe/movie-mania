import React, { useRef } from 'react';
import { auth } from '../firebase';

const RegistroScreen = () => {

    const emailRef = useRef(null);
    const senhaRef = useRef(null);

    const registro = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            senhaRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).then((error) => {
            alert(error.message);
        });
    };

    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            senhaRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div
            className="flex flex-col items-center justify-center"
        >
            <h1
                className="text-3xl font-bold text-white"
            >
                Faça seu login
            </h1>
            <form
                className="flex flex-col items-center"
            >
                <input
                    ref={emailRef}
                    type="email"
                    placeholder="Email"
                    className="bg-gray-800 text-white mt-3 mb-3 px-6 py-2 rounded-md mr-5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <input
                    ref={senhaRef}
                    type="password"
                    placeholder="Senha"
                    className="bg-gray-800 text-white mb-3 px-6 py-2 rounded-md mr-5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <button
                    onClick={login}
                    className="flex items-center bg-purple-600 text-white px-6 py-2 rounded-md transition duration-200 transform hover:scale-105"
                >Entrar</button>

                <p
                    className="text-white text-sm mt-3"
                >Ao entrar, você concorda com nossos Termos de Uso e Política de Privacidade.</p>
                <h4
                    className="text-white text-sm mt-3"
                >Não tem uma conta? <span
                    onClick={registro}
                    className="text-purple-600 cursor-pointer hover:underline"
                >Cadastre-se</span></h4>

            </form>

        </div>
    )
}

export default RegistroScreen;