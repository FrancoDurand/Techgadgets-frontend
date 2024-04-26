import { useEffect, useState } from "react";
import { Integrante } from "../../interface/integrante";
import { IntegranteApi } from "../../service/integranteapi";
import { Hero } from "./hero";
import './integrantes.css'

function Integrantes() {
    const [integrantes, setIntegrantes] = useState<Integrante[]>([]);

    useEffect(() => {
        const fetchIntegrantes = async () => {
            let lista = await IntegranteApi.getIntegrantes();
            setIntegrantes(lista);
        }

        fetchIntegrantes();
    }, [])

    return (
        <>
            <Hero />
            <div className="integrantes-ul">
                <h1><b>Integrantes:</b></h1>
                <ul>
                    {integrantes.map((integrante: Integrante) =>
                        <h2>{integrante.nombre} {integrante.apellido}</h2>)
                    }
                </ul>
            </div>
        </>
    )
}



export default Integrantes
