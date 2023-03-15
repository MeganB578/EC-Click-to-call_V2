import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Img, Text, Button, Line, List, SelectBox } from "components";
import PropertyCard from "components/PropertyCard";
import PaginationCard from "components/PaginationCard";
import ReviewCard from "components/ReviewCard";
import LandingPageFooter from "components/LandingPageFooter";

const AgentProfilePage = () => {
  function handleNavigate() {
    window.location.href = "www.abc.com";
  }

  const propertyCardPropList = [
    { image: "images/img_image_260x384.png" },
    { image: "images/img_image_16.png" },
    { image: "images/img_image_17.png" },
    { image: "images/img_image_18.png" },
    { image: "images/img_image_19.png" },
    { image: "images/img_image_20.png" },
  ];

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[100px] sm:gap-[40px] md:gap-[40px] items-center justify-center mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col items-start justify-start w-[100%]">
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
          <div className="flex flex-col font-manrope md:px-[20px] relative w-[100%]">
            <div className="flex flex-1 items-center justify-start mx-[auto] w-[100%]">
              <Img
                src="images/img_coverimage_250x1440.png"
                className="h-[250px] sm:h-[auto] object-cover w-[100%]"
                alt="coverimage"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[58px] items-center justify-start mt-[-46px] mx-[auto] w-[100%] z-[1]">
              <div className="flex md:flex-col flex-row gap-[30px] items-end justify-start px-[140px] sm:px-[20px] md:px-[40px] w-[100%]">
                <Img
                  src="images/img_rectangle5599_150x150.png"
                  className="h-[150px] md:h-[auto] object-cover rounded-[10px] w-[150px]"
                  alt="rectangle5599"
                />
                <div className="flex flex-1 md:flex-col flex-row md:gap-[40px] gap-[60px] items-center justify-start w-[100%]">
                  <div className="flex flex-1 md:flex-col flex-row gap-[32px] items-start justify-start w-[100%]">
                    <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[25%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star_One"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star_Two"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star_Three"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          4.5 review
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_call_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="call"
                        />
                        <Text
                          className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                          variant="body3"
                        >
                          (123) 456-7890
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_mail_1.svg"
                          className="h-[24px] w-[24px]"
                          alt="mail"
                        />
                        <Text
                          className="font-semibold text-gray_900 text-left w-[auto]"
                          variant="body3"
                        >
                          bruno@relasto .com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gray_900 cursor-pointer font-semibold min-w-[112px] sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 w-[auto]">
                    Contact
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
                <div className="flex flex-col gap-[48px] items-center justify-center w-[100%]">
                  <div className="gap-[12px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-[100%]">
                    <Button className="bg-gray_900 cursor-pointer flex-1 font-semibold sm:px-[20px] px-[30px] py-[14px] rounded-[10px] text-[16px] text-center text-white_A700 w-[100%]">
                      For rent
                    </Button>
                    <Button className="border-[1px] border-gray_600 border-solid cursor-pointer flex-1 font-semibold sm:px-[20px] px-[30px] py-[14px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                      For sale
                    </Button>
                    <Button className="border-[1px] border-gray_600 border-solid cursor-pointer flex-1 font-semibold sm:px-[20px] px-[30px] py-[14px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                      About
                    </Button>
                    <Button className="border-[1px] border-gray_600 border-solid cursor-pointer flex-1 font-semibold sm:px-[20px] px-[30px] py-[14px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                      Review
                    </Button>
                  </div>
                  <div className="flex items-center justify-center w-[100%]">
                    <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                      {propertyCardPropList.map((props, index) => (
                        <React.Fragment key={`PropertyCard${index}`}>
                          <PropertyCard
                            className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]"
                            location="2861 62nd Ave, Oakland, CA 94605"
                            bedrooms="3 Bed Room"
                            bathrooms="1 Bath"
                            sqftCounter="1,032 sqft"
                            bath="Family"
                            view_Details="View Details"
                            price="$649,900"
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
          </div>
        </div>
        <div className="flex font-manrope items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-center justify-center max-w-[1200px] mx-[auto] p-[42px] md:px-[20px] rounded-[10px] w-[100%]">
            <div className="flex items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] gap-[65px] items-start justify-center w-[100%]">
                <div className="flex flex-1 flex-col gap-[57px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle5599_282x282.png"
                        className="h-[182px] md:h-[auto] object-cover rounded-[10px] w-[182px]"
                        alt="rectangle5616"
                      />
                      <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-[100%]">
                        <Text
                          className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Bruno Fernandes
                        </Text>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div className="flex flex-row items-center justify-evenly w-[31%]">
                            <Img
                              src="images/img_star_gray_900.svg"
                              className="h-[16px] w-[16px]"
                              alt="star_Five"
                            />
                            <Img
                              src="images/img_star_gray_900.svg"
                              className="h-[16px] w-[16px]"
                              alt="star_Six"
                            />
                            <Img
                              src="images/img_star_gray_900.svg"
                              className="h-[16px] w-[16px]"
                              alt="star_Seven"
                            />
                            <Img
                              src="images/img_star_gray_900.svg"
                              className="h-[16px] w-[16px]"
                              alt="star_Eight"
                            />
                            <Img
                              src="images/img_star_gray_600.svg"
                              className="h-[16px] w-[16px]"
                              alt="star_Nine"
                            />
                          </div>
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            4.5 review
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_call_gray_900.svg"
                            className="h-[24px] w-[24px]"
                            alt="call_One"
                          />
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body3"
                          >
                            (123) 456-7890
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_mail_1.svg"
                            className="h-[24px] w-[24px]"
                            alt="mail_One"
                          />
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            variant="body3"
                          >
                            bruno@relasto .com
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                      variant="body3"
                    >
                      <>
                        A slider is great way to display a slideshow featuring
                        images or videos, usually on your homepage.Adding
                        sliders to your site is no longer difficult. You don’t
                        have to know coding anymore. Just use a slider widget
                        and it will automatically insert the slider on your web
                        page.
                        <br />
                        One of the best ways to add beautiful sliders with
                        excellent responsiveness and advanced options.{" "}
                      </>
                    </Text>
                  </div>
                  <Button className="bg-gray_900 cursor-pointer font-semibold sm:min-w-[100%] min-w-[525px] py-[13px] rounded-[10px] text-[16px] text-center text-white_A700 w-[auto]">
                    Contact
                  </Button>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Experiences
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      15+ years experience
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Property Types
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Private House, Villa, Townhouse, Apartment
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Area
                    </Text>
                    <Text
                      className="font-semibold text-gray_900 text-left w-[auto]"
                      variant="body3"
                    >
                      California, San Jose, Miami
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Address
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      59 Orchard, NY 5005, US
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
                    <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                        variant="body1"
                      >
                        License No
                      </Text>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        BF-0535
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                        variant="body1"
                      >
                        Website
                      </Text>
                      <a
                        className="common-pointer font-semibold text-[18px] text-gray_600 text-left underline w-[auto]"
                        onClick={handleNavigate}
                      >
                        www.abc.com
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Social
                    </Text>
                    <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_clock_gray_600.svg"
                        className="h-[30px] w-[30px]"
                        alt="clock"
                      />
                      <Img
                        src="images/img_linkedin_gray_600.svg"
                        className="h-[30px] w-[30px]"
                        alt="linkedin"
                      />
                      <Img
                        src="images/img_twitter_gray_600.svg"
                        className="h-[30px] w-[30px]"
                        alt="twitter"
                      />
                      <Img
                        src="images/img_play.svg"
                        className="h-[30px] w-[30px]"
                        alt="play"
                      />
                      <Img
                        src="images/img_signal.svg"
                        className="h-[30px] w-[30px]"
                        alt="signal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-manrope items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start max-w-[1200px] mx-[auto] md:px-[20px] py-[30px] rounded-[10px] w-[100%]">
            <div className="flex items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[22px] items-center justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between sm:px-[20px] md:px-[40px] px-[42px] w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Clients Review
                    </Text>
                    <Button
                      className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[190px] px-[16px] py-[20px] rounded-[10px] w-[auto]"
                      rightIcon={
                        <Img
                          src="images/img_plus.svg"
                          className="mt-[1px] mb-[3px] ml-[10px]"
                          alt="plus"
                        />
                      }
                    >
                      <div className="font-bold text-[18px] text-left text-white_A700">
                        Write a Reveiw
                      </div>
                    </Button>
                  </div>
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-center sm:px-[20px] px-[25px] w-[100%]">
                  <List
                    className="flex-col gap-[25px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    {new Array(3).fill({}).map((props, index) => (
                      <React.Fragment key={`ReviewCard${index}`}>
                        <ReviewCard
                          className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-1 flex-col items-start justify-start sm:px-[20px] px-[30px] py-[39px] rounded-[20px] w-[100%]"
                          descriptionOne="Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. "
                          reviewCounterTwo="4.5 review"
                          date="02 June 2022"
                          taylorWilson="Taylor Wilson"
                          productManager="Product Manager - Static Mania"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                  <SelectBox
                    className="border-[1px] border-gray_600 border-solid font-semibold px-[18px] py-[16px] rounded-[10px] text-[16px] text-gray_900 text-left sm:w-[100%] w-[12%]"
                    placeholderClassName="text-gray_900"
                    name="buttonmedium"
                    placeholder="See more"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_900.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
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

export default AgentProfilePage;
