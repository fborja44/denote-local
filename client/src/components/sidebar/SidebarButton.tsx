/* Searchbar Button Component
------------------------------------------------------------------------------*/
// React imports
import * as React from "react";
import { Link } from "react-router-dom";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

const ButtonItem = styled.li`
  width: 100%;
  height: 45px;
  font-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  user-drag: none;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 45px;
    height: 45px;
    position: absolute;
  }

  &:hover {
    background-color: ${(props) => props.theme.sidebar.backgroundSecondary};
    transition: background-color 0.2s ease-out 0s;
  }

  &:hover .nav-button {
    cursor: pointer;
    border-left: solid 2px white;
    transition: all 0.2s ease 0s;
  }
`;

const NavButton = styled.div`
  width: 45px;
  height: 45px;
  position: absolute;
  border-left: solid 2px ${(props) => props.theme.sidebar.background};
  user-drag: none;
`;

export interface SidebarButtonProps {
  title: string;
  route: string;
  selectedTab: string;
  setSelectedTab: (value: React.SetStateAction<string>) => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  title,
  route,
  children,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <ButtonItem>
      <Link to={route} onClick={() => setSelectedTab(route)} title={title}>
        <NavButton
          id={route}
          css={css`
            border-left: ${selectedTab === route
              ? "solid 2px white !important"
              : "none"};
          `}
        />
        {children}
      </Link>
    </ButtonItem>
  );
};

export default SidebarButton;
