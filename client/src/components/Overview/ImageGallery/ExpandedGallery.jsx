import React from 'react'

import '../../../styles/overview.css'


const ExpandedGallery = (props) => {
  let currentStyle = props.style || {}
  let currentImage = props.main || ''
  let imageArr = props.images || []
  let display = []
  let leftArrowOption, rightArrowOption

  if (props.style === {}) {
    currentStyle.name = ''
  } else {
    // map the image urls
    imageArr.map(photo => {
      display.push(photo.url)
    })
  }

  // set the left and right arrow options for the view displays
  display.forEach((photo, index) => {
    if (photo === currentImage) {
      if (index === 0) {
        leftArrowOption = photo
      } else {
        leftArrowOption = display[index - 1]
      }

      if (index === imageArr.length - 1) {
        rightArrowOption = photo
      } else {
        rightArrowOption = display[index + 1]
      }
    }
  })

  // user clicks the thumbnail images directly
  let handleClick = (e) => {
    e.preventDefault()
    let url = e.target.src
    props.thumbnailChange(url)
  }

  // user clicks arrows to update thumbnail and main image selections
  let handleArrowLeft = () => {
    props.thumbnailChange(leftArrowOption)
  }
  let handleArrowRight = () => {
    props.thumbnailChange(rightArrowOption)
  }

  return (
    <>
      <div className="exp-main-image-container">
        <img src={currentImage} className="exp-main-image" alt={currentStyle.name} onClick={() => props.onClick()} id="expanded-view-click" widgetname="Overview" />
        <div className="view-overlay">
          <div className="arrow-overlay">
            <div className="right-arrow-overlay" onClick={() => handleArrowRight()} id="expanded-right-arrow" widgetname="Overview"></div>
          </div>
        </div>
        <div className="view-overlay">
          <div className="arrow-overlay">
            <div className="left-arrow-overlay" onClick={() => handleArrowLeft()} id="expanded-left-arrow" widgetname="Overview"></div>
          </div>
        </div>
      </div>

      <div className="thumbanil-container">
        {display.map((photo, index) => {
          if (photo === currentImage) {
            return <img key={index} src={photo} className="thumbnail-selected" alt="thumnail image" height="75" onClick={(e) => handleClick(e)} id="expanded-view-thumnail-img-selected" widgetname="Overview" />
          } else {
            return <img key={index} src={photo} className="thumbnail-image" alt="thumnail image" height="75" onClick={(e) => handleClick(e)} id="expanded-view-thumnail-img-selected" widgetname="Overview" />
          }
        })}
      </div>
    </>
  )
}

export default ExpandedGallery;