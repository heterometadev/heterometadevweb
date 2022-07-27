import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import FocusLock from "react-focus-lock";
import { theme } from "../theme";
import { ThemeProvider } from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";
import ReactPlayer from "react-player";

function Home() {
  const player = useRef(null);
  const [playing, setPlay] = useState(true);
  const [loaded, setLoaded] = useState(0);
  const [played, setPlayed] = useState(0);
  // -- Burger Menu -- \\
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   console.log(playing);
  //   console.log(played);
  // }, [playing]);

  // useEffect(() => {
  //   console.log("played", played);
  // }, [played]);


  const listenDuration = () => {};

  const resumeVideo = (second) => {};

  const onLoadedData = () => {
    setTimeout(function () {
      setLoading(false);
    });
  };

  const handlePlayPause = () => {
    setPlay(!playing);
    // console.log(player.current.getCurrentTime());
  };

  const onProgress = (state) => {
    console.log(state);
    // We only want to update time slider if we are not currently seeking
    // if (!this.state.seeking) {
    //   this.setState(state)
    // }
  };

  const onStart = () => {
    console.log("basladi");
  };

  const onPause = () => {
    console.log("durakladi");
  };

  const handlePause = () => {
    setPlay(false);
  };

  const handlePlay = () => {
    setPlay(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <MobileView>
          {/*  ------------- Loading -------------- */}
          {isLoading ? (
            <div id="loading">
              <img id="loadingGifMobile" src="loading.gif" />
            </div>
          ) : (
            <div></div>
          )}
          <div id="video-container">
            <ReactPlayer
              onPlay={handlePlay}
              playing={true}
              muted={true}
              width={"100%"}
              height={"100%"}
              className={"video-background-react-player"}
              onLoadedData={onLoadedData}
              url="https://firebasestorage.googleapis.com/v0/b/heterometadev-4d7aa.appspot.com/o/All_01.mp4?alt=media&token=e4bfbd25-eded-42b0-bbd4-f088c5e64e94"
            />
          </div>
        </MobileView>
        <BrowserView>
          {/*  ------------- Loading -------------- */}
          {isLoading ? (
            <div id="loading">
              <img id="loadingGif" src="loading.gif" />
            </div>
          ) : (
            <div></div>
          )}
          <div id="video-container">
            <ReactPlayer
              ref={player}
              onStart={onStart}
              onPause={onPause}
              playing={playing}
              muted={true}
              width={"100%"}
              height={"100%"}
              className={"video-background-react-player"}
              onLoadedData={onLoadedData}
              url="https://firebasestorage.googleapis.com/v0/b/heterometadev-4d7aa.appspot.com/o/All_01.mp4?alt=media&token=e4bfbd25-eded-42b0-bbd4-f088c5e64e94"
            />
            <div className="bottomCenterButton">
              <button className="buttonGrey" onClick={handlePlayPause}>
                Play/Pause
              </button>

              {/* <progress max={1} value={played} /> */}
            </div>
          </div>
        </BrowserView>

        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
      </>
    </ThemeProvider>
  );
}

export { Home };
