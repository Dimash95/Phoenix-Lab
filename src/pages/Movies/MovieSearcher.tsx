import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface MovieSearcherProps {
  changeMovieTitle: (searchedMovieTitle: string) => void;
}

export default function MovieSearcher({
  changeMovieTitle,
}: MovieSearcherProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeMovieTitle(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search movie"
        variant="outlined"
        onChange={handleChange}
      />
    </Box>
  );
}
