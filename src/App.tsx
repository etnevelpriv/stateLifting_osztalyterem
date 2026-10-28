import { useState } from "react"

export const App = function () {
    const [jelenlevok, setJelenlevok] = useState<number>(24)
    const [hangulat, setHangulat] = useState<string>("Atlagos")
}