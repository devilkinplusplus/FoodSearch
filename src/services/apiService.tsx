import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://api.edamam.com/api/food-database/v2/parser',
  params:{
    app_id:"43ece382",
    app_key:"e8e048ce15d2a55cd94a344f0be316cc",
    nutrition_type:"cooking"
  }
});

export const searchFood = (search:string) => {
  return axiosInstance.get('', { params: { ingr: search } });
};

export default axios;
