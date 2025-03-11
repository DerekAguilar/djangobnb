import Image from "next/image";

interface CategoriesProps{
    dataCategory:string;
    setCategory:(category:string) => void;
}

const Categories:React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
                <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory=='beachfront' ? 'border-gray-800' :  'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                onClick={()=>setCategory('beachfront')}
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
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory=='countryside' ? 'border-gray-800' :  'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                onClick={()=>setCategory('countryside')}
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
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory=='cabin' ? 'border-gray-800' :  'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                onClick={()=>setCategory('cabin')}
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
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory=='tiny-home' ? 'border-gray-800' :  'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                onClick={()=>setCategory('tiny-home')}
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
        </>
    )
}

export default Categories;