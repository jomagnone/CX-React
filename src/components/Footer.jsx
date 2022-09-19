import logoAllFooter from '../img/logos-all.png';
import logoTecoFooter from '../img/logo-telecom.png';


function Footer() {
    return (
        <>
        <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <div className="col-xs-12 text-right">
                        <img src={logoAllFooter} width="400" prop= "footer" align="left" vspace="10" />
                        <img src={logoTecoFooter} width="100" prop= "footer" align="right" vspace="10" />
                </div>
              </div>
            </div>
          </footer>
        </>
        );
  }
  
  export default Footer;