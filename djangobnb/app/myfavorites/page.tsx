import PropertyList from "../components/properties/PropertyList";
import { getUserId } from "../lib/actions";

const MyFavoritesPage=async ()=>{
    const userId=await getUserId();
    
    if(!userId) {
        return (
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p>Necesitas estar autenticado para visualizar esta página.</p>
            </main>
        )
    }
    return (
        <main className="max-w-[1500px] max-auto px-6 pb-12">
            <h1 className="my-6 text-2xl">
                Mis propiedades favoritas
            </h1>
            <PropertyList
            favorites={true}
            />
        </main>
    )
}

export default MyFavoritesPage;