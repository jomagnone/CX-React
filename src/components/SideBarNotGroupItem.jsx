


function SideBarNotGroupItem({desc,icon, link}) {
 
    return (
        <li className="nav-item">
        <a className="nav-link" href={link} target = "_blank">
            <i className={icon}></i>
            <span>{desc}</span></a>
        </li>
        
        );
  }
  
  export default SideBarNotGroupItem;