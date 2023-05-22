import React from "react";
import { Box, Paper } from "@mui/material";

import "./Component.css";

export default function FavoriteDetail({ recipe }) {
  return (
    <div className="favorite_item_container">
      <Box
        sx={{
          display: "flex",
          m: 1,
        }}
      >
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div className="item_content_container">
            <div className="item_content">
              <p className="item_name">{recipe.strMeal}</p>
              <p>
                <span>Category: </span>
                {recipe.strCategory}
              </p>
            </div>
            <img src={recipe.strMealThumb} alt={recipe.strTags} />
          </div>
        </Paper>
      </Box>
    </div>
  );
}
