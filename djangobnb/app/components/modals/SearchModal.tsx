'use client';

import Modal from "./Modal";
import { useState } from "react";
import DatePicker from "../forms/Calendar";
import { Range } from "react-date-range";
import CustomButton from "../forms/CustomButton";
import useSearchModal from "@/app/hooks/useSearchModal";
import SelectCountry,{SelectCountryValue} from "../forms/SelectCountry";
import { SearchQuery } from "@/app/hooks/useSearchModal";

const initialDateRange={
    startDate:new Date(),
    endDate:new Date(),
    key:'selection'
}

const SearchModal=()=>{
    let content=(<></>);
    const searchModal=useSearchModal();
    const [numGuests,setNumGuests]=useState<string>('1');
    const [numBedrooms,setNumBedrooms]=useState<string>('0');
    const [numBathrooms,setNumBathrooms]=useState<string>('0');
    const [dateRange,setDateRange]=useState<Range>(initialDateRange);
    const [country,setCountry]=useState<SelectCountryValue>();

    //
    const closeAndSearch=()=>{
        const newSearchQuery:SearchQuery= {
            country:country?.label,
            checkIn:dateRange.startDate,
            checkOut:dateRange.endDate,
            guests:parseInt(numGuests),
            bedrooms:parseInt(numBedrooms),
            bathrooms:parseInt(numBathrooms),
            category:''
        }

        searchModal.setQuery(newSearchQuery);
        searchModal.close();
    }

    //Elegir rangos de fecha
    const _setDateRange=(selection:Range) => {
        if(searchModal.step==='checkin') {
            searchModal.open('checkout')
        } else if (searchModal.step === 'checkout') {
            searchModal.open('details')
        }

        setDateRange(selection);
    }

    //Contenidos
    const contentLocation= (
        <>
            <h2 className="mb-6 text-2xl">¿Dónde quieres ir?</h2>
            <SelectCountry
            value={country}
            onChange={(value)=>setCountry(value as SelectCountryValue)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                label='Fecha de llegada ->'
                onClick={()=>searchModal.open('checkin')}
                />
            </div>
        </>
    )

    const contentCheckIn= (
        <>
            <h2 className="mb-6 text-2xl">¿Cuándo quieres llegar?</h2>
            <DatePicker
            value={dateRange}
            onChange={(value)=>_setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                label='<- Lugar'
                onClick={()=>searchModal.open('location')}
                />
                <CustomButton
                label='Fecha de salida ->'
                onClick={()=>searchModal.open('checkout')}
                />
            </div>
        </>
    )

    const contentCheckOut= (
        <>
            <h2 className="mb-6 text-2xl">¿Cuándo quieres salir?</h2>
            <DatePicker
            value={dateRange}
            onChange={(value)=>_setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                label='<- Fecha de llegada'
                onClick={()=>searchModal.open('checkin')}
                />
                <CustomButton
                label='Detalles ->'
                onClick={()=>searchModal.open('details')}
                />
            </div>
        </>
    )

    const contentDetails= (
        <>
            <h2 className="mb-6 text-2xl">Detalles</h2>
            <div className="space-y-4">
                <div className="space-y-4">
                    <label>Número de huéspedes</label>
                    <input 
                    className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    type="number" 
                    min="1" 
                    value={numGuests} 
                    placeholder="Número de huéspedes..."
                    onChange={(e)=>setNumGuests(e.target.value)}
                    />
                </div>
                <div className="space-y-4">
                    <label>Número de habitaciones</label>
                    <input 
                    className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    type="number" 
                    min="1" 
                    value={numBedrooms} 
                    placeholder="Número de habitaciones..."
                    onChange={(e)=>setNumBedrooms(e.target.value)}
                    />
                </div>
                <div className="space-y-4">
                    <label>Número de baños</label>
                    <input 
                    className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    type="number" 
                    min="1" 
                    value={numBathrooms} 
                    placeholder="Número de baños..."
                    onChange={(e)=>setNumBathrooms(e.target.value)}
                    />
                </div>
            </div>            

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                label='<- Fecha de salida'
                onClick={()=>searchModal.open('checkout')}
                />
                <CustomButton
                label='Buscar'
                onClick={closeAndSearch}
                />
            </div>
        </>
    )
    

    if (searchModal.step=='location') {
        content=contentLocation;
    } else if (searchModal.step=='checkin') {
        content=contentCheckIn;
    } else if (searchModal.step=='checkout') {
        content=contentCheckOut;
    } else if (searchModal.step=='details') {
        content=contentDetails;
    }

    return (
        <Modal
        label='Buscar'
        content={content}
        close={searchModal.close}
        isOpen={searchModal.isOpen}
        />
    )
}

export default SearchModal