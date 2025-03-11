'use client';

import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import {useState} from "react";
import { useRouter } from "next/navigation";
import useSignupModal from "@/app/hooks/useSignupModal";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const SignupModal=()=>{
    //
    // Variables

    const router =useRouter();
    const signupModal=useSignupModal();
    const [email,setEmail]=useState('');
    const [password1,setPassword1]=useState('');
    const [password2,setPassword2]=useState('');
    const [errors,setErrors]=useState<string[]>([]);
    //
    // Función subir

    const submitSignup=async ()=>{
        const formData={
            email:email,
            password1:password1,
            password2:password2
        }
        const response=await apiService.postWithoutToken('/api/auth/register/',JSON.stringify(formData));

        if(response.access) {
            handleLogin(response.user.pk,response.access,response.refresh);
            signupModal.close();
            router.push('/');
        } else {
            const tmpErrors:string[]=Object.values(response).map((error:any)=>{
                return error;
            })
            setErrors(tmpErrors);
        }
    }

    const content= (
        <>
            <h2 className="mb-6 text-2xl">
                ¡Te damos la bienvenida a Djangobnb!
            </h2>
            <form 
            className="space-y-4"
            action={submitSignup}
            >
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <input onChange={(e) => setPassword1(e.target.value)} placeholder="Contraseña" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <input onChange={(e) => setPassword2(e.target.value)} placeholder="Confirmar contraseña" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                {errors.map((error,index)=> {
                    return (
                        <div 
                        className="p-5 bg-airbnb text-white rounded-xl opacity-80" 
                        key={`error_${index}`}
                        >
                            {error}
                        </div>
                    )
                })}
                
                <CustomButton
                label="Continuar"
                onClick={submitSignup}
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