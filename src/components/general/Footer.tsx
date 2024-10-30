import * as React from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppBar from "@mui/material/AppBar";

export default function Footer() {
  const [value, setValue] = React.useState("recents");
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <AppBar position="static">
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
        className=" m-auto"
      >
        <BottomNavigationAction
          label="Movies"
          value="/"
          icon={<LocalMoviesIcon />}
        />

        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </AppBar>
  );
}
