import ".././App.css";
import React, { useEffect, useState, useRef } from "react";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import FocusLock from "react-focus-lock";
import { theme } from "../theme";
import { ThemeProvider } from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";
import Footer from "./Footer";
import { Container, Row, Col } from "react-grid-system";

function Discover() {
  // -- Burger Menu -- \\
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const [isLoading, setLoading] = useState(true);

  useState(() => {
    setTimeout(function () {
      setLoading(false);
    }, 2000);
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
              <img id="loadingGif" src="loading.gif" />
            </div>
          ) : (
            <Container className="container">
              {/* Title */}
              <p className="titleText">Discover</p>
              <h1 class="jt --debug">
                <span class="jt__row">
                  <span class="jt__text">
                    {" "}
                    The latest updates from Andromeda and beyond, the HeteroMeta
                  </span>
                </span>
                <span class="jt__row jt__row--sibling" aria-hidden="true">
                  <span class="jt__text">
                    {" "}
                    The latest updates from Andromeda and beyond, the HeteroMeta
                  </span>
                </span>
                <span class="jt__row jt__row--sibling" aria-hidden="true">
                  <span class="jt__text">
                    {" "}
                    The latest updates from Andromeda and beyond, the HeteroMeta
                  </span>
                </span>
                <span class="jt__row jt__row--sibling" aria-hidden="true">
                  <span class="jt__text">
                    {" "}
                    The latest updates from Andromeda and beyond, the HeteroMeta
                  </span>
                </span>
              </h1>

              {/* 3 Cards */}
              <a className="carda" href="/discover/what-is-heterometa">
                <div class="card text-white bg-transparent mb-3">
                  <img
                    className="cardImage"
                    src="/loading.gif"
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title cardTitle">What is HeteroMeta?</h5>
                    <p class="card-text cardContent">
                      ‘’ the world was a beautiful place… ‘’ The HeteroMeta is a
                      metaverse of Andromeda that provides a universe to
                      ‘’create’’, ‘’share’’ and ‘’win’’ together. It aims to
                      reach the true value of the brands by sperating itself
                      from its phyisical existence and reset its habits. This is
                      a important process and we strongly believe that it is the
                      time that we reach the pieces of the HeteroMeta which are
                      technologies, ideas, science and philosophies we produced.
                      To do this we need to reset our habits and alter ourselfs
                      and surroundings to a new form via Eart 2.0. ‘’Earh 2.0’’
                      / ‘’ . ‘’ contains dimensias to take you to the HeteroMeta
                      which is a decentralized digital environment where
                      you/player can craft faces, gates, nft’s and show their
                      true values… It is cyristal clear that the power of
                      community can be an extrimly important part of this
                      industry.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">
                        It is a universe that created by these communities………..
                        joning, trading, compiting and shaped the future.
                      </small>
                    </p>
                  </div>
                </div>
              </a>
              <br></br>
              <div class="card text-white bg-transparent mb-3">
                <img
                  className="cardImage"
                  src="/loading.gif"
                  alt="Card image cap"
                ></img>
                <div class="card-body">
                  <h5 class="card-title cardTitle">Why HeteroMeta</h5>
                  <p class="card-text cardContent">
                    Note from the whitepaper, ‘’Why do we buy something? What is
                    it we need? Is it the function of the product? Maybe. But is
                    that the only factor? No. This is not the case today. In the
                    past, it was ahead of brands. Honestly, think about the last
                    thing you bought just for its function. So, why do we buy
                    something if we don't buy it just for its function? Of
                    course, it's not just because we like its look, design, and
                    feel, because we know it will get old. Everything that
                    affects us will fade in time. And even if we are meticulous
                    users, we also know that manufacturers will constantly
                    release new versions in order to be able to sell again, so
                    the product we buy will have to get old. Everything new is
                    old. For example, humanity buys an average of 1.5 billion
                    smartphones every year. Since not all of these people got
                    their first phone. Think of the huge smartphone junk created
                    by old phones. Spread that across all technology, even all
                    other industries. Think of the huge garbage that has formed,
                    and the damage to our world from the waste of energy and raw
                    materials spent on the production of a new one. Think of the
                    crises, the famine, the state of nature, and humanity in the
                    no-change scenario.’’ It is our duty to always think and
                    question the way we thouch to our world and its cycle.
                    Metaverse and HeteroMeta provides us to work with this
                    versitile virtual environment to alter ourself alough with
                    using blockchain as a foundation.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <br></br>
              <div class="card text-white bg-transparent mb-3">
                <img
                  className="cardImage"
                  src="/loading.gif"
                  alt="Card image cap"
                ></img>
                <div class="card-body">
                  <h5 class="card-title cardTitle">Design</h5>
                  <p class="card-text cardContent">
                    Note from the whitepaper, ‘’Why do we buy something? What is
                    it we need? Is it the function of the product? Maybe. But is
                    that the only factor? No. This is not the case today. In the
                    past, it was ahead of brands. Honestly, think about the last
                    thing you bought just for its function. So, why do we buy
                    something if we don't buy it just for its function? Of
                    course, it's not just because we like its look, design, and
                    feel, because we know it will get old. Everything that
                    affects us will fade in time. And even if we are meticulous
                    users, we also know that manufacturers will constantly
                    release new versions in order to be able to sell again, so
                    the product we buy will have to get old. Everything new is
                    old. For example, humanity buys an average of 1.5 billion
                    smartphones every year. Since not all of these people got
                    their first phone. Think of the huge smartphone junk created
                    by old phones. Spread that across all technology, even all
                    other industries. Think of the huge garbage that has formed,
                    and the damage to our world from the waste of energy and raw
                    materials spent on the production of a new one. Think of the
                    crises, the famine, the state of nature, and humanity in the
                    no-change scenario.’’ It is our duty to always think and
                    question the way we thouch to our world and its cycle.
                    Metaverse and HeteroMeta provides us to work with this
                    versitile virtual environment to alter ourself alough with
                    using blockchain as a foundation.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              {/* <div class="card text-white bg-dark mb-3">
                <br></br>
                <div class="card-body">
                  <h5 class="card-title">Design</h5>
                </div>
                <img
                  className="cardImage"
                  src="/loading.gif"
                  alt="Card image cap"
                ></img>
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
              </div> */}

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

export { Discover };
