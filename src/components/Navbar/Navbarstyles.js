import { Link } from "react-router-dom";
import styled from "styled-components";

export const Bar = styled.section`
  position: sticky;
  background: white;
  width: 100%;
  height: 60px;
  box-shadow: 0px 5px 14px -3px rgba(0, 0, 0, 1);
  display: flex;
  justify-content: space-between;
  background-color: yellow;
`;
export const Homelink = styled(Link)`
  font-weight: bold;
  font-size: 40px;
  color: #338cf6;
  margin-left: 140px;
  cursor: pointer;
`;
export const OptionsCont = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding-right: 80px; */
`;
export const PagesLinks = styled(Link)`
  font-size: 25px;
  color: black;
  margin-left: 40px;
  margin-top: 12px;
  cursor: pointer;

  :hover {
    color: #338cf6;
  }
`;
