import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import CartModal from "../../components/CartModal";
import BookDataContext from "../../context/BookDataContext";
import Container from "../../components/Container";

function Navbar() {
  const [showCart, setShowCart] = useState(false)
  const { items, setShowNav, showNav } = useContext(BookDataContext)

  const onClose = () => setShowCart(false)


  // Dark mode Light mode
  let [theme, setTheme] = useState(true)
  useEffect(() => {
    if (theme) {
      return document.documentElement.classList.add('dark')
    } return document.documentElement.classList.remove('dark')


  }, [theme])

  return (
    <Container>
      <div className="h-[60px] fixed bg-white dark:bg-[#171923] w-full max-w-screen-xl lg:h-[45px] flex justify-between items-center border-b border-gray-200 dark:border-[#595959] z-10">

        {/* Our icon Start */}
        <label className="btn swap lg:hidden swap-rotate w-12 h-10 ml-3 bg-[#2EE0A5]/20 hover:bg-[#2EE0A5]/20 border-transparent">
          <input
            type="checkbox"
            checked={showNav}
            onChange={() => setShowNav(!showNav)}
            className="hidden"
          />
          <svg
            className="swap-off fill-current text-primary dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current text-primary dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
            />
          </svg>
        </label>
        {/* Our icon End */}


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
    </Container>
  )
}

export default Navbar;
