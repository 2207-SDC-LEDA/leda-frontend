import React, {useState, useEffect} from 'react';
import { StarRating } from '../shared/StarRating/StarRating.jsx';


export const RatingsColumn = (props) => {

  var averageRating= props.averageRating;

  return (
    <div>
      {/* <h1>{averageRating} <StarRating rating={averageRating} /></h1> */}
    </div>
  )
};