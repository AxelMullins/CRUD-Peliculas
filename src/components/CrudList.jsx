import React from "react";
import { Container, Row } from "react-bootstrap";
import CrudListCard from "./CrudListCard";

const CrudList = ({ data, setDataToEdit, deleteData }) => {
  return (
    <Container>
      <Row className="pb-5">
        {data.length > 0 ? (
          data.map((el) => (
            <CrudListCard
              key={el.id}
              el={el}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          ))
        ) : (
          <>
          <h3 className="text-center pt-5">No hay datos</h3>
          <p className="text-center">Clonar el proyecto y usar "npm run fake-api"</p>
          </>
        )}
      </Row>
    </Container>
  );
};

export default CrudList;
