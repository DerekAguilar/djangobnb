'use client';

import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import {useState} from "react";
import useLoginModal from "@/app/hooks/useLoginModal";

const LoginModal=()=>{
    const loginModal=useLoginModal();
    const content= (
        <>
            <h2 className="mb-6 text-2xl">
                ¡Te damos la bienvenida a Djangobnb!
            </h2>
            <form className="space-y-4">
                <input placeholder="Correo electrónico" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <input placeholder="Contraseña" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    Mensaje de error
                </div>
                <CustomButton
                label="Continuar"
                onClick={()=> console.log('Iniciar sesión')}
                />
            </form>
        </>
    )

    return (
        <Modal
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        label="Inicia sesión"
        content={content}
        />
    )
}

export default LoginModal