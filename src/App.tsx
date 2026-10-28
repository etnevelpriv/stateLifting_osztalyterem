import { useState } from "react"
import type { OsztalyAdatok } from "./Components/OsztalyAdatok/OsztalyAdatok.interface"

export const App = function () {
    const [jelenlevok, setJelenlevok] = useState<OsztalyAdatok["jelenlevok"]>(24)
    const [hangulat, setHangulat] = useState<OsztalyAdatok["hangulat"]>("Atlagos")

    const jelenlegNoveles = function() {
        setJelenlevok(jelenlevok+1)
    }

    const jelenletCsokkentes = function () {
        setJelenlevok(jelenlevok-1)
    }

    // Ezt kicsit tulbonyolitottam veletlenul, de mostmar igy marad
    const hangulatValtoztatas = function () {
        const hangulatLehetosegek:OsztalyAdatok["hangulat"][] = ["Atlagos", "Jo", "Kivalo"];
        for(let i = 0; i < hangulatLehetosegek.length; i++) {
            const hangulatLehetoseg:OsztalyAdatok["hangulat"] = hangulatLehetosegek[i];
            if (hangulat == hangulatLehetoseg) {
                if (hangulat  == "Kivalo") {
                    setHangulat(hangulatLehetosegek[0])
                } else {
                    setHangulat(hangulatLehetosegek[i+1])
                }
            }   
        }
    }
}