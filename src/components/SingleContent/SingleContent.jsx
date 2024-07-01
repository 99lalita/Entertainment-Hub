import React from "react";
import "./SingleContent.css";
import { img_300, unavailable } from "../../config/config";
import { Badge } from "@mui/material";
import ContentModalDisplay from "../ContentModal/ContentModalDisplay";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModalDisplay media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span>{date}</span>
      </span>
    </ContentModalDisplay>
  );
};

export default SingleContent;
