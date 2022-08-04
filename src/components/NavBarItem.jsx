
function NavBarItem({title, icon, link}) {
    return (
    <>
    
                {/* Nav Item - Alerts */}
                <li className="nav-item dropdown no-arrow mx-1">
                      <a className="nav-link dropdown-toggle" href={link} aria-haspopup="true" aria-expanded="false">
                      <i className={icon}></i>
                        <span className="popuptext" id="myPopup"> {title}</span>
                      </a>
                    </li>
       
    </>
        );
  }
  
  export default NavBarItem;