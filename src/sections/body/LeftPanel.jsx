import { AiOutlineFire, AiFillFolderAdd, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineUpcoming } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import SearchModal from "../../components/SearchModal";
import { useState } from "react";

function LeftPanel({ newReleases, comingSoon, tranding, favorite }) {
  const [searchModal, setSearchModal] = useState(false)
  const onClose = () => setSearchModal(false)


  return (
    <div className="lg:w-2/12 border-e border-gray-300 dark:border-[#595959]">
      <ul className="lg:w-8/12 mx-8 transition-all duration-200 flex flex-col items-center lg:block lg:ml-auto lg:mr-5">
        <li className="mb-5 w-full mt-10">

          <form onClick={() => setSearchModal(true)} className="max-w-md mx-auto">
            <div className="relative z-10">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <CiSearch className="text-gray-700 dark:text-gray-200 ml-3 mr-2 text-base" />
              </div>
              <input type="search" className="outline-none block w-full p-2 ps-12 text-[10px] text-gray-300 border border-primary rounded-lg bg-transparent focus:ring-primary focus:border-blue-55 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly placeholder="Quick search..." />
            </div>
          </form>
          {
            searchModal && <SearchModal onClose={onClose} />
          }


        </li>
        <li onClick={() => tranding()} className="flex items-center cursor-pointer transition-all duration-500 text-gray-700 dark:text-white px-10 lg:px-6 py-2  mr-7 lg:mr-0 mb-1 lg:mb-5 rounded-md hover:bg-primary hover:text-black">
          <AiOutlineFire className="mr-3 text-base" />
          <h3 className="lg:text-[10px] xl:text-xs">Trending</h3>
        </li>
        <li onClick={() => newReleases()} className="flex items-center px-8 lg:px-0 cursor-pointer transition-all duration-500 text-gray-700 dark:text-white lg:pl-3 py-2 mb-1 lg:mb-5 rounded-md hover:bg-primary hover:text-black">
          <AiFillFolderAdd className="lg:ml-3 mr-2 text-base" />
          <h3 className="lg:text-[10px] xl:text-xs">New Releases</h3>
        </li>
        <li onClick={() => comingSoon()} className="flex items-center px-8 lg:px-0 cursor-pointer transition-all duration-500 text-gray-700 dark:text-white lg:pl-3 py-2 mb-1 lg:mb-5 rounded-md hover:bg-primary hover:text-black">
          <MdOutlineUpcoming className="lg:ml-3 mr-2 text-base" />
          <h3 className="lg:text-[10px] xl:text-xs">Coming Soon</h3>
        </li>
        <li onClick={() => favorite()} className="flex items-center cursor-pointer transition-all duration-500 text-gray-700 dark:text-white px-10 lg:px-6 py-2 mr-7 lg:mr-0 mb-1 lg:mb-5 rounded-md hover:bg-primary hover:text-black">
          <AiOutlineHeart className="mr-3 text-base" />
          <h3 className="lg:text-[10px] xl:text-xs">Favorites</h3>
        </li>
      </ul>
    </div>
  )
}

export default LeftPanel;
