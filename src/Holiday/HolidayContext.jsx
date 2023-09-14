import { createContext } from "react";
import { useActionData } from "react-router-dom";
import { useState, useEffect } from "react";
const HolidayContext = createContext();

export const HolidayContextProvider = ({ children }) => {
  console.log(children);
  const [data, setData] = useState([]);
  const [singleProductData,setSingleProductData] = useState([])
  const [destination, setDestination] = useState("Ladakh");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [showDestination, setShowDestination] = useState(false);
  const [showPlace, setShowPlace] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [placeFor, setPlaceFor] = useState("");
  const [showPlaceFor, setShowPlaceFor] = useState(false);
  const [rating, setRating] = useState("");
  const [showRating, setShowRating] = useState(false);

  const handleDestination = (e) => {
    setDestination(e.target.value);
    setShowDestination(true);
  };

  function handlePlace(p) {
    setPlace(p);
    setShowPlace(true);
  }
  function handlePlaceFor(e) {
    setPlaceFor(e.target.value);
    setShowPlaceFor(true);
  }
  function handleRating(e) {
    setRating(e.target.value);
    setShowRating(true);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
    setShowPrice(true);
  }

  function handleSearch(e) {
    setSearchVal(e.target.value);
  }

  function handleSearchSubmit() {
    setShowSearch(true);
  }

  console.log("showSearch   " + showSearch);
  console.log("showRating  " + showRating, rating);
  // console.log("place" + place)
  // console.log(showDestination);
  // console.log("showPlace  " + showPlace )
  // console.log(destination);
  console.log(searchVal);

  console.log("price " + price);
  console.log(showPrice);






const fetchDataId = async(id) =>{
  console.log( "Id for Single Product Page "+  id)
  try{
const result = await fetch(`http://localhost:3000/holiday/${id}`);
const res = await result.json();
setSingleProductData(res)
  }catch(err){
console.log(err)
  }
}

console.log(singleProductData)

useEffect(()=>{
  fetchDataId()
},[])






  useEffect(() => {
    const fetchData = async (destination, place, searchVal) => {
      let url = `http://localhost:3000/holiday`;
      if (showDestination) {
        url = `http://localhost:3000/holiday?state=${destination}`;
      } else {
        url = url;
      }
      if (showPlace) {
        url = `http://localhost:3000/holiday?place=${place}`;
      } else {
        url = url;
      }

      if (showPrice == true && price === "asc") {
        url = `http://localhost:3000/holiday?_sort=price&_order=asc`;
      }
      if (price === "desc") {
        url = `http://localhost:3000/holiday?_sort=price&_order=desc`;
      }
      if (showSearch) {
        url = `http://localhost:3000/holiday?q=${searchVal}`;
      } else {
        url = url;
      }
      if (showPlaceFor) {
        url = `http://localhost:3000/holiday?type=${placeFor}`;
      }

      if (showPlaceFor && showPrice && price === "desc") {
        url = `http://localhost:3000/holiday?type=${placeFor}&_sort=price&_order=desc`;
      }

      if (showPlaceFor && showPrice && price === "asc") {
        url = `http://localhost:3000/holiday?type=${placeFor}&_sort=price&_order=asc`;
      }
      if (showPlace && showPrice && price === "asc") {
        url = `http://localhost:3000/holiday?place=${place}&_sort=price&_order=asc`;
      }
      if (showPlace && showPrice && price === "desc") {
        url = `http://localhost:3000/holiday?place=${place}&_sort=price&_order=desc`;
      }
      if (showPlace && showPlaceFor && showPrice && price === "asc") {
        url = `http://localhost:3000/holiday?place=${place}&type=${placeFor}&_sort=price&_order=asc`;
      }
      if (showPlace && showPrice && showPlaceFor && price === "desc") {
        url = `http://localhost:3000/holiday?place=${place}&type=${placeFor}&_sort=price&_order=desc`;
      }
      if (showPlace && showPlaceFor) {
        url = `http://localhost:3000/holiday?place=${place}&type=${placeFor}`;
      }

      if (showSearch && showPrice && price === "asc") {
        url = `http://localhost:3000/holiday?q=${searchVal}&_sort=price&_order=asc`;
      }
      if (showSearch && showPrice && price === "desc") {
        url = `http://localhost:3000/holiday?q=${searchVal}&_sort=price&_order=desc`;
      }


      if (showRating && rating === "asc" ) {
        url = `http://localhost:3000/holiday?_sort=rating&_order=asc`;
      }
      if (showRating && rating === "desc" ) {
        url = `http://localhost:3000/holiday?_sort=rating&_order=desc`;
      }

      if ( showPlace && showRating && rating === "asc" ) {
        url = `http://localhost:3000/holiday?place=${place}&_sort=rating&_order=asc`;
      }
      if ( showPlace && showRating && rating === "desc" ) {
        url = `http://localhost:3000/holiday?place=${place}&_sort=rating&_order=desc`;
      }

      if ( showPlaceFor && showRating && rating === "asc" ) {
        url = `http://localhost:3000/holiday?type=${placeFor}&_sort=rating&_order=asc`;
      }
      if ( showPlaceFor && showRating && rating === "desc" ) {
        url = `http://localhost:3000/holiday?&type=${placeFor}&_sort=rating&_order=desc`;
      }

      if (showPlace && showPlaceFor && showRating && rating === "asc" ) {
        url = `http://localhost:3000/holiday?place=${place}&type=${placeFor}&_sort=rating&_order=asc`;
      }
      if (showPlace &&  showPlaceFor && showRating && rating === "desc" ) {
        url = `http://localhost:3000/holiday?place=${place}&type=${placeFor}&_sort=rating&_order=desc`;
      }


      if (
        showSearch &&
        showPlaceFor &&
        showPrice &&
        price === "asc" &&
        showPlace
      ) {
        url = `http://localhost:3000/holiday?q=${searchVal}&type=${placeFor}&place=${place}&_sort=price&_order=asc`;
      }
      if (
        showSearch &&
        showPlaceFor &&
        showPrice &&
        price === "desc" &&
        showPlace
      ) {
        url = `http://localhost:3000/holiday?q=${searchVal}&type=${placeFor}&place=${place}&_sort=price&_order=desc`;
      }






      console.log(url);

      try {
        const result = await fetch(url);
        const res = await result.json();
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(destination, place, searchVal, placeFor, showPlaceFor,showRating);
  }, [
    destination,
    place,
    showPrice,
    price,
    searchVal,
    showSearch,
    placeFor,
    showPlaceFor,
    showRating,
    rating
  ]);

  return (
    <HolidayContext.Provider
      value={{
        data,
        destination,
        handlePrice,
        handleDestination,
        setDestination,
        showDestination,
        handlePlace,
        handleSearch,
        handleSearchSubmit,
        handlePlaceFor,
        handleRating,
        fetchDataId
      }}
    >
      {children}
    </HolidayContext.Provider>
  );
};

export default HolidayContext;