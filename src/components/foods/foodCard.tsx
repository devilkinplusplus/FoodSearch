import { Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import FoodDetail from "./foodDetail";

function FoodCard({ food }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        onClick={handleOpen}
        sx={{
          maxWidth: 345,
          border: "2px solid #e0e0e0",
          borderRadius: "8px",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
          },
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span className="text-gray-600">{food?.label}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {food?.brand ?? food?.category}
          </Typography>
        </CardContent>
      </Card>
      <FoodDetail handleClose={handleClose} open={open} food={food}/>
    </>
  );
}

export default FoodCard;
