import { Link } from "react-router-dom";

function SideBarHeadItem({text, icon, link}) {
    
    return (
     
        <li className="nav-item active">
            
            <a className="nav-link" href={link}>
                <i className={icon}></i>
                <span>{text}</span>
            </a>
            
        </li>
  
        );
  }
  
  export default SideBarHeadItem;