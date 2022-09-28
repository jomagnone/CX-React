import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/ModalDescription.css'
const parse = require('html-react-parser');

function ModalDescription(props) {

  const cleanText = (str) => {
        return parse((str
              .replaceAll("\r\n", "<br>")
              .replaceAll("\r", "<br>")
              .replaceAll("\n", "<br>")
              .replaceAll("**", "<li className='listaSecundaria'>")
              .replaceAll("*", "<li>")
              
              ))
        }




  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header id = "ModalHeader">
        <Modal.Title id="contained-modal-title-vcenter">
        {props.title?props.title+" ("+props.issuekey+")":"Sin Datos"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Descripcion de la tarea</h5>
        <br></br>
        {props.desc?cleanText(props.desc):"Sin Datos"}
      </Modal.Body>
      <Modal.Footer id = "ModalFooter">
        <Button onClick={props.onHide}> Cerrar <i className="fa-solid fa-xmark"></i></Button>
      </Modal.Footer>
    </Modal>
  );
}




export default ModalDescription;