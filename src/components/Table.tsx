import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import { Vehicle,vehicleTypeTitles } from "../data/vehicles/contracts";

interface tableItemProps{
    vehicle: Vehicle;
    number: number;
}
interface tableProps{
    vehicles: Vehicle[];
}

const TableItem: React.FC <tableItemProps> = ({vehicle,number}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{vehicle.title}</td>
            <td>{vehicleTypeTitles[vehicle.type]}</td>
            <td>
                <CurrencyLabel value={vehicle.price} fractionDigits={2} />
            </td>
        </tr>
    );
};


export const Table: React.FC<tableProps> = ({ vehicles }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Тип ТС</th>
                <th>Цена, ₽</th>
            </tr>
            </thead>
            <tbody>
            {vehicles.map((x, i) => (
                <TableItem key={x.id} number={i + 1} vehicle={x} />
            ))}
            </tbody>
        </table>
    );
};
