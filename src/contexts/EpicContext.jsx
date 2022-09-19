import { createContext, useState } from "react";

export const EpicContext = createContext();

const EpicContextProvider = ({ children }) => {
    
    const [epic, setEpic] = useState({id:"prueba"});


    const addEpic= (epic) => {
        setEpic(epic)
        localStorage.setItem("EPIC", JSON.stringify(epic));
    }
    
    const removeEpic = () => {
        setEpic({});
        localStorage.removeItem('EPIC');
    }

    const setAvanceIssue= (issue, avance) => {
        epic.issues =  epic.issues.map((i) => i.key === issue ?  {...i, avanceIssue:avance} : i)
        setEpic(epic)
        localStorage.setItem("EPIC", JSON.stringify(epic));
      
    }
  

    const getAvanceEpic = () =>{

        return epic.avanceEpic
    }
    const getPendingEpic = () =>{
        return epic.pending
    }

    return (
        <EpicContext.Provider value={{getPendingEpic,getAvanceEpic,epic,addEpic,removeEpic , setAvanceIssue }}>
            { children }
        </EpicContext.Provider>
    );
}

export default EpicContextProvider;