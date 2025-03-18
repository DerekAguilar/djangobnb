'use client';

import useLoginModal from "../hooks/useLoginModal";
import { useRouter } from "next/navigation";
import apiService from "../services/apiService";

interface ContactButtonProps {
    userId:string|null;
    hostId:string;
}

const ContactButton:React.FC<ContactButtonProps>=({
    userId,
    hostId
})=>{
    const loginModal=useLoginModal();
    const router=useRouter();

    const startConversation=async  ()=>{
        if (userId) {
            const conversation=await apiService.get(`/api/chat/start/${hostId}/`)

            if (conversation.conversation_id) {
                router.push(`/inbox/${conversation.conversation_id}`)
            }
        } else {
            loginModal.open();
        }
    }

    return (
        <div 
        className="mt-6 py-4 px-6 cursor-pointer bg-airbnb hover:bg-airbnbDark transition text-white rounded-xl"
        onClick={startConversation}
        >
            Escríbele al anfitrión
        </div>
    );
}

export default ContactButton;