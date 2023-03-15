import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text, Input, Img, SelectBox } from "components";
import BlogPageColumnactive from "components/BlogPageColumnactive";
import PaginationCard from "components/PaginationCard";
import LandingPageFooter from "components/LandingPageFooter";

const BlogPagePage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col md:gap-[40px] gap-[68px] items-center justify-start w-[100%]">
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
          <div className="flex font-manrope items-center justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
              <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Real Estate News & Blogs
                </Text>
                <div className="gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-[100%]">
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-1 items-center justify-start px-[16px] py-[14px] rounded-[10px] w-[100%]">
                    <Input
                      wrapClassName="flex w-[100%]"
                      className="font-semibold p-[0] placeholder:text-gray_600 text-[18px] text-gray_600 text-left w-[100%]"
                      name="frame1000001653"
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
                    className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex-1 font-bold px-[16px] py-[18px] rounded-[10px] text-[18px] text-gray_600 text-left w-[100%]"
                    placeholderClassName="text-gray_600"
                    name="dropdownlarge"
                    placeholder="Category"
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
                  <SelectBox
                    className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex-1 font-bold px-[16px] py-[18px] rounded-[10px] text-[18px] text-gray_600 text-left w-[100%]"
                    placeholderClassName="text-gray_600"
                    name="dropdownlarge_One"
                    placeholder="Popular"
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
                </div>
              </div>
              <div className="flex items-center justify-center w-[100%]">
                <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                  {new Array(9).fill({}).map((props, index) => (
                    <React.Fragment key={`BlogPageColumnactive${index}`}>
                      <BlogPageColumnactive
                        className="flex flex-1 flex-col items-start justify-start w-[100%]"
                        business="Business"
                        delightfuldin_One="10 Delightful Dining Room Decor Trends for Spring"
                        july202022="July 20, 2022"
                        time="7 min read"
                        active="Continue Reading"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <PaginationCard className="flex flex-row items-center justify-between w-[100%]" />
            </div>
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

export default BlogPagePage;
