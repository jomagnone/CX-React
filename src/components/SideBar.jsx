
function SideBar() {
    return (
    <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            
        {/* Sidebar - Brand */}
         
        <a type ="button" className="sidebar-brand d-flex align-items-center justify-content-center" id="sidebarToggleBrand" >
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">C.X.<sup>OPR</sup></div>
        </a>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
        <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard Iniciativas</span></a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-laugh"></i>
            <span>Journey Cliente</span></a>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Heading */}
        <div className="sidebar-heading">
        Iniciativas por SQUAD
        </div>

        {/* Nav Item - Movil Collapse Menu */}
        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseMovil" aria-expanded="true" aria-controls="collapseMovil">
            <i className="fas fa-satellite-dish"></i>
            <span>Delivery Tecnico</span>
        </a>
        <div id="collapseMovil" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Listado de Iniciativas:</h6>
            <a className="collapse-item" href="./solucion remota.html" name="">Solucion Remota</a>
            <a className="collapse-item" name="">Agenda menor 24hs</a>
            <a className="collapse-item" name="">Renstalacion Online</a>
                
            </div>
        </div>

        </li>

        {/* Nav Item - Red Fija Collapse Menu */}
        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseftth" aria-expanded="true" aria-controls="collapseftth">
            <i className="fas fa-code-branch"></i>
            <span>Exp. Digital</span>
        </a>
        <div id="collapseftth" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Listado de Iniciativas:</h6>
            <a className="collapse-item" name="">Aviso por Falla</a>
            <a className="collapse-item" name="">Campaña OT Absorvida</a>
            <a className="collapse-item" name="">Campaña BH Vencida</a>
            </div>
        </div>
        </li>
        {/* Nav Item - Red Fija Collapse Menu */}
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseG2M" aria-expanded="true" aria-controls="collapseftth">
            
            <i className="fas fa-digital-tachograph"></i>
            <span>Go 2 Market</span>
            </a>
            <div id="collapseG2M" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Listado de Iniciativas:</h6>
                <a className="collapse-item" name="">Volte Fijo</a>
                <a className="collapse-item" name="">Personal Wifi</a>
        
            </div>
            </div>
        </li>
        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseHFC" aria-expanded="true" aria-controls="collapseHFC">
            <i className="fas fa-fw fa-network-wired"></i>
            <span>Fuerza de Trabajo</span>
        </a>
        <div id="collapseHFC" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Listado de inciicativas:</h6>
            <a className="collapse-item" name = "">Tarea 1</a>
            <a className="collapse-item" name = "">Tarea 2</a>
            <a className="collapse-item" name = "">Tarea N</a>
            </div>
        </div>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseprocesos" aria-expanded="true" aria-controls="collapseHFC">
            <i className="fas fa-fw fa-brain"></i>
            <span>Soporte / Procesos</span>
        </a>
        <div id="collapseprocesos" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Listado de inciicativas:</h6>
            <a className="collapse-item" name = "">Tarea 1</a>
            <a className="collapse-item" name = "">Tarea 2</a>
            <a className="collapse-item" name = "">Tarea N</a>
            </div>
        </div>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Nav Item - Informes Operativos Collapse Menu */}
        <div className="sidebar-heading">
        Links utiles
        </div>

        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOps" aria-expanded="true" aria-controls="collapseOps">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Informes Operativos</span>
        </a>
        <div id="collapseOps" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="http://10.24.5.200:8080/" target="_blank">Red Movil</a>
            <a className="collapse-item" href="http://10.24.5.200:8080/Red-Fija/Fija/QoS%20_%20VIEWER.html" target="_blank">Red Fija</a>
            </div>
        </div>
        </li>



        {/* Nav Item - Tables */}
        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseWebs" aria-expanded="true" aria-controls="collapseWebs">
            <i className="fas fa-globe-americas"></i>

            <span>Webs</span>
        </a>
        <div id="collapseWebs" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Webs del Area:</h6>
            <a className="collapse-item" href="http://tecnica.corp.cablevision.com.ar/Operativas/Performance/Shared%20Documents/Web/index.html" target="_blank">Web Perfomance</a>
            <a className="collapse-item" href="http://10.24.5.209/" target="_blank">Quality Comander</a> 
            </div>
        </div>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />


        {/* Nav Item - Otros */}
        <div className="sidebar-heading">
        Otros
        </div>

        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseForm" aria-expanded="true" aria-controls="collapseForm">
            <i className="fas fa-clipboard"></i>
            <span>Formularios</span>
        </a>
        <div id="collapseForm" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            
            <a className="collapse-item" href="https://apps.powerapps.com/play/ae5304d2-fe13-440a-a1f2-52e999ad17d9?tenantId=/providers/Microsoft.PowerApps/apps/ae5304d2-fe13-440a-a1f2-52e999ad17d9" target="_blank">Mantenimiento</a>
            <a className="collapse-item" target="_blank" href="https://apps.powerapps.com/play/bcb3e0f0-2748-4f19-aed0-1d3b514ab67c?tenantId=e0779def-eb91-4242-ae6a-f3962b1a1b5a">Usuarios WebP</a>
            </div>
        </div>
        </li>

        {/* Nav Item - Repositorio de Datos */}
        <li className="nav-item">
        <a className="nav-link" href="http://tecnica.corp.cablevision.com.ar/Operativas/Performance/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2fOperativas%2fPerformance%2fShared%20Documents%2fRepositorio&FolderCTID=0x0120009D5C62F441FD4646A6584238B9CE143C" target = "_blank">
            <i className="fas fa-box-open"></i>
            <span>Repositorio de Datos</span></a>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>

        </ul>
    </>
        );
  }
  
  export default SideBar;