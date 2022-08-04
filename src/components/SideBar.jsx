import SideBarHeadBrand from '../components/SideBarHeadBrand.jsx'
import SideBarHeadItem from '../components/SideBarHeadItem.jsx'
import SideBarDividerHeader from '../components/SideBarDividerHeader.jsx'
import SideBarDividerElement from '../components/SideBarDividerElement.jsx'
import SideBarDividerText from '../components/SideBarDividerText.jsx'

import SideBarGroupItemSquad from './SideBarGroupItemSquad.jsx'
import SideBarGroupItemCustom from './SideBarGroupItemCustom.jsx'

import SideBarNotGroupItem from './SideBarNotGroupItem.jsx'
import SideBarButton from './SideBarButton.jsx'

function SideBar() {
    return (
    <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                
            <SideBarHeadBrand />
        
            <SideBarDividerHeader />

            <SideBarHeadItem text={"Dashboard Iniciativas"} icon={"fas fa-fw fa-tachometer-alt"} link={"index.html"} />
            <SideBarHeadItem text={"Journey Cliente"} icon={"fas fa-fw fa-laugh"} link={"Journey"} />
        
            <SideBarDividerElement />
            <SideBarDividerText text ={"Iniciativas por SQUAD"} />

            <SideBarGroupItemSquad title={"Delivery Tecnico"} subtitle={"Listado de Iniciativas:"} />
            <SideBarGroupItemSquad title={"Exp. Digital"} subtitle={"Listado de Iniciativas:"} />
            <SideBarGroupItemSquad title={"Go 2 Market"} subtitle={"Listado de Iniciativas:"} />
            <SideBarGroupItemSquad title={"Fuerza de Trabajo"} subtitle={"Listado de Iniciativas:"} />
            <SideBarGroupItemSquad title={"Soporte / Procesos"} subtitle={"Listado de Iniciativas:"} />

            <SideBarDividerElement />
            <SideBarDividerText text ={"Links utiles"} />

            <SideBarGroupItemCustom 
                    title={"Informes Operativos"} 
                    subtitle={"Reportes:"} 
                    icon={"fas fa-fw fa-wrench"} 
                    items={[
                            {desc:"Horas de Agenda", link:"https://app.powerbi.com/view?r=eyJrIjoiZmE3MTQxNDAtMTA5MS00NTJiLTg3MGQtNTNmNTA2ODMyZDM5IiwidCI6ImUwNzc5ZGVmLWViOTEtNDI0Mi1hZTZhLWYzOTYyYjFhMWI1YSIsImMiOjR9"},
                            {desc:"Cumplimiento", link:"https://app.powerbi.com/view?r=eyJrIjoiZmE3MTQxNDAtMTA5MS00NTJiLTg3MGQtNTNmNTA2ODMyZDM5IiwidCI6ImUwNzc5ZGVmLWViOTEtNDI0Mi1hZTZhLWYzOTYyYjFhMWI1YSIsImMiOjR9"},
                            {desc:"Salud de Red", link:"https://app.powerbi.com/view?r=eyJrIjoiNmYyNDkxNGEtMTViMi00NTI5LThkNWQtMTAzZDdhODllYTBlIiwidCI6ImUwNzc5ZGVmLWViOTEtNDI0Mi1hZTZhLWYzOTYyYjFhMWI1YSIsImMiOjR9"},
                            {desc:"Pendientes", link:"https://app.powerbi.com/view?r=eyJrIjoiM2JjNTQ0NmYtODdmYS00OGM2LTgxYjgtM2YwODQ1Y2I3MGQyIiwidCI6ImUwNzc5ZGVmLWViOTEtNDI0Mi1hZTZhLWYzOTYyYjFhMWI1YSIsImMiOjR9"},
                            {desc:"Service / Padron", link:"https://app.powerbi.com/view?r=eyJrIjoiNTg1MzY0ZWQtN2ZjNC00NzFlLWEzYWYtNDI4MTFkOWRjOTMzIiwidCI6ImUwNzc5ZGVmLWViOTEtNDI0Mi1hZTZhLWYzOTYyYjFhMWI1YSIsImMiOjR9"},

                        ]} 
                />
            <SideBarGroupItemCustom 
                    title={"Webs"} 
                    subtitle={"Webs de Indicadores:"} 
                    icon={"fas fa-globe-americas"} 
                    items={[
                            {desc:"Web Perfomance", link:"http://tecnica.corp.cablevision.com.ar/Operativas/Performance/Shared%20Documents/Web/index.html"},
                            {desc:"Data analitycs", link:"http://ayr/ayr/Reportes/Lista/User"},
                            {desc:"UnMacMe", link:"http://soc.telecom.com.ar/unmacme/"},
                            {desc:"Quality Comander", link:"http://10.24.5.209/"},
                            {desc:"Exelencia Opr.", link:"http://10.75.132.243/WebEO"},
                        ]} 
                />

            <SideBarDividerElement />
            <SideBarDividerText text ={"Biblioteca"} />
    
            <SideBarGroupItemCustom 
                    title={"Iniciativas Finalizadas"} 
                    subtitle={"listado:"} 
                    icon={"fas fa-clipboard"} 
                    items={[
                            {desc:"En Construccion...", link:""},
         
                        ]} 
                />
            <SideBarNotGroupItem desc={"Repositorio de Datos"} icon={"fas fa-box-open"} link={"http://tecnica.corp.cablevision.com.ar/Operativas/Performance/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2fOperativas%2fPerformance%2fShared%20Documents%2fRepositorio&FolderCTID=0x0120009D5C62F441FD4646A6584238B9CE143C"}  />

            <SideBarDividerElement />
            <SideBarButton />
          
        </ul>
    </>
        );
  }
  
  export default SideBar;