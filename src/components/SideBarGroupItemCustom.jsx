
import SideBarItemCustom from './SideBarItemCustom.jsx';


function SideBarGroupItemCustom({title, subtitle,icon, items}) {

    //console.log(DataSquads.filter(o => o.desc == title)[0].icon);

    let replaceAll = i => i.replace(/[/. ]/g,"");
 
    return (

        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target={"#"+replaceAll(title)} aria-expanded="true" aria-controls={replaceAll(title)}>
            <i className={icon}></i>
            <span>{title}</span>
        </a>
        <div id={replaceAll(title)} className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">{subtitle}</h6>
            {
            
            items.map((item,ix) => 
               
                <SideBarItemCustom desc={item.desc} link={item.link} key={ix} />
                )
            
            }

  
                
            </div>
        </div>

        </li>
        );
  }
  
  export default SideBarGroupItemCustom;