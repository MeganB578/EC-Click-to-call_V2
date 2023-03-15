import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text, Input, Img, Button, Line } from "components";
import LandingPageFooter from "components/LandingPageFooter";

const ContactPagePage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
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
            <div className="flex flex-col gap-[44px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
              <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                <Text
                  className="text-center text-gray_900 tracking-[-1.08px] w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Get in touch
                </Text>
                <Text
                  className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[1200px] not-italic text-center text-gray_600"
                  variant="body3"
                >
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble.
                </Text>
              </div>
              <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex md:flex-col flex-row gap-[50px] items-start justify-start p-[50px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                <div className="flex flex-1 flex-col gap-[40px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Send a message
                    </Text>
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Input
                        wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex px-[16px] py-[14px] rounded-[10px] w-[100%]"
                        className="font-semibold p-[0] placeholder:text-gray_600 text-[18px] text-gray_600 text-left w-[100%]"
                        type="text"
                        name="textfieldlarge"
                        placeholder="Full Name"
                        prefix={
                          <Img
                            src="images/img_user.svg"
                            className="mt-[auto] mb-[1px] mr-[14px]"
                            alt="user"
                          />
                        }
                      ></Input>
                      <Input
                        wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex px-[16px] py-[14px] rounded-[10px] w-[100%]"
                        className="font-semibold p-[0] placeholder:text-gray_600 text-[18px] text-gray_600 text-left w-[100%]"
                        type="email"
                        name="textfieldlarge_One"
                        placeholder="Email Address"
                        prefix={
                          <Img
                            src="images/img_mail.svg"
                            className="mt-[auto] mb-[1px] mr-[14px]"
                            alt="mail"
                          />
                        }
                      ></Input>
                      <Input
                        wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex px-[16px] py-[14px] rounded-[10px] w-[100%]"
                        className="font-semibold p-[0] placeholder:text-gray_600 text-[18px] text-gray_600 text-left w-[100%]"
                        type="number"
                        name="textfieldlarge_Two"
                        placeholder="Phone Number"
                        prefix={
                          <Img
                            src="images/img_call_gray_600.svg"
                            className="mt-[auto] mb-[1px] mr-[14px]"
                            alt="call"
                          />
                        }
                      ></Input>
                      <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex h-[152px] md:h-[auto] items-start justify-start px-[19px] py-[14px] rounded-[10px] w-[100%]">
                        <Text
                          className="font-semibold text-gray_600 text-left w-[auto]"
                          variant="body3"
                        >
                          Message
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gray_900 cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[20px] rounded-[10px] text-[16px] text-center text-white_A700 w-[100%]">
                    Send Request
                  </Button>
                </div>
                <Line className="bg-bluegray_100 md:h-[1px] h-[534px] md:w-[100%] w-[1px]" />
                <div className="flex flex-1 flex-col gap-[40px] items-start justify-center w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                        variant="body1"
                      >
                        Office Address
                      </Text>
                      <Text
                        className="font-semibold leading-[180.00%] text-gray_600 text-left"
                        variant="body3"
                      >
                        <>
                          1421 San Pedro St, Los Angeles, <br />
                          CA 90015
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_call_gray_600.svg"
                          className="h-[24px] w-[24px]"
                          alt="call_One"
                        />
                        <Text
                          className="flex-1 font-semibold text-gray_600 text-left w-[auto]"
                          variant="body3"
                        >
                          (123) 456-7890
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_mail.svg"
                          className="h-[24px] w-[24px]"
                          alt="mail_One"
                        />
                        <Text
                          className="flex-1 font-semibold text-gray_600 text-left w-[auto]"
                          variant="body3"
                        >
                          info@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[100%] sm:w-[100%]">
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

export default ContactPagePage;
