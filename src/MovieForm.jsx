import React from "react";
import { useState } from "react";
import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

export default function ({ movieName, inputStyle, buttonStyle }) {
  const [movie, setMovie] = useState("");
  const changeHandle = (e) => {
    setMovie((m) => e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    movieName(movie);
    setMovie("");
  };

  return (
    <form onSubmit={submitHandle}>
      <input
        style={inputStyle}
        type="text"
        value={movie}
        onChange={changeHandle}
        placeholder="Search a movie.."
      />

      <button
        onClick={submitHandle}
        variant="contained"
        className="buttonStyle"
        style={buttonStyle}
      >
        Search
      </button>
    </form>
  );
}
