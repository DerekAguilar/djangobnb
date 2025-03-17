'use client'; //Algunas funciones como onCLick no están permitidas en el formato por defecto (servidor) de un componente, así que se llama esto para usar como cliente

import useWebSocket,{ReadyState} from "react-use-websocket";
import CustomButton from "../forms/CustomButton";
import { ConversationType } from "@/app/inbox/page";
import { useEffect } from "react";

interface ConversationDetailsProps {
    conversation:ConversationType;
    token:string;
    userId:string;
}

const ConversationDetails:React.FC<ConversationDetailsProps>=({
    conversation,
    token,
    userId
})=>{
    const myUser=conversation.users?.find((user)=>user.id==userId);
    const otherUser=conversation.users?.find((user)=>user.id!=userId);

    const {sendJsonMessage,lastJsonMessage,readyState}=useWebSocket(`ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`,{
            share:false,
            shouldReconnect:()=>true
        }
    )

    useEffect(()=>{
       console.log('Estado de conexión cambiado',readyState) 
    },[readyState])

    return(
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                <p className="font-bold text-gray-500">
                    John Doe
                </p>
                <p>Lorem ipsum</p>
                </div>
                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-gray-500">
                        Jane Doe
                    </p>
                    <p>Lorem ipsum</p>
                </div>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input 
                type="text" 
                placeholder="Escribe tu mensaje..."
                className="w-full p-2 bg-gray-200 rounded-xl"
                />
                <CustomButton
                label="Enviar"
                onClick={()=>console.log('Clicked')}
                className="w-[100px]"
                />
            </div>
        </>
    )
}

export default ConversationDetails;