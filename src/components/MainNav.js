import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if(value === 0) {
      navigate("/")
    }
    if (value === 1) {
      navigate("/movies");
    }
    if (value === 2) {
      navigate("/series");
    }
    if (value === 3) {
      navigate("/search");
    }
  }, [value,navigate]);

  return (
    <Box
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#29313a",
        color: "white",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        style={{ backgroundColor: "#2d313a" }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          label="TV series"
          style={{ color: "white" }}
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          label="Search"
          style={{ color: "white" }}
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
