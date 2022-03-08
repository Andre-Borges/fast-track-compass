import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../services/api";
import { Link } from "react-router-dom";

const initialUser = {
  id: "",
  name: "",
  email: "",
  phone: "",
};

export default function User() {
  /* Recurso para navegar entre as telas */
  const navigate = useNavigate();

  const [user, setUser] = useState(initialUser);

  async function handleSubmit(e) {
    let request = null;

    request = await api
      .post("/users", {
        name: user.name,
        email: user.email,
        phone: user.phone,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err.response;
      });

    /* Se deu sucesso */
    if (request.status === 200 || request.status === 201) {
      alert("Sucesso");
      console.log(request.data);
      request.status === 201 && navigate(`/user/${request.data.id}`);
    } else {
      alert("Erro: " + request.data.message);
    }
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={user.name}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Telefone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleSubmit()}
            >
              Salvar
            </button>
            <Link to="/">
              <button type="button" className="btn btn-danger ms-2">
                Cancelar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
