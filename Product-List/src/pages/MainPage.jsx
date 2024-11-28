import React, { useEffect, useState } from "react";
import MUCard from "../components/MUCard";
import { useDispatch, useSelector } from "react-redux";
import { addData, setSelectedProduct, closeSnackBarss } from "../slices/dataSlice";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import MUDialog from "../components/MUDialog";
import MUSnackbar from "../components/MUSnackbar";

const MainPage = () => {
  const dispatch = useDispatch();
  const { data, loading, openSnackbar, snackbarMessage } = useSelector((store) => store.data);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    dispatch(addData());
  }, [dispatch]);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleCloseSnackBar = () => {
    dispatch(closeSnackBarss());
  };

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <Button variant="contained" size="medium" onClick={handleDialogOpen}>
          Əlavə Et
        </Button>
      </div>

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {data?.map((item) => (
          <Grid key={item.id} size={3}>
            <Link to={`/products/${item.id}`} style={{ textDecoration: "none" }}>
              <MUCard item={item} onClick={() => dispatch(setSelectedProduct(item))} />
            </Link>
          </Grid>
        ))}
      </Grid>

      <MUDialog open={openDialog} onClose={handleDialogClose} />
      
      <MUSnackbar
        open={openSnackbar}
        onClose={handleCloseSnackBar}
        message={snackbarMessage}  
      />
    </div>
  );
};

export default MainPage;
