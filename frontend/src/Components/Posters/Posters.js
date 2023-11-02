import React, { useEffect, useState } from 'react'
import './Posters.css'
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function Posters(props) {
  const [post, setPost] = useState([]);
  const [video, setVideo] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    axios.get(props.url).then(response => { setPost(response.data.results); console.log(response.data); })
  }, [])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      console.log(response.data.results); let arr = response.data.results;
      arr.map(value => {
        if (value.type === 'Trailer') {
          setVideo(value)
          console.log(value);
          console.log(value.key);
        } return null;
      })
    }); setState(!state)
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {post.map((obj, index) =>
          <img onClick={() => handleMovie(obj.id) } key={index} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
        )}
      </div>
     { state && <YouTube opts={opts} videoId={video.key}/>}
    </div>
  )
}

export default Posters
