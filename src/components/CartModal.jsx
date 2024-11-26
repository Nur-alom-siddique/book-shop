import { useContext, useEffect } from "react";
import ListCartModal from "./ListCartModal";
import BookDataContext from "../context/BookDataContext";
import Swal from 'sweetalert2'

function CartModal({ onClose, setShowCart }) {
  //Stop scrolling and window jumping after open modal
  // useEffect(() => {
  //   const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  //   document.body.style.overflowY = "hidden";
  //   document.body.style.paddingRight = `${scrollbarWidth}px`;
  //   return () => {
  //     document.body.style.overflowY = "scroll";
  //     document.body.style.paddingRight = "0px";
  //   }
  // }, [])


  const { items, crealAll } = useContext(BookDataContext);


  const calculateCartTotals = (items) => {
    const cartWithSubtotals = items.map(item => ({
      ...item,
      subtotal: item.price * item.quantity // Calculate subtotal for each item
    }));

    const total = cartWithSubtotals.reduce((sum, item) => sum + item.subtotal, 0);

    return { cartWithSubtotals, total };
  };
  const { total } = calculateCartTotals(items);


  const checkout = () => {
    crealAll(items)
    setShowCart(false)


    if (items.length === 0) {
      Swal.fire({
        title: "Your cart is empty!",
        text: "Add some items before checking out.",
        icon: "warning",
        confirmButtonText: "Go to shop",
      });
      return;
    }

    Swal.fire({
      title: "Open the door to pickup!",
      text: "Do you want to continue?",
      icon: "success",
      confirmButtonText: "Continue shopping",

    })
  }


  return (

    <>
      <div onClick={onClose} className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 z-20"></div>

      <div className="lg:w-8/12 max-w-[848px] max-h-[580px] lg:max-h-[380px] bg-[#171923] rounded-xl fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-wrap  pt-4 pb-10 px-10 z-30">

        <h2 className="text-white text-base lg:text-2xl inline-block text-center w-full mb-4 lg:mb-8">Your Carts</h2>
        <section className=" lg:w-full flex flex-col lg:flex-row">

          <div className="w-[220px] sm:w-[400px] overflow-x-scroll lg:scrollbar-hide lg:w-8/12 pr-5">

            <ul className="text-white w-[300px] sm:w-[410px] lg:w-full flex text-[8px] lg:text-xs mb-3">
              <li className="w-5/12">Product</li>
              <li className="w-1/12 ml-6 sm:ml-2">price</li>
              <li className="w-2/12 ml-12 sm:ml-10">Quantity</li>
              <li className="w-1/12 ml-6 xl:ml-8">Total</li>
            </ul>

            <section className="w-[350px] sm:w-[410px] lg:w-full h-28 lg:h-64 overflow-y-scroll scrollbar-hide">
              {items.length == 0
                ?
                <div className="flex items-center justify-center text-white mt-10 font-bold text-xl">
                  <h1>You Cart is Empty ! </h1>
                </div>
                :
                (items.map(item => <ListCartModal items={items} item={item} key={item.id} />))
              }
            </section>

          </div>



          <div className="lg:w-4/12 rounded-sm px-4 mt-2 lg:mt-0">

            <div className="text-white bg-[#8C8C8C]/30 lg:pt-3 lg:mt-7">
              <h2 className="text-center text-xs lg:text-base mb-2 lg:mb-8">Order summary</h2>
              <div className="bg-[#BFBFBF]/80 w-full h-[1px]"></div>
              <ul>
                <li className="flex items-center justify-between px-5 mt-2 lg:mt-5 text-[8px] lg:text-sm">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </li>
                <li className="flex items-center justify-between px-5 mt-2 lg:mt-2 text-[8px] lg:text-sm">
                  <span>Shipping</span>
                  <span className="text-primary">Free</span>
                </li>
                <li className="flex items-center justify-between px-5 py-2 mt-2 lg:mt-2 text-[8px] lg:text-sm bg-[#8C8C8C]/25">
                  <span>Total</span>
                  <span>${total}</span>
                </li>
              </ul>
            </div>
            <button onClick={checkout} className="bg-primary w-full py-1 text-xs lg:text-base rounded-sm mt-2 lg:mt-5">Checkout</button>

          </div>
        </section>


      </div >
    </>

  )
}


export default CartModal
