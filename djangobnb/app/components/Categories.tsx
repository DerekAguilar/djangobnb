import Image from "next/image";

const Categories=()=>{
    return(
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
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
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
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
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
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
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
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