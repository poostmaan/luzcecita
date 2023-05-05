import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Alert,
  Col,
  Container,
  Form,
  FormControl,
  FormLabel,
  Row,
} from "react-bootstrap";

export const App = () => {
  return (
    <>
      <div className="custom-margin">
        <h2 className="mb-4">
          <b>Avisos de cortes programados</b>
        </h2>

        <h4 className="text-warning mb-2">
          Te informamos de posibles interrupciones en el suministro eléctrico.
        </h4>

        <p>
          Estamos realizando <b>trabajos de mejora y mantenimiento</b> en
          nuestra red de distribución <b>sin coste para ti.</b>
          Por ello,<b>por tu seguridad</b> y la de nuestros técnicos, podrán
          producirse <b>interrupciones temporales</b> en el{" "}
          <b>suministro de energía eléctrica</b> en las{" "}
          <b>fechas, horas y lugares</b> que indicamos a continuación.
        </p>

        <p>
          <b>
            <small>
              <i>Muchas gracias por tu comprensión.</i>
            </small>
          </b>
        </p>

        <Alert
          variant="primary"
          style={{ backgroundColor: "#fff", borderRadius: 0, padding: "20px" }}
        >
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-circle-exclamation" style={{ fontSize: "62px"}}></i>
            </Col>
            <Col>
              <h3>Por tu seguridad, recuerda que...</h3>
              <ul>
                <li>El suministro puede reponerse en <b>cualquier momento</b></li>
                <li>
                  {" "}
                  Está prohibido <b>manipular las redes de distribución</b> a toda
                  persona no autorizada
                </li>
              </ul>
            </Col>
          </Row>
        </Alert>
      </div>

    
      <Row className="justify-content-md-center">
        <Col>
          <Alert variant="primary" style={{ padding: "30px 0" }}>
            <Form className="custom-margin">
              <FormLabel>Buscar horarios por ubicación:</FormLabel>
              <FormControl
                style={{ padding: "5px", width: "25em", borderRadius: 0 }}
                type="text"
                placeholder="Escribe una dirección, población o provincia"
              />
            </Form>
          </Alert>
        </Col>
      </Row>

      <div >
        
      </div>

      {
        data.map(e => (
          <Alert 
            className="custom-margin mb-3" 
            variant="primary" 
            style={{ backgroundColor: "#fff", borderRadius: 0, padding: "20px" }}
            key={e.id}
          >
            <Row >
              <Col md={2} className="d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-wrench" style={{ fontSize: "32px"}}></i>
              </Col>
              <Col md={10}>
                <p><b>Fecha de inicio: </b>{ e.fecha_inicio } - { e.hora_inicio }</p>
                <p><b>Fecha de final: </b>{ e.fecha_final } - { e.hora_final }</p>

                <p className="m-0"><i>{ e.distrito }</i></p>
              </Col>
            </Row>
          </Alert>
        ))
      }
      
      <br />

    </>
  );
};

const data = [
  {
    id: 1,
    fecha_inicio: "14-09-2022",
    hora_inicio: "3:08 PM",
    fecha_final: "12-04-2023",
    hora_final: "11:48 PM",
    distrito: "CAGUA",
  },
  {
    id: 2,
    fecha_inicio: "07-08-2023",
    hora_inicio: "6:41 AM",
    fecha_final: "22-08-2022",
    hora_final: "8:08 PM",
    distrito: "SANTA RITA",
  },
  {
    id: 3,
    fecha_inicio: "25-10-2022",
    hora_inicio: "4:55 AM",
    fecha_final: "09-05-2023",
    hora_final: "7:13 AM",
    distrito: "EL LIMON",
  },
  {
    id: 4,
    fecha_inicio: "11-05-2022",
    hora_inicio: "2:07 AM",
    fecha_final: "27-09-2022",
    hora_final: "12:52 PM",
    distrito: "TURMERO",
  },
  {
    id: 5,
    fecha_inicio: "06-10-2022",
    hora_inicio: "8:05 PM",
    fecha_final: "19-05-2023",
    hora_final: "4:05 PM",
    distrito: "EL LIMON",
  },
  {
    id: 6,
    fecha_inicio: "09-08-2022",
    hora_inicio: "2:34 PM",
    fecha_final: "06-06-2023",
    hora_final: "8:19 AM",
    distrito: "CAGUA",
  },
  {
    id: 7,
    fecha_inicio: "08-05-2023",
    hora_inicio: "9:30 PM",
    fecha_final: "18-12-2023",
    hora_final: "9:46 AM",
    distrito: "CAGUA",
  },
  {
    id: 8,
    fecha_inicio: "03-07-2022",
    hora_inicio: "11:08 PM",
    fecha_final: "24-10-2023",
    hora_final: "4:57 PM",
    distrito: "EL LIMON",
  },
  {
    id: 9,
    fecha_inicio: "06-01-2023",
    hora_inicio: "4:58 AM",
    fecha_final: "05-06-2023",
    hora_final: "12:21 PM",
    distrito: "CAGUA",
  },
  {
    id: 10,
    fecha_inicio: "02-10-2023",
    hora_inicio: "3:51 PM",
    fecha_final: "19-10-2023",
    hora_final: "4:28 AM",
    distrito: "23 DE ENERO",
  },
  {
    id: 11,
    fecha_inicio: "10-11-2022",
    hora_inicio: "12:46 AM",
    fecha_final: "08-12-2022",
    hora_final: "3:22 AM",
    distrito: "CAGUA",
  },
  {
    id: 12,
    fecha_inicio: "30-05-2022",
    hora_inicio: "4:07 AM",
    fecha_final: "20-05-2022",
    hora_final: "2:04 AM",
    distrito: "CAÑA DE AZUCAR",
  },
  {
    id: 13,
    fecha_inicio: "13-09-2022",
    hora_inicio: "5:42 PM",
    fecha_final: "16-09-2023",
    hora_final: "4:24 AM",
    distrito: "SANTA RITA",
  },
  {
    id: 14,
    fecha_inicio: "01-10-2022",
    hora_inicio: "9:57 AM",
    fecha_final: "29-07-2022",
    hora_final: "5:51 AM",
    distrito: "CAGUA",
  },
  {
    id: 15,
    fecha_inicio: "28-05-2023",
    hora_inicio: "8:57 AM",
    fecha_final: "28-10-2023",
    hora_final: "5:35 AM",
    distrito: "EL LIMON",
  },
  {
    id: 16,
    fecha_inicio: "04-10-2022",
    hora_inicio: "5:14 PM",
    fecha_final: "22-09-2022",
    hora_final: "7:55 PM",
    distrito: "LOS SAMANES",
  },
  {
    id: 17,
    fecha_inicio: "04-07-2022",
    hora_inicio: "3:04 AM",
    fecha_final: "11-09-2023",
    hora_final: "12:04 PM",
    distrito: "PINONAL",
  },
  {
    id: 18,
    fecha_inicio: "23-06-2022",
    hora_inicio: "5:52 PM",
    fecha_final: "06-12-2023",
    hora_final: "11:08 AM",
    distrito: "CAGUA",
  },
  {
    id: 19,
    fecha_inicio: "13-10-2022",
    hora_inicio: "11:10 AM",
    fecha_final: "11-12-2022",
    hora_final: "11:26 AM",
    distrito: "LOS SAMANES",
  },
  {
    id: 20,
    fecha_inicio: "16-09-2022",
    hora_inicio: "3:07 PM",
    fecha_final: "13-03-2023",
    hora_final: "2:24 PM",
    distrito: "CAGUA",
  },
];
