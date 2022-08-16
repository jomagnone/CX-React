


function SideBarButton({desc, link}) {
    const Toggled = () => {
        console.log("entre");
        document.getElementById("page-top").classList.toggle("sidebar-toggled");
        document.getElementById("accordionSidebar").classList.toggle("toggled");
      }


    return (
     
        <div className="text-center d-none d-md-inline">
                <button id="sidebarToggle" onClick={Toggled} type="button" className="rounded-circle border-0"  > </button>
        </div>
        );
  }
  
  export default SideBarButton;