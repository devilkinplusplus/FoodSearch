import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { searchFood } from "../../services/apiService";
import { AxiosResponse } from "axios";
import { FoodResponse, Hints } from "../../consts/food";
import { useRecoilState } from 'recoil';
import { foodState } from "../../states/foodState";
import { Backdrop, CircularProgress } from "@mui/material";


function Index() {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [,setHints] = useRecoilState<Hints[]>(foodState);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleClick = async () => {
    setLoading(true)
    await searchFood(inputValue).then((res:AxiosResponse<FoodResponse>)=>{
      if(res.status === 200){
        setHints(res.data.hints)
      }
    }).catch((err)=>{
      console.log(err);
    }).finally(()=>{
      setLoading(false)
    })
  }

  return (
    <>
      <div className="flex items-center justify-center my-4">
        <input
          value={inputValue} 
          onChange={handleInputChange} 
          required
          autoComplete="off"
          type="text"
          placeholder="Search food.."
          className="py-2 px-3 w-80 md:w-128 lg:w-256 outline-none rounded-l-md focus:bg-gray-100 duration-200 border-2 border-white focus:border-blue-500"
        />
        <button
          type="button"
          onClick={() => handleClick()}
          className="py-2 px-4 bg-blue-500 cursor-pointer text-white rounded-r-md hover:bg-blue-400 duration-500"
        >
          <SearchIcon />
        </button>
      </div>
      <span className="pt-4 text-gray-400 text-sm md:text-base">
        Search any food in the world !
      </span>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
    </>
  );
}

export default Index;
