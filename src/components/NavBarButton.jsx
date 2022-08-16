
function NavBarButton() {
    const Toggled = () => {
        console.log("entre");
        document.getElementById("page-top").classList.toggle("sidebar-toggled");
        document.getElementById("accordionSidebar").classList.toggle("toggled");
      }
    return (
    <>
        <button id="sidebarToggleTop" onClick={Toggled} className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>
    </>
        );
  }
  
  export default NavBarButton;