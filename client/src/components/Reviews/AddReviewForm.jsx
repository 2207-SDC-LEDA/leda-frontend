import React, {useState, useEffect} from 'react';
import {OverallReviewStars} from './OverallReviewStars.jsx';

export const AddReviewForm = ({ open, children, image, onClose, product }) => {

  const [characteristicState, setCharacteristicState] = useState({
    size: 0,
    width: 0,
    comfort: 0,
    quality: 0,
    length: 0,
    fit: 0
  });

  // const [sizeState, setSizeState] = useState(0);
  // const [widthState, setWidthState] = useState(0);
  // const [comfortState, setComfortState] = useState(0);
  // const [qualityState, setQualityState] = useState(0);
  // const [lengthState, setLengthState] = useState(0);
  // const [fitState, setFitState] = useState(0);

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

  const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    height: '80%',
    width: '80%',
    zIndex: 1000
  }

  var characteristics = [
    {
      name: 'size',
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too big',
      5: 'A size too wide'
    },
    {
      name: 'width',
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide',
    },
    {
      name: 'comfort',
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect'
    },
    {
      name: 'quality',
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect'
    },
    {
      name: 'length',
      1: 'Runs Short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    },
    {
      name: 'fit',
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    }
  ];

  if (!open) return null

  return (
    <>
      <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>&#10006;</button>
        <br/>
        <form>
          <h2>Write Your Review</h2>
          <h3>About the {product.name}</h3>
            Overall Rating*<br/>
            <OverallReviewStars/><br/>
            <div id="recommended">
              Recommended:
              <input type="radio" name="recommended" value="true" />Yes
              <input type="radio" name="recommended" value="false" />No
              <br/>
            </div>
            {characteristics.map((characteristic, index) => {
              return (
                <div id={characteristic.name} key={index}>
                  {characteristic.name.charAt(0).toUpperCase() + characteristic.name.slice(1)}:  {characteristics[index][characteristicState[characteristic.name]] || 'none selected'}<br/>
                  <input type="radio" name={characteristic.name}  value="1" onClick={() => {characteristicState[characteristic.name] = 1; setCharacteristicState({...characteristicState})}} />1
                  <input type="radio" name={characteristic.name}  value="2" onClick={() => {characteristicState[characteristic.name] = 2; setCharacteristicState({...characteristicState})}} />2
                  <input type="radio" name={characteristic.name}  value="3" onClick={() => {characteristicState[characteristic.name] = 3; setCharacteristicState({...characteristicState})}} />3
                  <input type="radio" name={characteristic.name}  value="4" onClick={() => {characteristicState[characteristic.name] = 4; setCharacteristicState({...characteristicState})}} />4
                  <input type="radio" name={characteristic.name}  value="5" onClick={() => {characteristicState[characteristic.name] = 5; setCharacteristicState({...characteristicState})}} />5
                  <br/>
                </div>
              )
            })}
        </form>
      </div>
      </div>
    </>
  )
};