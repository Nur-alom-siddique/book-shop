import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import CartModal from "../../components/CartModal";
import BookDataContext from "../../context/BookDataContext";

function Navbar() {
  const [showCart, setShowCart] = useState(false)
  const { items } = useContext(BookDataContext)

  const onClose = () => setShowCart(false)


  // Dark mode Light mode
  let [theme, setTheme] = useState(true)
  useEffect(() => {
    if (theme) {
      return document.documentElement.classList.add('dark')
    } return document.documentElement.classList.remove('dark')


  }, [theme])

  return (
    <div className="h-[45px] flex justify-between items-center border-b border-gray-200 dark:border-[#595959]">
      <h1 className="text-primary text-xl font-bold ml-4 sm:ml-16">NewbBook</h1>
      <ul className="flex mr-4 sm:mr-[88px]">
        <li className="bg-[#2EE0A5]/20 border border-primary w-7 h-7 flex items-center justify-center rounded-md ml-3 cursor-pointer">
          <FaBell className="text-primary text-xs" />
        </li>
        <li onClick={() => setTheme(!theme)} className="bg-[#2EE0A5]/20 border border-primary w-7 h-7 flex items-center justify-center rounded-md ml-3 cursor-pointer">
          <MdOutlineLightMode className="text-primary text-xs" />
        </li>
        <li onClick={() => setShowCart(true)} className="relative bg-[#2EE0A5]/20 border border-primary w-7 h-7 flex items-center justify-center rounded-md ml-3 cursor-pointer">
          <IoCartOutline className="text-primary text-xs" />
          <div className="absolute top-[-20%] right-[-50%] rounded-full flex items-center justify-center text-black text-[10px] bg-primary w-5 h-5">{items.length}</div>
        </li>
      </ul>

      {
        showCart && <CartModal setShowCart={setShowCart} onClose={onClose} />
      }
    </div>
  )
}

export default Navbar;
