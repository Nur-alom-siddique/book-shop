import { useContext, useState } from "react";
import LeftPanel from "./LeftPanel";
import MainPanel from "./MainPanel";
import RightPanel from "./RightPanel";
import BookDataContext from "../../context/BookDataContext";
import Footer from "../footer/Footer";


function Body() {

  const { books, data, setData } = useContext(BookDataContext)
  const [favorites, setFavorites] = useState([]); // List of favorite books

  const [isName, setIsName] = useState(false)
  const [isRatting, setIsRatting] = useState(false)
  const [isPrice, setIsPrice] = useState(false)

  //Right panel Sorting By Requarement
  const sortByName = () => {
    setData(data.toSorted((a, b) => a.name.localeCompare(b.name)))
    setIsName(true)
    setIsRatting(false)
    setIsPrice(false)
  }

  const sortByRating = () => {
    setData([...data].sort((a, b) => b.rating - a.rating))
    setIsRatting(true)
    setIsName(false)
    setIsPrice(false)
  }

  const sortByPrice = () => {
    setData([...data].sort((a, b) => a.price - b.price))
    setIsPrice(true)
    setIsRatting(false)
    setIsName(false)
  }

  //Left panel Tranding Filtering 
  const newReleases = () => {
    const newData = books.filter(item => item.status == "new_releases")
    return setData(newData);
  }

  const comingSoon = () => {
    const updateData = books.filter(item => item.status == "coming_soon")
    return setData(updateData);
  }

  const tranding = () => {
    const updateData = books.filter(item => item.rating > 4)
    return setData(updateData)
  }

  const favorite = () => {
    setData(favorites);
  };

  // Toggle favorite status
  const toggleFavorite = (book) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.find((fav) => fav.id === book.id);
      if (isFavorite) {
        // Remove from favorites
        return prevFavorites.filter((fav) => fav.id !== book.id);
      } else {
        // Add to favorites
        return [...prevFavorites, book];
      }
    });
  };


  return (
    <>
      <section className="lg:flex bg-white dark:bg-[#171923] pt-12 w-full max-w-screen-xl z-0">
        <LeftPanel newReleases={newReleases} comingSoon={comingSoon} tranding={tranding} favorite={favorite} />
        <div className="w-10/12 min-h-screen-minus-20 sm:w-11/12 lg:w-8/12 mx-auto gap-4 p-6">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-2">
            {data.map(book => <MainPanel book={book} key={book.id} toggleFavorite={toggleFavorite} />)}
          </ul>
        </div>

        <RightPanel sortByName={sortByName} sortByRating={sortByRating} sortByPrice={sortByPrice} isName={isName} isRatting={isRatting} isPrice={isPrice} />
      </section>
      <Footer />
    </>
  )
}

export default Body
