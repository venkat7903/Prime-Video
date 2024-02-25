/* eslint-disable jsx-a11y/control-has-associated-label */
// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {itemDetails} = props
  const {thumbnailUrl, videoUrl} = itemDetails

  const thumbnailElement = (
    <div>
      <img src={thumbnailUrl} alt="thumbnail" />
    </div>
  )

  return (
    <Popup modal trigger={thumbnailElement} className="popup-content">
      {close => (
        <div className="popup-container">
          <button
            type="button"
            data-testid="closeButton"
            className="close-btn"
            onClick={() => close()}
          >
            <IoMdClose size={20} />
          </button>

          <ReactPlayer
            url={videoUrl}
            className="react-player"
            height={300}
            width="100%"
            controls="true"
          />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
