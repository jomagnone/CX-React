

function SideBarItem({desc, link}) {
    
    return (
            
             <a name={desc} className="collapse-item" href={link}  >{desc}</a> 

        );
    }
  export default SideBarItem;