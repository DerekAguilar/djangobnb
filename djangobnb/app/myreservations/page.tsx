import Image from "next/image";

const MyReservationsPage=()=>{
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">
                Mis reservaciones
            </h1>
            <div className="space-y-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                            fill
                            src="/beach_1.jpg"
                            className="hover:scale-110 object-cover transition h-full w-full"
                            alt="Casa de playa"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">
                            Nombre de la propiedad
                        </h2>
                        <p className="mb-2"><strong>Fecha de llegada:</strong> 29/03/2025</p>
                        <p className="mb-2"><strong>Fecha de salida:</strong> 31/03/2025</p>
                        <p className="mb-2"><strong>Número de noches:</strong> 2</p>
                        <p className="mb-2"><strong>Precio total:</strong> $200</p>
                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Detalles de propiedad</div>
                    </div>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                            fill
                            src="/beach_1.jpg"
                            className="hover:scale-110 object-cover transition h-full w-full"
                            alt="Casa de playa"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">
                            Nombre de la propiedad
                        </h2>
                        <p className="mb-2"><strong>Fecha de llegada:</strong> 29/03/2025</p>
                        <p className="mb-2"><strong>Fecha de salida:</strong> 31/03/2025</p>
                        <p className="mb-2"><strong>Número de noches:</strong> 2</p>
                        <p className="mb-2"><strong>Precio total:</strong> $200</p>
                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Detalles de propiedad</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MyReservationsPage;