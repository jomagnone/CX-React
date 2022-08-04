

import NavBarButton from "./NavBarButton";
import NavBarSearch from "./NavBarSearch";
import NavBarItemList from "./NavBarItemList";
import NavBarItem from "./NavBarItem";



function NavBar() {
    return (
    <>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <NavBarButton />
          <NavBarSearch />
      
          <NavBarItemList>
            <NavBarItem title={"Nosotros"} icon={"fas fa-users"}  link={"Nosotros.html"} />
          </NavBarItemList>

        </nav>
       
    </>
        );
  }
  
  export default NavBar;