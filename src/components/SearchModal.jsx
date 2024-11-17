import { CiSearch } from "react-icons/ci"
import { useContext, useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { BookDataContext } from "../context/bookDataContext";

function SearchModal({ onClose }) {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflowY = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflowY = "scroll";
      document.body.style.paddingRight = "0px";
    }
  }, [])


  const { books } = useContext(BookDataContext)
  const [search, setSearch] = useState("")
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase().replace(/\s+/g, ''));
  }

  let filterOut = books.filter(curValue => {
    return curValue.name.toLowerCase().replace(/\s+/g, '').includes(search) || curValue.author.toLowerCase().replace(/\s+/g, '').includes(search)
  })

  return (

    <>
      <div onClick={onClose} className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 z-20"></div>

      <section className="z-30 w-6/12 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="bg-[#171923] h-96 rounded-xl pt-4 pb-10">

          <div onClick={onClose} className="absolute top-2 sm:top-6 right-2 sm:right-8 cursor-pointer p-2 z-50">
            <TfiClose className="text-xs sm:text-xl text-[#BFBFBF]" />
          </div>

          <div className="w-full">
            <form className="">
              <div className="relative z-40">
                <div className="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                  <CiSearch className="text-[#BFBFBF] ml-2 mt-2 text-base" />
                </div>
                <input onChange={handleSearch} type="text" className=" outline-none w-full px-2 pt-6 pb-4 ps-12 text-sm placeholder:text-[8px] md:placeholder:text-xs text-gray-400 border-b border-[#595959] bg-transparent focus:border-white/40 dark:bg-[#171923] dark:border-gray-600 placeholder:text-white/50 dark:placeholder-gray-400 dark:text-white/50 dark:focus:border-white/70" placeholder="Type your favorite book name here ..." />
              </div>
            </form>
          </div>



          <div className="w-full h-72 overflow-y-scroll scrollbar-hide">
            <ul>
              {
                filterOut.length === 0
                  ?
                  (<div className="flex h-28 w-full justify-center items-center">
                    <h1 className="text-white text-sm">No item found</h1>
                  </div>)
                  :

                  (filterOut.map(item => (
                    <li key={item.id} className="flex flex-wrap pl-5 hover:bg-primary transition-all duration-300 py-2 w-full group">
                      <img className="h-11 w-10" src={item.image} alt="image" />
                      <div className="pl-5">
                        <h4 className="text-[7px] sm:text-[11px] text-white group-hover:text-black">{item.name}</h4>
                        <p className="text-[6px] sm:text-[8px] text-white/60 group-hover:text-black/70">{item.author}</p>
                        <span className="text-[7px] sm:text-[9px] text-white/90 group-hover:text-black/90 mt-[1px] block">BDT: {item.price} TK</span>
                      </div>
                    </li>
                  )))

              }





            </ul>
          </div>

        </div >
      </section>




    </>

  )
}

export default SearchModal
