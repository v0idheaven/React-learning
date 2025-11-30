import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index }&limit=10`
    );

    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 font-semibold -translate-y-1/2">Loading....</h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-62 w-58 overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      
      <div className="flex h-82% flex-wrap gap-4 p-2">{printUserData}</div>

      <div className="flex justify-center gap-6 text-sm items-center p-4">
        <button
        style={{opacity: index == 1 ? 0.5 : 1}}
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded mt-4 px-4 py-2 font-semibold">
          Prev
        </button>
        <h4 className="mt-4">Page {index}</h4>
        <button
        onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}
        className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black mt-4 rounded px-4 py-2 font-semibold">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
