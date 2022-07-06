import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

function Home2() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.clear();

    const video = document.querySelector(".video-background");
    let src = video.currentSrc || video.src;

    /* Make sure the video is 'activated' on iOS */
    function once(el, event, fn, opts) {
      var onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    }

    once(document.documentElement, "touchstart", function (e) {
      video.play();
      video.pause();
    });

    // /* ---------------------------------- */
    // /* Scroll Control! */

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    once(video, "loadedmetadata", () => {
      tl.fromTo(
        video,
        {
          currentTime: 0,
        },
        {
          currentTime: video.duration || 1,
        }
      );
    });

    /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    setTimeout(function () {
      if (window["fetch"]) {
        fetch(src)
          .then((response) => response.blob())
          .then((response) => {
            var blobURL = URL.createObjectURL(response);

            var t = video.currentTime;
            once(document.documentElement, "touchstart", function (e) {
              video.play();
              video.pause();
            });

            video.setAttribute("src", blobURL);
            video.currentTime = t + 0.001;
          });
      }
    }, 1000);

    /* ---------------------------------- */
  }, []);
  const onLoadedData = () => {
    setLoading(false);
    
  };

  return (
    <>
     {isLoading ? (
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
      )}
      <video
        src="https://firebasestorage.googleapis.com/v0/b/heterometadev-4d7aa.appspot.com/o/SAHNE%202%20KURAKLIK.mp4?alt=media&token=a8bcaf8a-5d6c-4a86-b071-365634aaaf2a"
        playsinline="true"
        webkit-playsinline="true"
        id="video"
        preload="auto"
        muted="muted"
        class="video-background"
        onLoadedData={onLoadedData}
      ></video>
      <div id="container"></div>
      <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
        <p className="scrollText">Scroll</p>
      </div>

        <Controller>
          <Scene
            duration={400}
            pin={true}
            indicators={false}
            triggerHook="onLeave"
          >
            {(progress) => (
              <div id="hero" className="hero ">
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{ scale: 10, opacity: 0 }}
                    to={{ scale: 1, opacity: 1 }}
                  >
                    <div class="boxContainer">
                      <div class="firefly"></div>
                      <div className="boxCenter">
                        <a href="/3" class="animated-button10">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Explore Now
                        </a>
                      </div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                      <div class="firefly"></div>
                    </div>
                  </Tween>
                </Timeline>
              </div>
            )}
          </Scene>
        </Controller>
    </>
  );
}

export { Home2 }
