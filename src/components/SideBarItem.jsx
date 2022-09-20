

function SideBarItem({desc, link}) {
  


    return (
           
             <a className="collapse-item" href={link}  >{desc}</a> 
             
        );
    }
  export default SideBarItem;