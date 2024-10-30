import Box from "@mui/material/Box";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { useEffect, useState } from "react";

interface PositionedSnackbarProps {
  open: boolean;
  message: string;
}

export default function PositionedSnackbar({
  open: propOpen,
  message,
}: PositionedSnackbarProps) {
  const [open, setOpen] = useState(propOpen);

  console.log(propOpen);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    setOpen(propOpen);
  }, [propOpen]);

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message}
        key={"top" + "right"}
      />
    </Box>
  );
}
