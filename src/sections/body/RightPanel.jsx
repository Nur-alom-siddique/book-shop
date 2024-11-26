import { IoIosArrowForward } from "react-icons/io";

function RightPanel({ sortByName, sortByRating, sortByPrice, isName, isRatting, isPrice }) {
  return (

    <div className="hidden lg:block overflow-hidden w-2/12 border-s border-gray-200 dark:border-[#595959]">
      <h2 className="ml-6 mt-8 text-gray-800 dark:text-white text-base">Filter On Page</h2>

      <ul className="ml-7 mt-4 text-gray-700 dark:text-white/70 text-xs">
        <li onClick={() => sortByName()} className="flex hover:text-primary hover:scale-105 transform transition duration-300 group items-center mt-2 cursor-pointer">
          <span className={`transform transition-transform duration-300 group-hover:rotate-90 group-hover:text-primary ${isName ? "rotate-90 text-primary" : "rotate-0"}`}>
            <IoIosArrowForward />
          </span>
          <span className={`ml-2 ${isName && 'text-primary'} `}>By Name</span>
        </li>
        <li onClick={() => sortByRating()} className="flex group items-center mt-2 hover:scale-105 transform transition duration-300 hover:text-primary cursor-pointer">
          <span className={`transform transition-transform duration-300 group-hover:rotate-90 group-hover:text-primary ${isRatting ? "rotate-90 text-primary" : "rotate-0"}`}>
            <IoIosArrowForward />
          </span>
          <span className={`ml-2 ${isRatting && 'text-primary'} `}>By ratting</span>
        </li>
        <li onClick={() => sortByPrice()} className="flex group hover:text-primary hover:scale-105 transform transition duration-300 items-center mt-2 cursor-pointer">
          <span className={`transform transition-transform duration-300 group-hover:rotate-90 group-hover:text-primary ${isPrice ? "rotate-90 text-primary" : "rotate-0"}`}>
            <IoIosArrowForward />
          </span>
          <span className={`ml-2 ${isPrice && 'text-primary'} `}>By Price</span>
        </li>
      </ul>
    </div>

  )
}

export default RightPanel;
