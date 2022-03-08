import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { getUsers, deleteUser } from "../../redux/actions/users";

import LoadRequest from "../LoadRequest";

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  async function deleteUsers(id) {
    dispatch(deleteUser(id));
  }

  return (
    <div className="container pt-5">
      {loading && <LoadRequest />}
      <div className="row">
        <div className="col-sm-12 mb-4">
          <Link to="/user">
            <button type="button" className="btn btn-primary">
              Adicionar
            </button>
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Telefone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td
                    scope="row"
                    className="text-center"
                    style={{ width: 150 }}
                  >
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteUsers(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
