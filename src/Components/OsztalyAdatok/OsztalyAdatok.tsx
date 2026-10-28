import type { OsztalyAdatok_interface } from "../../Models/Interfaces/OsztalyAdatok.interface";

export const OsztalyAdatok = function (props:OsztalyAdatok_interface) {
    return (
        <>
        <ul>
            <li>Diakok szama: {props.jelenlevok}</li>
            <li>Osztaly hangulata: {props.hangulat}</li>
        </ul>
        </>
    )
};