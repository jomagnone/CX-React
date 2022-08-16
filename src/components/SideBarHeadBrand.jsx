
function SideBarHeadBrand() {
    const Toggled = () => {
        document.getElementById("page-top").classList.toggle("sidebar-toggled");
        document.getElementById("accordionSidebar").classList.toggle("toggled");
      }

    return (
        
        <div type ="button" onClick={Toggled} className="sidebar-brand d-flex align-items-center justify-content-center"  id="sidebarToggleBrand" >
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">C.X.<sup>OPR</sup></div>
        </div>

        );
  }
  
  export default SideBarHeadBrand;