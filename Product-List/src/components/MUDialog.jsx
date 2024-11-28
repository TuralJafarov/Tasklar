import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Dispatch hookunu import et
import { addData, addProduct } from "../slices/dataSlice";

const MUDialog = ({ open, onClose }) => {
  const dispatch = useDispatch(); 

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageURL: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    onClose(); 
    setNewProduct({ name: "", description: "", price: "", imageURL: "" }); 
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Elave edin!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Yeni məhsul məlumatlarını daxil edin:
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="Məhsul Adı"
          type="text"
          fullWidth
          variant="standard"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          id="description"
          name="description"
          label="Məhsul Təsviri"
          type="text"
          fullWidth
          variant="standard"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          id="price"
          name="price"
          label="Qiymət"
          type="number"
          fullWidth
          variant="standard"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          id="imageURL"
          name="imageURL"
          label="Şəkil URL"
          type="text"
          fullWidth
          variant="standard"
          value={newProduct.imageURL}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Bağla
        </Button>
        <Button onClick={handleAddProduct} color="primary">
          Əlavə Et
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MUDialog;
