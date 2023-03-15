import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[116px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <LandingPageHeader
          className="bg-white_A700 flex h-[80px] md:h-[auto] items-center justify-between px-[120px] md:px-[20px] py-[19px] w-[100%]"
          relasto="Relasto"
          home="Home"
          listing="Listing"
          agents="Agents"
          language="Property "
          otherspages="Blog"
          search="Search"
          log_In="Log in"
        />
        <div className="flex flex-col font-manrope gap-[30px] items-center justify-start md:px-[20px] self-stretch sm:w-[100%] w-[auto]">
          <Img
            src="images/img_frame1000001686.svg"
            className="h-[480px] w-[464px]"
            alt="frame1000001686"
          />
          <div className="flex flex-col gap-[24px] items-center justify-start self-stretch w-[auto]">
            <Text
              className="text-center text-gray_900 tracking-[-0.56px] w-[auto]"
              as="h4"
              variant="h4"
            >
              Something wrong!
            </Text>
            <Button
              className="common-pointer border-[1px] border-gray_600 border-solid cursor-pointer flex items-center justify-center min-w-[157px] px-[16px] py-[20px] rounded-[10px] w-[auto]"
              onClick={() => navigate("/")}
              rightIcon={
                <Img
                  src="images/img_arrowright_16X16.svg"
                  className="mb-[5px] ml-[10px]"
                  alt="arrow_right"
                />
              }
            >
              <div className="font-bold text-[18px] text-gray_900 text-left">
                Homepage
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
