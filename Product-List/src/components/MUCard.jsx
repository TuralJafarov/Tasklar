import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const MUCard = ({ item,onClick }) => {
  const { name, description, imageURL, price } = item;

  return (
    <Card onClick={onClick}
      sx={{
        border: "2px solid",
        borderColor: "primary.main",
        boxShadow: 6,
        maxWidth: 250,
        textAlign: "center",
        borderRadius: 3,
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 12,
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={imageURL}
        alt={name}
        sx={{
          objectFit: "cover",
          borderBottom: "2px solid",
        }}
      />
      <CardContent sx={{ padding: 2 }}>
        <Typography
          sx={{ textDecoration: "none", fontWeight: "bold" }}
          variant="h6"
        >
          {name}
        </Typography>
        <Typography
          sx={{ textDecoration: "none", fontSize: "0.9rem", marginTop: 1 }}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1.1rem",
            marginTop: 1,
          }}
          variant="subtitle1"
          color="primary"
        >
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MUCard;
