
function SideBarItem({desc, link}) {
    
    return (
     
        <a  className="collapse-item" href={link} name="" >{desc}</a>

        );
  }
  
  export default SideBarItem;