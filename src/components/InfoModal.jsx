import { FaHeart } from "react-icons/fa";
import { useEffect } from "react";
import { LuHeart } from "react-icons/lu";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function InfoModal({ setIsOpen, setActive, active, book, onAdd, toggleFavorite, mark, setMark }) {
  //Stop scrolling and window jumping after open modal
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflowY = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflowY = "scroll";
      document.body.style.paddingRight = "0px";
    }
  }, [])

  const addHandler = () => {
    setActive(true)
    onAdd(book)
    toast.success("Added to cart Successfully!");
  }

  const infMarkHandler = (e) => {
    setMark(!mark)
    e.stopPropagation()
    toggleFavorite(book)
    if (!mark) {
      return toast("💚  Added to wishlist Successfully!");
    }
  }


  return (
    <>
      <div onClick={() => setIsOpen(false)} className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 z-20"></div>

      <div className="bg-[#1E293B] md:w-8/12 max-w-[785px] md:h-80 rounded-xl fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex z-30">

        <div className="flex w-full flex-col md:flex-wrap">
          <div className="px-4 md:px-0 md:pl-4 lg:pl-16 order-2 md:order-1">
            <h1 className="text-white text-sm md:text-xl lg:text-3xl font-bold pr-4 mt-6 md:mt-12 lg:mt-16">{book.name}</h1>
            <span className="text-white/70 lg:mt-4 inline-block text-xs">{book.author}</span>
            <p className="text-white/85 text-[8px] md:text-[10px] pr-4 lg:text-xs mt-3 md:mt-5 md:w-[400px] lg:w-full max-w-[500px]">{book.description}</p>

            <div className="flex flex-col md:flex-row md:flex-wrap mt-8 cursor-pointer">
              <button onClick={addHandler} className={`bg-primary text-black transition-all duration-200 px-10 py-2 rounded-md text-[8px] sm:text-xs ${active && "disabled opacity-70 bg-primary text-white dark:text-black cursor-default px-12"}`}>{active ? "Added To Cart" : `$${book.price} | Add to cart`}</button>
              <div onClick={infMarkHandler} className={`bg-[#2EE0A5]/20 border border-primary hidden md:flex ${mark && "border-primary/60"} cursor-pointer w-10 h-10 flex items-center justify-center rounded-md ml-5`}>
                {mark
                  ?
                  <FaHeart className="text-primary text-sm " />
                  :
                  <LuHeart className="text-white/80 text-sm" />
                }
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-white text-[8px] sm:text-xs px-6 py-2 rounded-md md:ml-6 mb-4 md:mb-0 mt-2 md:mt-0">Close</button>
            </div>
          </div>

          <div className="overflow-hidden rounded-tr-md md:rounded-br-md rounded-tl-md md:rounded-tl-none hidden md:block order-1">
            <img className="h-80 w-full object-cover" src={book.image} alt="" />
          </div>
        </div>

      </div >
    </>

  )
}

export default InfoModal
