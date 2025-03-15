import { getUserId } from "../lib/actions";
import PropertyList from "../components/properties/PropertyList";

const MyPropertiesPage=async ()=>{
    const userId=await getUserId();
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">
                Mis propiedades
            </h1>
            <div className="grid grid-cos-1 md:grid-cols-3 gap-6">
              <PropertyList
              host_id={userId}
              />
            </div>
        </main>
    )
}

export default MyPropertiesPage;
