


function DashboardTabla() {
  return (
    <>
     <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                    <th>KR</th>
                      <th>Area </th>
                      <th>Iniciativa</th>
                      <th>Estado</th>
                      <th>Inicio</th>
                  
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                    <th>KR</th>
                      <th>Area </th>
                      <th>Iniciativa</th>
                      <th>Estado</th>
                      <th>Inicio</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>Mejorar proceso sobre materiales en tránsito</td>
                      <td>Soporte Funcional</td>
                      <td>Disminuir a 24 hs. las solicitudes de parametrizaciones de técnicos entre PAO PDR y PYR. </td>
                      <td>Pendiente</td>
                      <td>2022/04/25</td>
                    </tr>
                    <tr>
                      <td>Mejorar proceso sobre materiales en tránsito</td>
                      <td>Soporte Funcional</td>
                      <td>Disminuir el tiempo de parametrizaciones en TPR a 24 hs.</td>
                      <td>Pendiente</td>
                      <td>2022/04/25</td>
                    </tr>
                    <tr>
                      <td>Mejorar proceso sobre materiales en tránsito</td>
                      <td>Soporte Funcional</td>
                      <td>Generar el alarmado de notificacines a los técnicos de campo</td>
                      <td>Pendiente</td>
                      <td>2022/04/25</td>
                    </tr>
                    <tr>
                      <td>Incrementar la contactación de todas las campañas</td>
                      <td>Experiencia Digital</td>
                      <td>Aumentar la contactación en un 60% en la campaña Calidad</td>
                      <td>Pendiente</td>
                      <td>2022/04/25</td>
                    </tr>
                    <tr>
                      <td>Incrementar la contactación de todas las campañas</td>
                      <td>Experiencia Digital</td>
                      <td>Migrar en un 100% la canalidad a whatsapp</td>
                      <td>Pendiente</td>
                      <td>2022/04/25</td>
                    </tr>
                  </tbody>
                </table>
                </div>
    </>


  );
}

export default DashboardTabla;