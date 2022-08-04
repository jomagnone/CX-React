
function SideBarItemCustom({desc, link}) {
    
    return (
     
        <a  className="collapse-item" href={link} target={"_blank"}>{desc}</a>

        );
  }
  
  export default SideBarItemCustom;