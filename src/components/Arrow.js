import React from 'react';
import "./styles/arrows.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight,  } from '@fortawesome/free-solid-svg-icons'

function RightArrow(props) {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

function LeftArrow(props) {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}

export {RightArrow, LeftArrow};