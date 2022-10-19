// SQAD --> Iniciativas --> Tareas

const DataSquads = [
    {   id:"ODT",
        title:"Delivery Tecnico",
        subtitle: "Listado de Iniciativas:",
        icon:"fas fa-truck-fast",
        oneProject: true
    },
   
    {   id:"OED",
        title:"Exp. Digital",
        subtitle: "Listado de Iniciativas:",
        icon:"fas fa-laptop",
        oneProject: true
    },
    {   id:"OGM",
        title:"Go 2 Market",
        subtitle: "Listado de Iniciativas:",
        icon:"fas fa-store",
        oneProject: true
    },
    {   
        id:"OMCYS",
        title:"Mejora Continua",    
        subtitle: "Listado de Iniciativas:",
        icon:"fas fa-fw fa-brain",
        oneProject: true,
        initiatives:[
            {id:"divider",title:"Listado de Soportes:"},
            {id:"OSSTKTS",title:"Ticketeras"},
            {id:"OSSWFX",title:"Workforce"},
            ]
    },

    {   id:"2e2f0ae6b85d",
        title:"Fuerza de Trabajo",
        subtitle: "Listado de Defectos:",
        icon:"fas fa-person-digging",
        oneProject: false,
        initiatives:[
                    {id:"FMR",title:"Field Manager"},          
                    {id:"TBX",title:"Toolbox"},
                    {id:"OPENORD",title:"Open Ordenes"},
                    {id:"OSSWFX",title:"Workforce"},
                    ]
    },

]


export default DataSquads