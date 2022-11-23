import React, { useState } from "react";
import { VehicleTypeSelect } from "./VehicleTypeSelect";
import { VehicleFilter, VehicleType } from "../data/vehicles/contracts";


interface filterProps{
    onChange:(value: VehicleFilter)=>void
}


export const Filter: React.FC<filterProps>=({onChange})=> {

    const [nameOfVehicle,setNameOfVehicle]=useState("")
    const [typeOfVehicle,setTypeOfVehicle]=useState<null | VehicleType>(null)

    return(<>
        Название ТС: 
        <input type="text" value={nameOfVehicle} onChange={
            (evt:any)=>{setNameOfVehicle(evt.target.value); onChange({title: evt.target.value,type:typeOfVehicle})}
            }/> 
        Тип ТС:
        <VehicleTypeSelect value={typeOfVehicle} onChange={
        (val)=>{ setTypeOfVehicle(val); onChange({title: nameOfVehicle,type:val})}
        }/>
        </>
    )
    
}
