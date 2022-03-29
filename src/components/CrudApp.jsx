import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CrudForm from "./CrudForm";
import CrudList from "./CrudList";
import Loader from "./Loader";

const dataBase = [
  {
    id: 1,
    name: "Yo, robot",
    description: "Ciencia ficción/Acción",
    url: "https://es.web.img3.acsta.net/pictures/14/04/29/10/40/173570.jpg",
  },
  {
    id: 2,
    name: "Efecto mariposa",
    description: "Suspenso/Ciencia ficción",
    url: "https://images-na.ssl-images-amazon.com/images/I/71sFaqNXL9L._SL1044_.jpg",
  },
  {
    id: 3,
    name: "La isla siniestra",
    description: "Suspenso/Misterio",
    url: "http://3.bp.blogspot.com/_dO1b0t9D-WU/S_qSb8rvWUI/AAAAAAAABQM/XgdwMR4sAzs/s1600/Shutter+Island+Movie+Poster.jpg",
  },
  {
    id: 4,
    name: "El origen",
    description: "Acción/Ciencia",
    url: "https://es.web.img3.acsta.net/medias/nmedia/18/72/41/74/20198901.jpg",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setDb(dataBase)
      setLoading(false)
    }, 2000);
  }, [])
  

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id, name) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar la película ${name}`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <Container fluid className="p-0">
      <h2 className="text-center bg-dark bg-opacity-75 text-white m-0 p-2">CRUD App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
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

export default CrudApp;
