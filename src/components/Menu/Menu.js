import React, { useEffect, useState, useRef, useMemo } from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ThemeProvider } from "styled-components";
import {
  OrbitControls,
  Stars,
  Text,
  TrackballControls,
  Html,
  Float,
  PerspectiveCamera,
  Text3D,
} from "@react-three/drei";
import * as THREE from "three";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      // maxAzimuthAngle={Math.PI / 2}
      maxPolarAngle={Math.PI}
      // minAzimuthAngle={-Math.PI / 2}
      // maxZoom={10}
      // minZoom={100}
      enablePan={false}
      // minPolarAngle={0}
    />
  );
};

const Menu = ({ open, ...props }) => {
  let navigate = useNavigate();

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  function Word({ children, ...props }) {
    const color = new THREE.Color();
    const fontProps = {
      font: "/fonts/Andromeda-eR2n.ttf",
      fontSize: 2.2,
      letterSpacing: -0.05,
      lineHeight: 2,
      "material-toneMapped": false,
    };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);
    // Change the mouse cursor on hover
    useEffect(() => {
      if (hovered) document.body.style.cursor = "pointer";
      return () => (document.body.style.cursor = "auto");
    }, [hovered]);
    // Tie component to the render-loop
    useFrame(({ camera }) => {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion);
      // Animate font color
      ref.current.material.color.lerp(
        color.set(hovered ? "#fa2720" : "white"),
        0.1
      );
    });

    function handleNavigate() {
      console.log(children);
      // if (children == "Experiement") navigate("../");
      if (children == "Discover") navigate("../discover");
      // if (children == "Partners") navigate("../partners");
      // if (children == "Team") navigate("../team");
      // if (children == "Contact") navigate("../contact");
      if (children == "Whitepaper") {
        window.location.replace("https://heterometa-whitepaper.web.app");
        // React.useEffect(() => {
        //   window.location.replace('https://heterometa-whitepaper.web.app')
        // }, [])
      }
    }

    return (
      // <Float floatIntensity={3} speed={2}>
      //    </Float>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        {...props}
        {...fontProps}
        children={children}
        onClick={handleNavigate}
      ></Text>
    );
  }

  function Cloud({ count = 4, radius = 20 }) {
    useFrame(() => {});

    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
      const temp = [];
      const spherical = new THREE.Spherical();
      const phiSpan = Math.PI / (count + 1);
      const thetaSpan = (Math.PI * 2) / count;
      temp.push([
        new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * 1, thetaSpan * 0)
        ),
        "Experiement",
      ]);
      temp.push([
        new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * 1, thetaSpan * 1)
        ),
        "Discover",
        "news",
      ]);
      temp.push([
        new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * 1, thetaSpan * 2)
        ),
        "Team",
      ]);
      temp.push([
        new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * 2, thetaSpan * 3)
        ),
        "Whitepaper",
      ]);
      temp.push([
        new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * 2, thetaSpan * 4)
        ),
        "Partners",
      ]);
      temp.push([
        new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * 2, thetaSpan * 5)
        ),
        "Contact",
      ]);
      // for (let i = 1; i < count + 1; i++)
      //   // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      //   for (let j = 0; j < count; j++)
      //     temp.push([
      //       new THREE.Vector3().setFromSpherical(
      //         spherical.set(radius, phiSpan * i, thetaSpan * j)
      //       ),
      //       "heterometa",
      //     ]);
      return temp;
    }, [count, radius]);
    return words.map(([pos, word], index) => (
      <Word key={index} position={pos} children={word} />
    ));
  }

  return (
    <>
      <BrowserView>
        <div>
          <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <div className="rightBottomContainer">
              <h1 className="rightBottomText">
                -Use your mouse for look around
              </h1>
            </div>
            <div className="leftBottomContainer">
              {/* <h1 className="leftBottomText">-Use mouse for look around</h1> */}
            </div>
            {/* camera={{ fov: 70, position: [-30, 30, 20] }} */}
            <Canvas camera={{ fov: 70, position: [-42, 30, 20] }}>
              {/* <OrbitControls  /> */}
              <CameraControls />
              <Stars factor={2} />
              <ambientLight intensity={0.5} />
              <spotLight position={[20, 20, 20]} angle={1} />

              {/* <MenuItemThree />
            <MenuItemThree /> */}
              {/* <Text color="white" fov={60} position={[120, 145, 120]} fontSize={55}>
              hello world!
            </Text> */}
              <fog attach="fog" args={["#202025", 20, 100]} />
              <Cloud count={3} radius={22} anchorX="center" anchorY="middle" />
              {/* <TrackballControls /> */}
            </Canvas>
          </StyledMenu>
        </div>
      </BrowserView>
      <MobileView>
        <div>
          <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <div class="menuInfoMobile">
              <p className="menuInfoMobileText">
                {" "}
                -Use your mouse to look around
              </p>
            </div>
            {/* camera={{ fov: 70, position: [-30, 30, 20] }} */}
            <Canvas camera={{ fov: 70, position: [-50, 30, 20] }}>
              {/* <OrbitControls  /> */}
              <CameraControls />
              <Stars factor={2} />
              <ambientLight intensity={0.5} />
              <spotLight position={[20, 20, 20]} angle={1} />

              {/* <MenuItemThree />
            <MenuItemThree /> */}
              {/* <Text color="white" fov={60} position={[120, 145, 120]} fontSize={55}>
              hello world!
            </Text> */}
              <fog attach="fog" args={["#202025", 0, 100]} />
              <Cloud count={3} radius={20} anchorX="center" anchorY="middle" />
              {/* <TrackballControls /> */}
            </Canvas>
          </StyledMenu>
        </div>
      </MobileView>
    </>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
