import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";

const LicensePage = () => {
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
          <div className="flex font-manrope items-start justify-start pl-[120px] pr-[324px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.92px] w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    License
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body3"
                  >
                    Last updated: January 2020
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                  variant="body3"
                >
                  <>
                    Your content remains yours, which means that you retain any
                    intellectual property rights that you have in your content.
                    For example, you have intellectual property rights in the
                    creative content you make, such as reviews you write. Or you
                    may have the right to share someone else’s creative content
                    if they’ve given you their permission.
                    <br />
                    We need your permission if your intellectual property rights
                    restrict our use of your content. You provide Google with
                    that permission through this license.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    What’s covered
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body3"
                  >
                    This license covers your content if that content is
                    protected by intellectual property rights.
                  </Text>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    What’s not covered
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[996px] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    We use cookies to recognize and monitor users, their on-site
                    behavior, and their preferences for accessing their website.
                    These cookies include the IP and time of visits by visitors.
                    Visitors to Relasto that do not want cookies put on their
                    browsers should configure their browsers to reject cookies
                    before using the Relasto website.
                  </Text>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Price Updates
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    <>
                      We will need to update this policy from time to time to
                      ensure that it remains up-to-date with the latest legal
                      requirements and any improvements to our privacy
                      management practices.
                      <br />
                      When we change the policy, we will make sure that we
                      inform you, if any, of such changes. A copy of this
                      policy’s latest version will always be available at this
                      page.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Refund Policy
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[996px] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    But why fast loading is important? According to Neil Patel,
                    47% of people on the internet expect a web page to load in
                    less than 2 seconds.
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[996px] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    Static websites are way faster than dynamic ones. As they
                    don’t have a back-end system, there is no time loss due to
                    database connection. Instead, the lightweight, pre-rendered
                    HTML files load incredibly fast.
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body3"
                  >
                    You may not disclose any information about your order
                    including, but not limited to, Order ID, download
                    connection, etc.
                  </Text>
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

export default LicensePage;
