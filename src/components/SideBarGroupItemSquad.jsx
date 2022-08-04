import DataSquads from '../data/SideBarSquads.jsx'
import SideBarItem from './SideBarItem.jsx';



function SideBarGroupItemSquad({title, subtitle}) {

    //console.log(DataSquads.filter(o => o.desc == title)[0].icon);

    let replaceAll = i => i.replace(/[/. ]/g,"");
 
    return (

        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target={"#"+replaceAll(title)} aria-expanded="true" aria-controls={replaceAll(title)}>
            <i className={DataSquads.filter(o => o.desc == title)[0].icon}></i>
            <span>{title}</span>
        </a>
        <div id={replaceAll(title)} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">{subtitle}</h6>
            {
            
            DataSquads.filter(o => o.desc == title)[0].initiatives.map((o,ix) => 
               
                <SideBarItem desc={o.desc} link={o.link} key={ix} />
                )
            
            }

  
                
            </div>
        </div>

        </li>
        );
  }
  
  export default SideBarGroupItemSquad;