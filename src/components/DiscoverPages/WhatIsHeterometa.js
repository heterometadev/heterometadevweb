import "../../App.css";
import React, { useEffect, useState, useRef } from "react";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import FocusLock from "react-focus-lock";
import { theme } from "../../theme";
import { ThemeProvider } from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";
import Footer from "../Footer";
import { Container, Row, Col } from "react-grid-system";

function WhatIsHeterometa() {
  // -- Burger Menu -- \\
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const [isLoading, setLoading] = useState(true);

  useState(() => {
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  });

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
            <div>
              <h1>Discover</h1>
              <Footer></Footer>
            </div>
          )}
        </MobileView>
        <BrowserView>
          {/*  ------------- Loading -------------- */}
          {isLoading ? (
            <div id="loading">
              <img id="loadingGif" src="../loading.gif" />
            </div>
          ) : (
            <Container className="container">
              {/* Title */}
              {/* <p className="titleText">Discover</p> */}
              <h1 class="jt --debug">
                <span class="jt__row">
                  <span class="jt__text"> What is HeteroMeta</span>
                </span>
                <span class="jt__row jt__row--sibling" aria-hidden="true">
                  <span class="jt__text"> What is HeteroMeta</span>
                </span>
                <span class="jt__row jt__row--sibling" aria-hidden="true">
                  <span class="jt__text"> What is HeteroMeta</span>
                </span>
                <span class="jt__row jt__row--sibling" aria-hidden="true">
                  <span class="jt__text"> What is HeteroMeta</span>
                </span>
              </h1>

              <div class="card text-white bg-transparent">
                <div class="card-body">
                  <br></br>
                  <br></br>
                  <div class="card-group">
                    <div class="card text-white bg-dark mb-3">
                      <img src="/loading.gif" alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div class="card text-white bg-dark mb-3">
                      <img src="/loading.gif" alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This card has supporting text below as a natural
                          lead-in to additional content.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div class="card text-white bg-dark mb-3">
                      <img src="/loading.gif" alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This card has
                          even longer content than the first to show that equal
                          height action.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p class="card-text">
                    Note from the whitepaper ‘’ Find your place in the universe
                    where real values are produced by logging into HeteroMeta,
                    and dive into Dimenzia* to experience this life.’’ Every
                    Dimenzia leads you to the endless posibilities to produce
                    and reproduce in the multi-dimensional environment of
                    metaverse, HeteroMeta. With this endless freedom of choise,
                    you can create your own ‘’avatar’’ by puting the real values
                    of yourself or your mindsets as you want.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">
                      ‘’There is no abstract art. You must always start with
                      something. Afterwatd you can remove all traces of
                      reality.’’ Pablo Picasso. Remove all the traces of yours
                      and show the real values.
                    </small>
                  </p>
                </div>
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
              <Footer></Footer>
            </Container>
          )}
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

export { WhatIsHeterometa };
