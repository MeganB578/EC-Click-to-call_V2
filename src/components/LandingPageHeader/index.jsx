import React from "react";

import { Img, Text, List, Button } from "components";
import { useNavigate } from "react-router-dom";
import LogInModal from "modals/LogIn";

const LandingPageHeader = (props) => {
  const navigate = useNavigate();
  const [isOpenLogInModal, setLogInModal] = React.useState(false);

  function handleOpenLogInModal() {
    setLogInModal(true);
  }
  function handleCloseLogInModal() {
    setLogInModal(false);
  }

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
          <div className="header-row my-[1px]">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              <Img
                src="images/img_home.svg"
                className="h-[40px] w-[40px]"
                alt="home"
              />
              <Text
                className="font-markoone font-normal not-italic text-left text-orange_A700 w-[auto]"
                variant="body1"
              >
                {props?.relasto}
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between sm:w-[100%] w-[492px] common-row-list">
            <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
              <List
                className="sm:flex-col flex-row gap-[40px] grid grid-cols-3"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-[6px] items-start justify-start w-[77px]">
                  <a
                    className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left w-[auto]"
                    href="javascript:"
                  >
                    {props?.home}
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_600_1.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[6px] items-start justify-start w-[77px]">
                  <a
                    className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left w-[auto]"
                    href="javascript:"
                  >
                    {props?.listing}
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_600_1.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[6px] items-start justify-start w-[77px]">
                  <a
                    className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left w-[auto]"
                    href="javascript:"
                  >
                    {props?.agents}
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_600_1.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown"
                  />
                </div>
              </List>
            </li>
            <li className="mt-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="common-pointer cursor-pointer font-manrope font-semibold text-[16px] text-center text-gray_900"
                onClick={() => navigate("/listing")}
              >
                {props?.language}
              </a>
            </li>
            <li className="mt-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="common-pointer cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                onClick={() => navigate("/blogpage")}
              >
                {props?.otherspages}
              </a>
            </li>
          </ul>
          <div className="flex flex-row gap-[40px] h-[42px] md:h-[auto] sm:hidden items-center justify-start w-[300px]">
            <Button
              className="bg-transparent cursor-pointer flex items-center justify-center min-w-[94px] w-[auto]"
              leftIcon={
                <Img
                  src="images/img_search.svg"
                  className="mb-[1px] mr-[8px]"
                  alt="search"
                />
              }
            >
              <div className="font-bold font-manrope text-[18px] text-gray_900 text-left">
                {props?.search}
              </div>
            </Button>
            <Button
              className="common-pointer cursor-pointer font-manrope font-semibold sm:px-[20px] px-[24px] py-[13px] rounded-[10px] text-[20px] text-center text-gray_900 w-[100%]"
              onClick={handleOpenLogInModal}
            >
              <img src="/images/IlyaB.jpg" className="rounded-full w-[32px] h-[32px] inline mr-[12px]"></img>
              {props?.log_In}
            </Button>
          </div>
        </div>
      </header>
      {isOpenLogInModal ? (
        <LogInModal
          isOpen={isOpenLogInModal}
          onRequestClose={handleCloseLogInModal}
        />
      ) : null}
    </>
  );
};

LandingPageHeader.defaultProps = {
  relasto: "Relasto",
  home: "Home",
  listing: "Listing",
  agents: "Agents",
  language: "Property ",
  otherspages: "Blog",
  search: "Search",
  log_In: "Log in",
};

export default LandingPageHeader;
