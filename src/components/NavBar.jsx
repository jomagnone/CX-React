
function NavBar() {
    return (
    <>
    {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          {/* Sidebar Toggle (Topbar) */}
           <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
           </button>

          {/* Topbar Search */}
          
           
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
               
              <div className="input-group" >
              <input className="form-control bg-light border-0 small" placeholder="Buscar Informe..." aria-label="Search" aria-describedby="basic-addon2" id="autocompletar" />

              <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
              </div>
            

            </div>
          
            </form>

          {/*  Topbar Navbar */}
          <ul className="navbar-nav ml-auto" >

  
              {/* Dropdown - Messages */}
              <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form className="form-inline mr-auto w-100 navbar-search">
                  <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
   

            {/* Nav Item - Alerts */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle" href="Nosotros.html" aria-haspopup="true" aria-expanded="false">
               <i className="fas fa-users"></i>
                <span className="popuptext" id="myPopup"> Nosotros</span>
              </a>
            </li>
          
          </ul>

        </nav>
        {/* End of Topbar */}
    </>
        );
  }
  
  export default NavBar;