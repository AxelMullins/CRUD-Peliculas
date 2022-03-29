import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const initialForm = {
  name: "",
  description: "",
  url: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.url) {
      alert("Datos incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <Container fluid style={{ background: "#dedede" }}>
      <Container className="p-4 d- grid d-md-flex justify-content-between align-items-center">
        <h4>{dataToEdit ? "Editar película" : "Agregar película"}</h4>
        <Form onSubmit={handleSubmit} >
          <Row>
            <Col xs={12} md={3}>
              <Form.Label className="pe-3">Nombre: </Form.Label>
              <Form.Control
                type="text"
                name="name"
                id=""
                placeholder="Título de la pelúcula"
                onChange={handleChange}
                value={form.name}
              />
            </Col>
            <Col xs={12} md={3}>
              <Form.Label className="pe-3">Género: </Form.Label>
              <Form.Control
                type="text"
                name="description"
                id=""
                placeholder="Género de la película"
                onChange={handleChange}
                value={form.description}
              />
            </Col>

            <Col xs={12} md={3}>
              <Form.Label className="pe-3">Url img: </Form.Label>
              <Form.Control
                type="text"
                name="url"
                id=""
                placeholder="Url:"
                onChange={handleChange}
                value={form.url}
              />
            </Col>
            <Col  xs={12} md={3}>
            <Form.Control type="submit" value="Enviar" className="btn btn-success m-1"/>
            <Form.Control type="reset" value="Borrar" className="btn btn-danger m-1" onClick={handleReset} />
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
};

export default CrudForm;
