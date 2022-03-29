import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col } from "react-bootstrap";

const CrudListCard = ({ el, setDataToEdit, deleteData }) => {
  return (
    <Col xs={12} sm={6} md={3} className="g-4">
      <Card className="h-100 shadow">
        <Card.Img variant="top" src={el.url} alt={el.name} className="h-100" />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>{el.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Button
            className="text-black-50"
            variant="link"
            onClick={() => setDataToEdit(el)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
          <Button
            className="text-black-50"
            variant="link"
            onClick={() => deleteData(el.id, el.name)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CrudListCard;
