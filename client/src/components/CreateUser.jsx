import axios from "axios";
import { useState } from "react";
import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../components/App.css';

function CreateUser() {

    const [name, setName] = useState()
    const [desc, setDesc] = useState()
    const [price, setPrice] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://crud-client-navy.vercel.app/create', {name, desc, price})
        .then(res => {
            dispatch(addUser(res.data))
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="d-flex vh-100 bg justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Item Name</label>
            <input
              type="text"
              placeholder="Enter item name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter description"
              className="form-control"
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Price</label>
            <input
              type="text"
              placeholder="Enter price"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
