import 'bootstrap/dist/css/bootstrap.min.css'
import Items from '../components/Items'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateItem from '../components/CreateItem'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getItem } from '../redux/itemSlice'
import UpdateItem from '../components/UpdateItem'

function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    const fetchData = async() => {
        try {
            const response = await axios.get('https://crud-server-api.vercel.app');
            dispatch(getItem(response.data));
        } catch(err) {
            console.log(err)
        }
    }
    fetchData();
}, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Items />}></Route>
        <Route path='/create' element={<CreateItem />}></Route>
        <Route path='/edit/:id' element={<UpdateItem />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
