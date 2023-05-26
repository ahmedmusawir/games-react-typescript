import { List, list, ListItem } from "@chakra-ui/react";
import React from "react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres, error, isLoading } = useGenres();
  //   console.log("Genres:", genres);
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </List>
  );
}

export default GenreList;
