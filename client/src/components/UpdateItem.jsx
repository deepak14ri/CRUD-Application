import axios from "axios";
import { useEffect, useState } from "react";
import { updateUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import '../components/App.css';

function UpdateItem() {
    const {id} = useParams()
   
    const [name, setName] = useState()
    const [desc, setDesc] = useState()
    const [price, setPrice] = useState()
    
    const users = useSelector(state => state.users.users)
    
    useEffect(()=> {
        const item = items.find(u => u.id === id)
        setName(item.name)
        setDesc(item.desc)
        setPrice(item.price)
    }, []);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('https://crud-client-navy.vercel.app/update/'+id, {name, desc, price})
        .then(res => {
          if(name!=='' && desc!=='' && price!==''){
            dispatch(updateUser({id, name, desc, price}))
            navigate('/')
          }
        })
        .catch(err => console.log(err))
    }
    
    const close = () => {
      window.close();
    }
    useDispatch();
    return ( 
        <div className="d-flex vh-100 bg justify-content-center align-items-center" >
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Item Name</label>
            <input
              type="text"
              placeholder="Enter item name"
              className="form-control"
              value={name}
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
              value={desc}
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success">Update</button>&nbsp;&nbsp;
          <button className="btn btn-danger" onClick={close}>Cancel</button>
        </form>
      </div>
    </div>
     );
}

export default UpdateItem;
