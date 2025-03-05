'use client';

import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import {useState} from "react";
import useSignupModal from "@/app/hooks/useSignupModal";

const SignupModal=()=>{
    const signupModal=useSignupModal();
    const content= (
        <>
            <h2 className="mb-6 text-2xl">
                ¡Te damos la bienvenida a Djangobnb!
            </h2>
            <form className="space-y-4">
                <input placeholder="Correo electrónico" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <input placeholder="Contraseña" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <input placeholder="Confirmar contraseña" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    Mensaje de error
                </div>
                <CustomButton
                label="Continuar"
                onClick={()=> console.log('Crear cuenta')}
                />
            </form>
        </>
    )

    return (
        <Modal
        isOpen={signupModal.isOpen}
        close={signupModal.close}
        label="Regístrate"
        content={content}
        />
    )
}

export default SignupModal