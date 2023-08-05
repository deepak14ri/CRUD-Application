import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/userSlice";
import '../components/App.css';

function Users() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/deleteuser/${id}`)
      .then((res) => {
        dispatch(deleteUser({ id }));
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
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.desc}</td>
                <td>₹ {user.price}</td>
                <td>
                  <Link
                    to={`/edit/${user.id}`}
                    className="btn btn-sm btn-success me-2"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
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

export default Users;
