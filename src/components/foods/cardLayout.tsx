import { useRecoilState } from "recoil";
import FoodCard from "./foodCard";
import { foodState } from "../../states/foodState";
import { Hints } from "../../consts/food";
import NotFound from "../utilities/notFound";

function CardLayout() {
  const hints = useRecoilState<Hints[]>(foodState);

  return (
    <div className="container mx-auto p-4 mt-5">
      <div className="flex flex-wrap justify-center gap-2">
        {hints[0].length > 0 ? (
          hints[0].map((val, ind) => {
            return <FoodCard key={ind} food={val.food} />;
          })
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}

export default CardLayout;
