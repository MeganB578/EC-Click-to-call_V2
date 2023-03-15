import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text, Input, Img, SelectBox, Button } from "components";
import AgentCard from "components/AgentCard";
import PaginationCard from "components/PaginationCard";
import LandingPageFooter from "components/LandingPageFooter";

const AgentListPage = () => {
  const agentCardPropList = [
    { rectangle5615: "images/img_rectangle5615_282x282.png" },
    { rectangle5615: "images/img_rectangle5616_282x282.png" },
    { rectangle5615: "images/img_rectangle5614_282x282.png" },
    { rectangle5615: "images/img_rectangle5614_1.png" },
    { rectangle5615: "images/img_rectangle5617_282x282.png" },
    { rectangle5615: "images/img_rectangle5618_282x282.png" },
    { rectangle5615: "images/img_rectangle5619_282x282.png" },
    { rectangle5615: "images/img_rectangle5620_282x282.png" },
    { rectangle5615: "images/img_rectangle5621_282x282.png" },
    { rectangle5615: "images/img_rectangle5622_282x282.png" },
    { rectangle5615: "images/img_rectangle5623_282x282.png" },
    { rectangle5615: "images/img_rectangle5615_1.png" },
  ];

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col gap-[56px] items-start justify-start w-[100%]">
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
          <div className="flex font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
              <Text
                className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                as="h3"
                variant="h3"
              >
                Some Nearby Good Agents
              </Text>
              <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-1 items-start justify-start px-[16px] py-[14px] rounded-[10px] w-[100%]">
                  <Input
                    wrapClassName="flex w-[100%]"
                    className="font-semibold p-[0] placeholder:text-gray_600 text-[18px] text-gray_600 text-left w-[100%]"
                    name="frame1000001612"
                    placeholder="Enter your address"
                    suffix={
                      <Img
                        src="images/img_search_1.svg"
                        className="mt-[auto] mb-[3px] ml-[12px]"
                        alt="search"
                      />
                    }
                  ></Input>
                </div>
                <SelectBox
                  className="bg-white_A700 border-[1px] border-bluegray_100 border-solid md:flex-1 font-bold pl-[20px] pr-[16px] py-[18px] rounded-[10px] text-[18px] text-gray_600 text-left md:w-[100%] w-[12%]"
                  placeholderClassName="text-gray_600"
                  name="dropdownlarge"
                  placeholder="Review"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_600.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Button
                  className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[128px] pl-[20px] pr-[16px] py-[20px] rounded-[10px] w-[auto]"
                  rightIcon={
                    <Img
                      src="images/img_search_70X70.svg"
                      className="mt-[1px] mb-[3px] ml-[10px]"
                      alt="search"
                    />
                  }
                >
                  <div className="font-bold text-[18px] text-left text-white_A700">
                    Search
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-manrope md:gap-[40px] gap-[60px] items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
              <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                {agentCardPropList.map((props, index) => (
                  <React.Fragment key={`AgentCard${index}`}>
                    <AgentCard
                      className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]"
                      brunoFernandes="Bruno Fernandes"
                      reviewCounter="4.5 review"
                      viewprofile="View Profile"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <PaginationCard className="flex flex-row flex-wrap items-center justify-between max-w-[1200px] mx-[auto] w-[100%]" />
          </div>
        </div>
        <LandingPageFooter
          className="bg-white_A700 flex items-center justify-center px-[120px] md:px-[20px] py-[80px] w-[100%]"
          relasto_One="Relasto"
          description_Two={
            <>
              59 Bervely Hill Ave, Brooklyn Town,
              <br />
              New York, NY 5630, CA, US
            </>
          }
          _6035550123="+(123) 456-7890"
          email="info@mail.com"
          features="Features"
          homev1HomevTwo="Home v1"
          homev1HomevTwo_One="Home v2"
          homev1HomevTwo_Two="About"
          homev1HomevTwo_Three="Contact"
          homev1HomevTwo_Four="Search"
          informations="Information"
          homev1HomevTwo_Five="Listing v1"
          homev1HomevTwo_Six="Listing v2"
          homev1HomevTwo_Seven="Property Details"
          homev1HomevTwo_Eight="Agent List"
          homev1HomevTwo_Nine="Agent Profile"
          language_Two="Documentation "
          homev1HomevTwo_Ten="Blog"
          homev1HomevTwo_Eleven="FAQ"
          homev1HomevTwo_Twelve="Privacy Policy"
          homev1HomevTwo_Thirteen="License"
          others="Others"
          homev1HomevTwo_Fourteen="Log in"
          homev1HomevTwo_Fifteen="Enter OTP"
          homev1HomevTwo_Sixteen="New Password"
          homev1HomevTwo_Seventeen="Reset Password"
          homev1HomevTwo_Eighteen="Create Account"
          staticmania2022="© 2022. All rights reserved."
        />
      </div>
    </>
  );
};

export default AgentListPage;
