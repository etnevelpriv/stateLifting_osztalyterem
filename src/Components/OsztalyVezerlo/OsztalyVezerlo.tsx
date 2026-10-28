import type { OsztalyVezerlo_interface } from "../../Models/Interfaces/OsztalyVerezlo.interface";

export const OsztalyVezerlo = function (props: OsztalyVezerlo_interface) {
    return (
        <>
            <button onClick={props.jelenletNoveles}>Jelenlevok novelese</button>
            <button onClick={props.jelenletCsokkentese}>Jelenlevok csokkentese</button>
            <button onClick={props.hangulatValtoztatas}>Hangulat valtoztatasa</button>

        </>)
}