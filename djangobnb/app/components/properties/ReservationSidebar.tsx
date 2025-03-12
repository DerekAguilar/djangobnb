export type Property={
    id:string;
    price_per_night:number;
}

interface ReservationSidebarProps {
    property:Property
}

const ReservationSidebar:React.FC<ReservationSidebarProps>=({
    property
})=>{
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">
                ${property.price_per_night} noche
            </h2>
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label 
                htmlFor=""
                className="mb-2 block font-bold text-xs"
                >
                    Huéspedes
                </label>
                <select 
                name=""
                id=""
                className="w-full -ml-1 text-sm"
                >
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>
            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnbDark rounded-xl">
                Reservar
            </div>
            <div className="mb-4 flex justify-between align-middle">
                <p>$200 x 4 noches</p>
                <p>$800</p>
            </div>
            <div className="mb-4 flex justify-between align-middle">
                <p>Tarifa de servicio de Djangobnb</p>
                <p>$40</p>
            </div>
            <hr/>
            <div className="mb-4 flex justify-between align-middle font-bold">
                <p>Total antes de impuestos</p>
                <p>$840</p>
            </div>
        </aside>
    )
}

export default ReservationSidebar