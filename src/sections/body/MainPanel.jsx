import { MdOutlineStar } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import InfoModal from "../../components/InfoModal";
import { useContext, useEffect, useState } from "react";
import BookDataContext from "../../context/BookDataContext";
import { LuHeart } from "react-icons/lu";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MainPanel({ book, toggleFavorite }) {
  const { onAdd, items } = useContext(BookDataContext)

  const [isOpen, setIsOpen,] = useState(false)
  const [active, setActive] = useState(false)
  const [mark, setMark] = useState(false)


  let id = items.map(item => {
    return item.id
  })
  useEffect(() => {
    if (id.includes(book.id)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [id, book.id]);



  const addHandler = (e) => {
    e.stopPropagation();
    toast.success("Added to cart Successfully!");
    if (!id.includes(book.id)) {
      onAdd(book);
    }

  };





  const markHandler = (e) => {
    setMark(!mark)
    e.stopPropagation()
    toggleFavorite(book)
    if (!mark) {
      return toast("💚  Added to wishlist Successfully!");
    }

  }




  return (
    <>
      <li className="bg-white shadow-md dark:bg-[#171923]">
        <div onClick={() => setIsOpen(true)} className="p-2 border border-gray-200 dark:border-[#595959] rounded-md">
          <img className="w-full h-[420px] md:h-[460px] lg:h-72 object-cover" src={book.image} alt="images" />
          <h2 className="text-gray-900 dark:text-white mt-5 text-xs">{book.name}</h2>
          <p className="text-[#8C8C8C] text-[10px] mt-1">{book.author}</p>
          <div className="flex mt-2 text-base">
            {Array.from({ length: book.rating }).map((_, index) => (
              <MdOutlineStar key={index} className="mr-1 text-primary" />
            ))}

          </div>

          <div className="flex justify-between mt-5">
            <button onClick={addHandler} className={`h-8 w-10/12 lg:w-9/12 border border-primary text-gray-950 dark:text-white hover:bg-primary px-2 sm:px-4 lg:px-6 xl:px-10 hover:text-white dark:hover:text-black transition-all duration-500 rounded-md text-[10px] xl:text-xs 
              ${active && "disabled opacity-70 bg-primary text-white dark:text-black cursor-default px-12"}`}>{active ? "Added To Cart" : `$${book.price} | Add to cart`}</button>

            <div onClick={markHandler} className={`bg-[#2EE0A5]/20 border border-primary ${mark && "border-primary/60"} cursor-pointer w-8 h-8 flex items-center justify-center rounded-md`}>
              {mark
                ?
                <FaHeart className="text-primary text-sm " />
                :
                <LuHeart className="text-black/80 dark:text-white/80 text-sm" />
              }
            </div>

          </div>

        </div>
        {
          isOpen && <InfoModal book={book} onAdd={onAdd} toggleFavorite={toggleFavorite} active={active} setActive={setActive} setIsOpen={setIsOpen} mark={mark} setMark={setMark} />
        }
      </li>
    </>
  )
}

export default MainPanel
