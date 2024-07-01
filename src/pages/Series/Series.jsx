import React from "react";
import { useState, useEffect } from "react";
import "./Series.css";
import CustomPagination from "../../components/pagination/CustomPagination";
import Genres from "../../components/Genres";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";
import axios from "axios";

const Series = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  const fetchTvSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
    console.log(data);
  };

  useEffect(() => {
    fetchTvSeries();
    // eslint-disable-next-line
  }, [page, genreforURL]);
 return (
   <div>
     <span className="pageTitle">Series</span>
     <Genres
       type="tv"
       genres={genres}
       setGenres={setGenres}
       selectedGenres={selectedGenres}
       setSelectedGenres={setSelectedGenres}
       setPage={setPage}
     />
     <div className="series">
       {content &&
         content.map((item) => (
           <SingleContent
             key={item.id}
             id={item.id}
             poster={item.poster_path}
             title={item.title || item.name}
             date={item.first_air_date || item.release_date}
             media_type="tv"
             vote_average={item.vote_average}
           />
         ))}
     </div>
     {numOfPages > 1 && (
       <CustomPagination
         page={page}
         setPage={setPage}
         numOfPages={numOfPages}
       />
     )}
   </div>
 );
};

export default Series;
