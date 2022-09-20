import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/ModalAlert.css'
import CORS from '../img/CORS.PNG'
import VPN from '../img/VPN.png'


function ModalAlert(props) {



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header id = "ModalHeader">
        <Modal.Title id="contained-modal-title-vcenter">
          Requisitos de la web
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Debe tener activo los siguientes complementos:</h5>
        <br></br>
        <ul>
          <li><img src={VPN} className="ImgModal"/>VPN Cisco AnyConnect <a href="https://www.cisco.com/c/en/us/support/security/anyconnect-secure-mobility-client-v4-x/model.html#~tab-downloads" target="_blank"><i class="fa-solid fa-download"></i></a> </li>
          <br></br>
          <li><img src={CORS} className="ImgModal"/>CORS Unlock <a href="https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino" target="_blank"><i class="fa-solid fa-download"></i></a>  </li>
        </ul>
      </Modal.Body>
      <Modal.Footer id = "ModalFooter">
        <Button onClick={props.onHide}> Reintentar <i class="fa-solid fa-rotate-right"></i></Button>
      </Modal.Footer>
    </Modal>
  );
}




export default ModalAlert;