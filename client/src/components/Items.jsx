import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../redux/itemSlice";
import '../components/App.css';

function Items() {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    axios
      .delete(`https://crud-client-navy.vercel.app/deleteitem/${id}`)
      .then((res) => {
        dispatch(deleteItem({ id }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg justify-content-center align-items-center" >
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success btn-sm">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>₹ {item.price}</td>
                <td>
                  <Link
                    to={`/edit/${item.id}`}
                    className="btn btn-sm btn-success me-2"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-sm btn-danger"
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

export default Items;
