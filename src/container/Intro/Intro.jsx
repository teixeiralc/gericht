/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import styles from './Intro.module.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) vidRef.current.pause();
    else vidRef.current.play();
  };

  const handleVideoOnKeyDown = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) handleVideo();
  };

  return (
    <section className={styles.section}>
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div className={`${styles.overlay} flex__center`}>
        <div
          className={`${styles.circle} flex__center`}
          onClick={handleVideo}
          onKeyDown={handleVideoOnKeyDown}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
