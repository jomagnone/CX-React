
function SideBarItemCustom({desc, link}) {
    
    return (
     
        <a  className="collapse-item" href={link} target={"_blank"} rel="noreferrer" >{desc}</a>

        );
  }
  
  export default SideBarItemCustom;