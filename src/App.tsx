import { useState } from "react"
import type { OsztalyAdatok_interface } from "./Models/Interfaces/OsztalyAdatok.interface"
import { OsztalyAdatok } from "./Components/OsztalyAdatok/OsztalyAdatok"
export const App = function () {
    const [jelenlevok, setJelenlevok] = useState<OsztalyAdatok_interface["jelenlevok"]>(24)
    const [hangulat, setHangulat] = useState<OsztalyAdatok_interface["hangulat"]>("Atlagos")

    const jelenlegNoveles = function() {
        setJelenlevok(jelenlevok+1)
    }

    const jelenletCsokkentes = function () {
        setJelenlevok(jelenlevok-1)
    }

    // Ezt kicsit tulbonyolitottam veletlenul, de mostmar igy marad
    const hangulatValtoztatas = function () {
        const hangulatLehetosegek:OsztalyAdatok_interface["hangulat"][] = ["Atlagos", "Jo", "Kivalo"];
        for(let i = 0; i < hangulatLehetosegek.length; i++) {
            const hangulatLehetoseg:OsztalyAdatok_interface["hangulat"] = hangulatLehetosegek[i];
            if (hangulat == hangulatLehetoseg) {
                if (hangulat  == "Kivalo") {
                    setHangulat(hangulatLehetosegek[0])
                } else {
                    setHangulat(hangulatLehetosegek[i+1])
                }
            }   
        }
    }
    return (
            <OsztalyAdatok jelenlevok={jelenlevok} hangulat={hangulat}/>
    )
}