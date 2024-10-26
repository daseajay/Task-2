import { useState } from "react";
import "../App.css";
import axios from "axios";
import { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";

const Note = () => {
  const [mess, setMess] = useState({ message: "" });
  const handleChange = (e) => {
    setMess({
      ...mess,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(mess);
    try {
      const res = await axios.post("http://localhost:4000/api/v1/note", mess);
      console.log(res.data);
      Fatchdata();
    } catch (error) {
      console.log(error);
    }
  };

  const [note, setNote] = useState([]);

  const Fatchdata = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/note");
      setNote(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Fatchdata();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/note/${id}`); // Send DELETE request
      Fatchdata(); // Refresh the notes list
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main_head vh-100">
      <div className="p-1 bg-dark">
        <h2 className="text-white px-3">NOTES</h2>
      </div>
      <form
        className="mt-4 d-flex justify-content-center"
        onSubmit={handleSubmit}
      >
        <textarea
          type="text"
          placeholder="Take a note..."
          autoComplete="off"
          className="form-control w-25"
          name="message"
          value={mess.message}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success ms-1">
          Add Note
        </button>
      </form>
      <div className="mt-3 main_head">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            {note.map((note) => (
              <div key={note._id} className=" col-lg-2  my-2 rounded mx-1">
                <div className="card p-2" style={{ position: "relative" }}>
                  <div className="d-flex flex-row justify-content-between">
                    {note.message}
                    <AiFillDelete
                      onClick={() => handleDelete(note._id)}
                      className=" fixed-top fs-5 text-danger"
                      style={{ position: "absolute", left: "88%", top: "10%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
