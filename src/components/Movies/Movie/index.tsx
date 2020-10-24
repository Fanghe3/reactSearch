import React from "react";
import "./style.css";

 type Props = {
   title: string,
   image: string,
   year: string

 }

const Movie: React.FC<Props> = (props) => {
  console.log(props.title);
  return (
    <div className="Movie">
      <h2>{props.title}</h2>
      <img src={props.image} alt="ss" />
      <h3>{props.year}</h3>
    </div>
  );
};

export default Movie;
