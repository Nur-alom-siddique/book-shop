import { GoTrash } from "react-icons/go";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useContext } from "react";
import { BookDataContext } from "../context/BookDataContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ListCartModal({ item }) {

  const { removeItem, increament, decreament, setId } = useContext(BookDataContext);

  let total = item.quantity * item.price

  const removeHandler = () => {
    removeItem(item.id)
    setId(item.id)
    toast.error("Delete Success!")

  }
  return (
    <div>
      <div className="bg-[#8C8C8C]/80 w-full h-[1px]"></div>
      <ul className="flex my-1 lg:my-3">
        <li className="flex flex-wrap items-center item-center w-5/12">
          <img className="h-8 lg:h-12 object-cover rounded-sm" src={item.image} alt="" />
          <div className="ml-3">
            <h4 className="text-[6px] sm:text-[10px] xl:text-xs text-white max-w-[80px] sm:max-w-[100px] xl:max-w-28">{item.name}</h4>
            <span className="text-[5px] sm:text-[8px] xl:text-[10px] text-[#D9D9D9]/80 w-full">{item.author}</span>
          </div>
        </li>
        <li className="flex items-center justify-center w-1/12">
          <span className="text-white text-[8px] lg:text-xs">{item.price}</span>
        </li>
        <li className="text-[8px] lg:text-xs flex items-center ml-9 w-2/12">
          <div className="flex items-center justify-center w-12 lg:w-20 h-4 lg:h-6 rounded-xl bg-[#595959] text-white">
            <HiMinus onClick={() => decreament(item.id)} />
            <span className="mx-3">{item.quantity}</span>
            <HiPlus onClick={() => increament(item.id)} />
          </div>
        </li>
        <li className="flex items-center justify-end pr-4 w-2/12">
          <span className="text-white text-[10px] lg:text-xs">{total}</span>
        </li>
        <li className="flex items-center justify-end text-white w-1/12">
          <GoTrash className="cursor-pointer text-xs lg:text-base" onClick={removeHandler} />
        </li>
      </ul>
    </div>
  )
}

export default ListCartModal;
