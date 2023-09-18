import { Modal } from "@mui/material";


function FoodDetail({ handleClose, open, food }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      className="flex items-center justify-center"
    >
      <div className="bg-white p-2 lg:p-8 pb-5 lg:pb-20 rounded-lg w-80 lg:w-256 relative">
        <div className="h-auto overflow-y-auto py-2">
          <h2 className="text-gray-700 text-xl lg:text-2xl pb-2">
            {food?.label}
          </h2>

          <div className="flex justify-start gap-3 text-gray-500 my-4 ">
            <span className="bg-gray-200 rounded-full px-2.5 py-0.5">{food?.nutrients.ENERC_KCAL.toFixed()}g Calories</span> 
            <span className="bg-gray-200 rounded-full px-2.5 py-0.5">{food?.nutrients.PROCNT.toFixed()}g Proteins</span> 
            <span className="bg-gray-200 rounded-full px-2.5 py-0.5">{food?.nutrients.CHOCDF.toFixed()}g Carbohydrates </span> 
          </div>  

          <span className="text-xs md:text-sm text-gray-400">
            {food?.foodContentsLabel ?? food?.category}
          </span>
        </div>
        <button
          className="absolute bottom-2 right-2 bg-red-300 hover:bg-red-400 text-red-700 font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default FoodDetail;
