import { useEffect, useReducer, useState } from "react"
import Container from "../components/Container"
import { initialBookData } from "../data/initialBookData"
import Body from "../sections/body/Body"
import Navbar from "../sections/header/Navbar"
import CartReducer from "../reducer/CartReducer"
import { ToastContainer, Flip } from 'react-toastify';
import BookDataContext from "../context/bookDataContext"


const books = initialBookData()
const initialState = {
  items: [],
  total: 0,
};


function Layout() {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const onAdd = (addItems) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...addItems, quantity: 1
      }
    });

  }

  // Remove Item From Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id }
    })
  }

  // Increament Item in Our Cart
  let increament = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: { id }
    })
  }

  // Decreament Item in Our Cart
  let decreament = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: { id }
    })
  }

  let crealAll = (items) => {
    return dispatch({
      type: "CLEARALL",
      payload: { items }
    })
  }

  // Toatl Quantity in our Cart
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" })

  }, [state.items])

  const [id, setId] = useState(null)

  return (

    <BookDataContext.Provider value={{ ...state, books, dispatch, removeItem, increament, decreament, crealAll, onAdd, setId, id }}>
      <Container className="bg-white dark:bg-[#171923]">
        <Navbar />
        <Body />
      </Container>
      <ToastContainer
        style={{ width: "220px", fontSize: "10px" }}
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />

    </BookDataContext.Provider>

  )
}

export default Layout
