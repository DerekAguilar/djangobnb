'use client';

import useLoginModal from "@/app/hooks/useLoginModal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";

interface AddPropertyButtonProps {
    userId?:string|null;
}

const AddPropertyButton:React.FC<AddPropertyButtonProps>=({
    userId
})=>{
    const LoginModal=useLoginModal();
    const addPropertyModal=useAddPropertyModal();
    const airbnbYourHome=() => {
        if (userId) {
            addPropertyModal.open();
        } else {
            LoginModal.open();
        }
    }
    return (
        <div 
        className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
        onClick={airbnbYourHome}
        >
            Pon tu casa en Djangobnb
        </div>
    )
}

export default AddPropertyButton;