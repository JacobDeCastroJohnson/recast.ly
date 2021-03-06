// import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  return (<div className="video-list">
    {props.videos.map((video, i) => {
      return (<VideoListEntry
        currentVideo={props.currentVideo}
        handleVideoPlayerClick={props.handleVideoPlayerClick}
        video={video}
        key={i} />
      );
    }
    )}
  </div>);

};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   // videos: PropTypes.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
