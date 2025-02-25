import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage=()=>{
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                fill
                src="/beach_1.jpg"
                className="object-cover w-full h-full"
                alt="Casa de playa"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">
                        Nombre de la propiedad
                    </h1>
                    <span className="mb-6 block text-xl text-gray-600">
                        4 huéspedes - 2 habitaciones - 1 baño
                    </span>
                    <hr/>
                    <div className="py-6 flex items-center space-x-4">
                        <Image
                        src="/pfp_1.png"
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt="Nombre de usuario"
                        />
                        <p>
                            <strong>Anfitrión: John Doe</strong>
                        </p>
                    </div>
                    <hr/>
                    <p className="mt-6 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, possimus quibusdam dolor nemo velit quo, fuga omnis, iure molestias optio tempore sint at ipsa dolorum odio exercitationem eos inventore odit.
                    </p>
                </div>
                <ReservationSidebar/>
            </div>
        </main>
    )
}

export default PropertyDetailPage;