import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudList from "./CrudList";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/peliculas";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    api
      .post(url, {
        body: data,
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb([...db, data]);
        } else {
          setError(res);
        }
      });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    api
      .put(endpoint, {
        body: data,
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        if (!res.err) {
          let newData = db.map((el) => (el.id === data.id ? data : el));
          setDb(newData);
        } else {
          setError(res);
        }
      });
  };
  const deleteData = (id, name) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar la película ${name}`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      api
        .del(endpoint, { headers: { "content-type": "application/json" } })
        .then((res) => {
          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          }
        });
    } else {
      return;
    }
  };

  return (
    <Container fluid className="p-0">
      <h2 className="text-center bg-dark bg-opacity-75 text-white m-0 p-2">CRUD Api | JSON Server</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && <Message msg={`Error ${error.status}: ${error.statusText}`} />}
      {db && (
        <CrudList
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </Container>
  );
};

export default CrudApi;
