import React, { useEffect, useState, useRef } from "react";
import "./Footer.css";

import {
  FaHeart,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaDiscord,
  FaTwitch,
  FaTelegram,
} from "react-icons/fa";

const FooterPage = () => {
  useEffect(() => {
    console.clear();
    /* Js */
    let aphorisms = [
      "That which yields",
      "is not always weak.",
      "If you want something done,",
      "do it yourself!",
      "Never trust a computer you can't throw out a window.",
    ];

    let data = {
      aphorisms: aphorisms,
    };

    function BlipText(
      el,
      copyArray,
      flickerSpeed = 50,
      holdDelay = 2000,
      noise = "-*.°"
    ) {
      this.contentArray = copyArray;
      this.contentCount = 0;
      this.charCount = 0;
      this.domElement = el;
      this.flickerSpeed = flickerSpeed;
      this.holdDelay = holdDelay;
      this.noise = noise.split("");
      this.noiseCount = 0;
      this.compose(this.contentArray[this.contentCount++]);
    }
    BlipText.prototype.compose = function (txt) {
      this.noiseCount = 0;
      this.charCount = 0;
      this.flickerUp(txt);
    };
    BlipText.prototype.decompose = function () {
      this.noiseCount = 0;
      this.charCount = 0;
      this.flickerDown();
    };
    BlipText.prototype.flickerUp = function (txt) {
      let t = txt.substr(0, this.charCount);
      this.domElement.textContent = t + this.noise[this.noiseCount++];
      if (this.noiseCount < this.noise.length) {
        setTimeout(() => this.flickerUp(txt), this.flickerSpeed);
      } else if (this.charCount++ < txt.length - 1) {
        this.noiseCount = 0;
        setTimeout(() => this.flickerUp(txt), this.flickerSpeed);
      } else {
        this.domElement.textContent = txt;
        setTimeout(() => this.decompose(), this.holdDelay);
      }
    };
    BlipText.prototype.flickerDown = function () {
      let t = this.domElement.textContent.slice(0, -1);
      this.domElement.textContent = t + this.noise[this.noiseCount++];
      if (this.noiseCount < this.noise.length) {
        setTimeout(() => this.flickerDown(), this.flickerSpeed);
      } else if (t.length > 0) {
        this.noiseCount = 0;
        this.domElement.textContent = this.domElement.textContent.slice(0, -1);
        setTimeout(() => this.flickerDown(), this.flickerSpeed);
      } else {
        this.domElement.textContent = "";
        this.compose(this.contentArray[this.contentCount++]);
        if (this.contentCount >= this.contentArray.length) {
          this.contentCount = 0;
        }
      }
    };

    let blipTargets = [...document.querySelectorAll(".blip-text")];
    for (let i = 0; i < blipTargets.length; i++) {
      let dataSet = blipTargets[i].dataset;
      let blipper = new BlipText(
        blipTargets[i],
        data[dataSet.src],
        Number(dataSet.flicker),
        Number(dataSet.hold),
        dataSet.noise
      );
    }

    /* ---------------------------------- */
  }, []);

  return (
    <div>
      <footer class="site-footer">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div className="disclaimerContent">
              <h6>DISCLAIMER</h6>
              <p class="text-justify">
                No Investment Advice The information provided on this website
                does not constitute investment advice, financial advice, trading
                advice, or any other sort of advice and you should not treat any
                of the website's content as such. <i>HeteroMeta</i> does not
                recommend that any cryptocurrency should be bought, sold, or
                held by you. Do conduct your own due diligence and consult your
                financial advisor before making any investment decisions
              </p>
            </div>
          </div>
          <div class="col-xs-6 col-md-2">
            <br></br>
          </div>

          <div class="col-xs-6 col-md-2">
            <br></br>
            <ul class="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">
                  <h5>JOURNEY</h5>
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  <h5>EARTH 2.0</h5>
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  <h5>CONTACT</h5>
                </a>
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-2">
            <br></br>
            <ul class="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">
                  {" "}
                  <h5>PARTNERS</h5>
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  <h5>TEAM</h5>
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  <h5>CATEGOREIS</h5>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div class="row">
          <div class="col-sm-4">
            <p
              class="blip-text"
              data-src="aphorisms"
              data-flicker="10"
              data-hold="1200"
              data-noise="-.*°"
            ></p>
          </div>
          <div class="col-sm-6">
            <div className="termsFaqPrivacy">
              <a>
                <h7>Terms of Conditions</h7>
              </a>
              <a>
                <h7> Privacy </h7>
              </a>
              <a>
                <h7> FAQ </h7>
              </a>
              <a>
                <h7> LICENSE </h7>
              </a>
              <a>
                <h7> NFT PURCHASE AGREEMENT </h7>
              </a>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="flex-center">
              <a href="#">
                <i class="fa fa-discord fa-1x icon-3d"></i>{" "}
              </a>
              <a href="#">
                <i class="fa fa-twitter fa-1x icon-3d"></i>
              </a>

              <a href="#">
                {" "}
                <i class="fa fa-instagram fa-1x icon-3d"></i>{" "}
              </a>
              <a href="#">
                {" "}
                <i class="fa fa-facebook fa-1x icon-3d"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>

    // <div className="footerContainer">
    //   <Container>
    //     <Row>
    //       <Col sm={5}>
    //         <div class="wrapper">
    //           <p
    //             class="blip-text"
    //             data-src="aphorisms"
    //             data-flicker="10"
    //             data-hold="1200"
    //             data-noise="-.*°"
    //           ></p>
    //         </div>
    //       </Col>
    //       <Col sm={1}>
    //       </Col>
    //       <Col sm={6}>
    //         <div class="social-menu">
    //           <ul>
    //             <li>
    //               <a href="">
    //               <i class="fa"><FaFacebook></FaFacebook></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="">
    //                 <i class="fa fa-twitter"><FaTwitter></FaTwitter></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="">
    //                 <i class="fa fa-instagram"><FaInstagram></FaInstagram></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="">
    //                 <i class="fa fa-youtube"><FaYoutube></FaYoutube></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="">
    //                 <i class="fa fa-linkedin"><FaLinkedin></FaLinkedin></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="">
    //                 <i class="fa fa-discord"><FaDiscord></FaDiscord></i>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </Col>

    //     </Row>
    //   </Container>
    // </div>
  );
};

export default FooterPage;
