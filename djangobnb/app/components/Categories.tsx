'use client';

import { useState } from "react";
import Image from "next/image";
import useSearchModal,{SearchQuery} from "../hooks/useSearchModal";

const Categories=()=>{
    const searchModal=useSearchModal();
    const [category,setCategory]=useState('');

    const _setCategory=(_category:string)=>{
        setCategory(_category);
        const query:SearchQuery={
            country:searchModal.query.country,
            checkIn:searchModal.query.checkIn,
            checkOut:searchModal.query.checkOut,
            guests:searchModal.query.guests,
            bedrooms:searchModal.query.bedrooms,
            bathrooms:searchModal.query.bathrooms,
            category:_category
        }

        searchModal.setQuery(query);
    }

    return(
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div 
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            onClick={()=>_setCategory('')}
            >
                <Image 
                src="/ctg_beachfront.jpg" 
                alt="Categoría - Frente a la playa"
                width={20}
                height={20}
                />
                <span className="text-xs">
                    Todas
                </span>
            </div>
            <div 
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'beachfront' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            onClick={()=>_setCategory('beachfront')}
            >
                <Image 
                src="/ctg_beachfront.jpg" 
                alt="Categoría - Frente a la playa"
                width={20}
                height={20}
                />
                <span className="text-xs">
                    Frente a la playa
                </span>
            </div>
            <div 
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'countryside' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            onClick={()=>_setCategory('countryside')}
            >
                <Image 
                src="/ctg_countryside.jpg" 
                alt="Categoría - Casas de campo"
                width={20}
                height={20}
                />
                <span className="text-xs">
                    Casas de campo
                </span>
            </div>
            <div 
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'cabin' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            onClick={()=>_setCategory('cabin')}
            >
                <Image 
                src="/ctg_cabin.jpg" 
                alt="Categoría - Cabañas"
                width={20}
                height={20}
                />
                <span className="text-xs">
                    Cabañas
                </span>
            </div>
            <div 
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'tiny-home' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            onClick={()=>_setCategory('tiny-home')}
            >
                <Image 
                src="/ctg_tiny-home.jpg" 
                alt="Categoría - Casas pequeñas"
                width={20}
                height={20}
                />
                <span className="text-xs">
                    Casas pequeñas
                </span>
            </div>
        </div>
    )
}

export default Categories;