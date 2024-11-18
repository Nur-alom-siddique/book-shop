import { IoIosArrowForward } from "react-icons/io";

function RightPanel({ sortByName, sortByRating, sortByPrice, isName, isRatting, isPrice }) {
  return (

    <div className="hidden lg:block w-2/12 border-s border-gray-200 dark:border-[#595959] ">
      <h2 className="ml-6 mt-8 text-gray-800 dark:text-white text-base">Filter On Page</h2>

      <ul className="ml-7 mt-4 text-gray-700 dark:text-white/70 text-xs">
        <li onClick={() => sortByName()} className="flex items-center mt-2 cursor-pointer">
          <span className={`transform transition-transform duration-300 ${isName ? "rotate-90 text-primary" : "rotate-0"}`}>
            <IoIosArrowForward />
          </span>
          <span className={`ml-2 ${isName && 'text-primary'} `}>By Name</span>
        </li>
        <li onClick={() => sortByRating()} className="flex items-center mt-2 cursor-pointer">
          <span className={`transform transition-transform duration-300 ${isRatting ? "rotate-90 text-primary" : "rotate-0"}`}>
            <IoIosArrowForward />
          </span>
          <span className={`ml-2 ${isRatting && 'text-primary'} `}>By ratting</span>
        </li>
        <li onClick={() => sortByPrice()} className="flex items-center mt-2 cursor-pointer">
          <span className={`transform transition-transform duration-300 ${isPrice ? "rotate-90 text-primary" : "rotate-0"}`}>
            <IoIosArrowForward />
          </span>
          <span className={`ml-2 ${isPrice && 'text-primary'} `}>By Price</span>
        </li>
      </ul>
    </div>

  )
}

export default RightPanel;
