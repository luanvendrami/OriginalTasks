import { useEffect, useState } from "react";
import { getAllTasks } from '../../services'
import { NewGrid } from "components";
import { ITask } from "interfaces";


export const Home = () => {
    const [dados, setDados] = useState<ITask[]>();

    useEffect(() =>{
        getAllTasks().then(response => setDados(response)) 
    }, [])
    return(
        <NewGrid className="home-grid" dados={dados}/>
    )
}