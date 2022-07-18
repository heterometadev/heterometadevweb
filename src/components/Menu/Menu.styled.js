import styled from "styled-components";

export const StyledMenu = styled.nav`
  position: fixed;
  /* padding-top: 10%;
  padding-left: 20%; */
  background: rgb(255, 99, 71);
  background: linear-gradient(
    145deg,
    rgba(255, 99, 71, 1) 0%,
    rgba(125, 49, 36, 1) 4%,
    rgba(34, 14, 11, 1) 40%,
    rgba(10, 4, 4, 1) 51%,
    rgba(0, 0, 0, 1) 64%,
    rgba(0, 0, 0, 1) 80%
  );
  /* background: rgb(131,122,72);
background: linear-gradient(135deg, rgba(131,122,72,1) 0%, rgba(97,89,56,1) 5%, rgba(65,50,2,1) 19%, rgba(23,18,1,1) 32%, rgba(22,20,23,1) 51%); */
  /* background: ${({ theme }) => theme.menuBackground}; */
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: ${({ open }) =>
    open
      ? "translateX(0) translateY(0)"
      : "translateX(-100%) translateY(-100%)"};
  /* display: ${({ open }) => (open ? "flex" : "none")}; */
  /* height: 111vh; */
  height: 100%;
  width: 100%;
  /* padding: 3rem; */
  /* width: 100%; */
  top: 0;
  left: 0;
  transition: opacity 1.5s, visibility 1.5s;
  /* font-family: 'Staatliches', sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: 24px; */
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px !important;
  }

  .aMenu {
    color: white;
    text-decoration: none;
    font-size: 32px;
    width: 20px;
    &:hover {
      color: blue;
    }
  }
  @media (min-width: 768px) {
    font-size: 12px;
  }

  .ContainerMenu {
    position: fixed;
    padding-top: 7%;
    height: 70%;
  }

  .rightBottomContainer {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2rem;
  }
  .rightBottomText {
    color: grey;
    font-size: 18px !important;

    @media (max-width: 568px) {
      font-size: 12px !important;
    }
  }
  .leftBottomContainer {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2rem;
  }
  .leftBottomText {
    color: grey;
    font-size: 18px !important;
  }
  /* Text */

  .blip-text {
    font-size: 1rem;
    font-weight: normal;
    color: grey;
    position: absolute;
    transform: translateY(-50%);
    font-family: Helvetica;
  }
  /* General */
  .exploreNow {
    text-align: right;
    align-items: flex-end;
  }

  .menuTitle {
    padding: 3rem;
    list-style-type: none;
    color: white;
    font-size: 32px;
  }
`;
