import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const selectedProduct = useSelector((state) => state.data.selectedProduct);
  const navigate = useNavigate();

  if (!selectedProduct) {
    return <div>Məhsul tapılmadı!</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        style={{ marginBottom: 20 }}
      >
        Geri qayit
      </Button>

      <Typography variant="h4" style={{ textAlign: "center" }}>
        Məhsul adı: {selectedProduct.name}
      </Typography>

      <Typography variant="h4" style={{ textAlign: "center" }}>
        Məhsul qiymeti: {selectedProduct.price}
      </Typography>
    </div>
  );
};

export default Products;
