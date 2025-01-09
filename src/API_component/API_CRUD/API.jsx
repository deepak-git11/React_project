import React, { useEffect, useState } from "react";
import "./API.css";
const API = () => {
  const [result, setResult] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWeb] = useState("");
  const [edit, setEdit] = useState(null);

  function handleEdit(u) {
    setName(u.name);
    setEmail(u.email);
    setWeb(u.website);
    setEdit(u);
  }
  function alertMsg(ob) {
    if (ob) {
      alert(` ${ob.id} UPDATED SUCESSFULY`);
    } else {
      alert("DATA ADDED SUCESSFULLY");
    }
  }
  function handleDelete(id) {
    if (window.confirm(`Are you sure to Delete this id=${id}`)) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(() => {
          setResult(result.filter((v) => v.id !== id));
        })
        .catch((er) => {
          console.log("error at deletion", er);
        });
    }
  }
  function handleClear() {
    setEdit(null);
    setName("");
    setEmail("");
    setEmail("");
    setWeb("");
  }
  function handleForm() {
    const uname = name.trim();
    const uemail = email.trim();
    const uweb = website.trim();
    if (uname && uemail && uweb) {
      if (edit) {
        fetch(`https://jsonplaceholder.typicode.com/users/${edit.id}`, {
          method: "PUT",

          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            id: edit.id,
            name: uname,
            email: uemail,
            website: uweb,
          }),
        })
          .then((res) => res.json())
          .then((upd) => {
            setResult(result.map((user) => (user.id === upd.id ? upd : user)));
          });
        handleClear();
        alertMsg(edit);
      } else {
        const newId = result.length + 1;
        fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            id: newId,
            name: uname,
            email: uemail,
            website: uweb,
          }),
        })
          .then((res) => res.json())
          .then((d) => setResult([...result, d]));
      }
    }
    handleClear(); /// auto clear after operations
    alertMsg("");
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => setResult(data));
  }, []);
  return (
    <div className="api_main">
      <h1>API</h1>
      <div className="form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="website">wesbite</label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(e) => {
              setWeb(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="add_button" onClick={handleForm}>
            {edit ? "UPDATE DATA" : "ADD NEW USER"}
          </button>
          <button className="add_button" onClick={handleClear}>
            {" "}
            CLEAR
          </button>
        </div>
      </div>
      <table border={3}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>WEBSITE</td>
            <td>UPDATE</td>
          </tr>
        </thead>
        <tbody>
          {result.map((res, index) => {
            return (
              <tr key={res.id}>
                <td>{index + 1}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.website}</td>
                <td>
                  <button
                    className="edit_button"
                    onClick={() => handleEdit(res)}
                  >
                    edit
                  </button>
                  <button
                    className="del_button"
                    onClick={() => handleDelete(res.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default API;
