import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function App() {
  const [form, setForm] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) {
      resetForm();
    }
  }, [show]);

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
    });
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className="">
      <a
        href="#"
        className="link_sidebar menu_profil"
        onClick={() => setShow(!show)}
      >
        <i className="bi bi-list-check text-secondary"></i>Create Event
      </a>
      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleChangeForm}
                value={form.name}
                placeholder="Input name ..."
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                onChange={handleChangeForm}
                value={form.price}
                placeholder="Input price ..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
