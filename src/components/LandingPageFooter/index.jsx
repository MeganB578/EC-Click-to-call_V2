import React from "react";

import { Img, Text } from "components";

const LandingPageFooter = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[120px] md:gap-[40px] items-start justify-start w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[43px] items-start justify-start w-[341px]">
              <div className="flex flex-row gap-[11px] h-[40px] md:h-[auto] items-center justify-start w-[341px]">
                <Img
                  src="images/img_home.svg"
                  className="h-[40px] w-[40px]"
                  alt="home_One"
                />
                <Text
                  className="font-markoone font-normal not-italic text-left text-orange_A700 w-[auto]"
                  variant="body1"
                >
                  {props?.relasto_One}
                </Text>
              </div>
              <div className="flex flex-col gap-[28px] h-[194px] md:h-[auto] items-start justify-start w-[100%]">
                <Text
                  className="font-manrope font-semibold leading-[160.00%] text-gray_900 text-left"
                  variant="body4"
                >
                  {props?.description_Two}
                </Text>
                <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    {props?._6035550123}
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    {props?.email}
                  </Text>
                </div>
                <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <Img
                      src="images/img_plus_orange_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="plus"
                    />
                  </div>
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <Img
                      src="images/img_twitter_orange_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="twitter"
                    />
                  </div>
                  <Img
                    src="images/img_instagram_orange_a700.svg"
                    className="h-[30px] w-[30px]"
                    alt="instagram"
                  />
                  <Img
                    src="images/img_linkedin.svg"
                    className="h-[30px] w-[30px]"
                    alt="linkedin"
                  />
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <Img
                      src="images/img_clock_orange_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="clock"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-[40px] gap-[77px] items-start justify-start w-[100%]">
              <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-[auto]"
                  variant="body3"
                >
                  {props?.features}
                </Text>
                <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-manrope font-semibold text-gray_900 text-left"
                      variant="body4"
                    >
                      {props?.homev1HomevTwo}
                    </Text>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_One}
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Two}
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Three}
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Four}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-[auto]"
                  variant="body3"
                >
                  {props?.informations}
                </Text>
                <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-manrope font-semibold text-gray_900 text-left"
                      variant="body4"
                    >
                      {props?.homev1HomevTwo_Five}
                    </Text>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Six}
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Seven}
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Eight}
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Nine}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-[auto]"
                  variant="body3"
                >
                  {props?.language_Two}
                </Text>
                <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-manrope font-semibold text-gray_900 text-left"
                      variant="body4"
                    >
                      {props?.homev1HomevTwo_Ten}
                    </Text>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Eleven}
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Twelve}
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Thirteen}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-[auto]"
                  variant="body3"
                >
                  {props?.others}
                </Text>
                <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-manrope font-semibold text-gray_900 text-left"
                      variant="body4"
                    >
                      {props?.homev1HomevTwo_Fourteen}
                    </Text>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Fifteen}
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Sixteen}
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Seventeen}
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      {props?.homev1HomevTwo_Eighteen}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Text
            className="font-manrope font-semibold text-gray_900 text-left w-[auto]"
            variant="body4"
          >
            {props?.staticmania2022}
          </Text>
        </div>
      </footer>
    </>
  );
};

LandingPageFooter.defaultProps = {
  relasto_One: "Relasto",
  description_Two: (
    <>
      59 Bervely Hill Ave, Brooklyn Town,
      <br />
      New York, NY 5630, CA, US
    </>
  ),
  _6035550123: "+(123) 456-7890",
  email: "info@mail.com",
  features: "Features",
  homev1HomevTwo: "Home v1",
  homev1HomevTwo_One: "Home v2",
  homev1HomevTwo_Two: "About",
  homev1HomevTwo_Three: "Contact",
  homev1HomevTwo_Four: "Search",
  informations: "Information",
  homev1HomevTwo_Five: "Listing v1",
  homev1HomevTwo_Six: "Listing v2",
  homev1HomevTwo_Seven: "Property Details",
  homev1HomevTwo_Eight: "Agent List",
  homev1HomevTwo_Nine: "Agent Profile",
  language_Two: "Documentation ",
  homev1HomevTwo_Ten: "Blog",
  homev1HomevTwo_Eleven: "FAQ",
  homev1HomevTwo_Twelve: "Privacy Policy",
  homev1HomevTwo_Thirteen: "License",
  others: "Others",
  homev1HomevTwo_Fourteen: "Log in",
  homev1HomevTwo_Fifteen: "Enter OTP",
  homev1HomevTwo_Sixteen: "New Password",
  homev1HomevTwo_Seventeen: "Reset Password",
  homev1HomevTwo_Eighteen: "Create Account",
  staticmania2022: "© 2022. All rights reserved.",
};

export default LandingPageFooter;
