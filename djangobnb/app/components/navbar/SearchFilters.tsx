'use client';

import useSearchModal from "@/app/hooks/useSearchModal";

const SearchFilters=()=>{
    const searchModal=useSearchModal();

    return (
        <div 
        className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full"
        onClick={()=>searchModal.open('location')}
        >
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Destino</p>
                        <p className="text-sm">Buscar destinos</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Llegada</p>
                        <p className="text-sm">Agregar fechas</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Salida</p>
                        <p className="text-sm">Agregar fechas</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Huéspedes</p>
                        <p className="text-sm">¿Cuántos?</p>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-airbnb hover:bg-airbnbDark transition rounded-full text-white">
                    <svg 
                    viewBox="0 0 32 32" 
                    style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: 4, overflow: 'visible'}} 
                    aria-hidden="true" 
                    role="presentation" 
                    focusable="false">
                        <path 
                        fill="none" 
                        d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SearchFilters;