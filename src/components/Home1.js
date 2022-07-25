import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useOnClickOutside } from "../hooks";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import FocusLock from "react-focus-lock";
import { theme } from "../theme";
import { ThemeProvider } from "styled-components";
import { BrowserView, MobileOnlyView, MobileView } from "react-device-detect";

function Home1() {
  // -- Burger Menu -- \\
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log(isLoading);
  });

  

  useEffect(() => {
    const video = document.getElementById("video1");
    let src = video.currentSrc || video.src;
    const loading = document.getElementById("loading");

    video.play();
    setTimeout(function () {
      video.pause();
    }, 25000);

    //Loading  #
    // video.addEventListener(
    //   "loadeddata",
    //   function () {
    //     // Video is loaded and can be played
    //     setTimeout(function () {
    //       loading.addClass("hidden");
    //       console.log("im here for 3sc  late");
    //     }, 5000);

    //   },
    //   false
    // );

    //Solution 1 #
    // let last_known_scroll_position = 0;
    // let ticking = false;

    // function doSomething(scroll_pos) {
    //   // Do something with the scroll position
    //   video.play();
    //   setTimeout(function () {
    //     video.pause();
    //   }, 5000);
    // }

    // window.addEventListener("scroll", function (e) {
    //   last_known_scroll_position = window.scrollY;

    //   if (!ticking) {
    //     window.requestAnimationFrame(function () {
    //       doSomething(last_known_scroll_position);
    //       ticking = false;
    //     });

    //     ticking = true;
    //   }
    // });

    /* ---------------------------------- */

    // let last_known_scroll_position = 0;
    // let ticking = false;

    // function doSomething(scroll_pos) {
    //   // Do something with the scroll position

    //   setTimeout(function () {
    //     video.play();
    //   }, 3000);
    //   video.pause();
    // }

    // window.addEventListener("scroll", function (e) {
    //   last_known_scroll_position = window.scrollY;

    //   if (!ticking) {
    //     window.requestAnimationFrame(function () {
    //       doSomething(last_known_scroll_position);
    //       ticking = false;
    //       console.log(ticking);
    //     });
    //     console.log(ticking);
    //     ticking = true;
    //   }
    // });

    /* Make sure the video is 'activated' on iOS */
    // function once(el, event, fn, opts) {
    //   var onceFn = function (e) {
    //     el.removeEventListener(event, onceFn);
    //     fn.apply(this, arguments);
    //   };
    //   el.addEventListener(event, onceFn, opts);
    //   return onceFn;
    // }

    // once(document.documentElement, "touchstart", function (e) {
    //   video.play();
    //   video.pause();
    // });

    // // /* ---------------------------------- */
    // // /* Scroll Control! */

    // gsap.registerPlugin(ScrollTrigger);

    // let tl = gsap.timeline({
    //   defaults: { duration: 1 },
    //   scrollTrigger: {
    //     trigger: "#container",
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: true,
    //   },
    // });

    // once(video, "loadedmetadata", () => {
    //   tl.fromTo(
    //     video,
    //     {
    //       currentTime: 0,
    //     },
    //     {
    //       currentTime: video.duration || 1,
    //     }
    //   );
    // });

    // /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    // setTimeout(function () {
    //   if (window["fetch"]) {
    //     fetch(src)
    //       .then((response) => response.blob())
    //       .then((response) => {
    //         var blobURL = URL.createObjectURL(response);

    //         var t = video.currentTime;
    //         once(document.documentElement, "touchstart", function (e) {
    //           video.play();
    //           video.pause();
    //         });

    //         video.setAttribute("src", blobURL);
    //         video.currentTime = t + 0.001;
    //       });
    //   }
    // }, 1000);

    /* ---------------------------------- */
  }, []);


  const resumeVideo = (second) => {};

  const onLoadedData = () => {
    setTimeout(function () {
      setLoading(false);
    }, 5000);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        {/* {isLoading ? (
          <div className="loadingContainer">
            <div class="loading">
              <span></span>
              <span></span>
              <span></span>
              <h2>Loading</h2>
            </div>
          </div>
        ) : (
          <div></div>
        )} */}
        {/* Loading */}

        <div id="video-container">
          <video
            id="video1"
            playsInline
            muted
            preload="auto"
            className="video-background"
            onLoadedData={onLoadedData}
          >
            <source
              type="video/mp4"
              src="https://firebasestorage.googleapis.com/v0/b/heterometadev-4d7aa.appspot.com/o/SAHNE%205%20HETEROMETA.mp4?alt=media&token=36635335-77ae-4893-b322-6e8eb4c39744"
            />
          </video>
        </div>
        <MobileView>
          {isLoading ? (
            <div id="loading">
              <img id="loadingGifMobile" src="loading.gif" />
            </div>
          ) : (
            <div></div>
          )}
        </MobileView>
        <BrowserView>
          {isLoading ? (
            <div id="loading">
              <img id="loadingGif" src="loading.gif" />
            </div>
          ) : (
            <div id="loading">
            <img id="loadingGif" src="loading.gif" />
          </div>
          )}
        </BrowserView>

        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen}  aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
      </>
    </ThemeProvider>
  );
}

export { Home1 };
