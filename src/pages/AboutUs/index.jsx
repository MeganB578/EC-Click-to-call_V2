import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text, Img, List, Button } from "components";
import NumberCount from "components/NumberCount";
import TeamMemberCard from "components/TeamMemberCard";
import ArticleCard from "components/ArticleCard";
import SubscriptionCard from "components/SubscriptionCard";
import LandingPageFooter from "components/LandingPageFooter";
import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {
  const navigate = useNavigate();

  const teamMemberCardPropList = [
    {
      kausarPialOne: "Kausar Pial",
      rectangle5596: "images/img_rectangle5596_282x282.png",
      cEO: "CEO",
    },
    {
      kausarPialOne: "Floyd Miles",
      rectangle5596: "images/img_rectangle5597_282x282.png",
      cEO: "President of Sales",
    },
    {
      kausarPialOne: "Darlene Robertson",
      rectangle5596: "images/img_rectangle5598_282x282.png",
      cEO: "Marketing Coordinator",
    },
    {
      kausarPialOne: "Guy Hawkins",
      rectangle5596: "images/img_rectangle5599_282x282.png",
      cEO: "Marketing Coordinator",
    },
    {
      kausarPialOne: "Jerome Bell",
      rectangle5596: "images/img_rectangle5600_282x282.png",
      cEO: "Marketing Coordinator",
    },
    {
      kausarPialOne: "Ralph Edwards",
      rectangle5596: "images/img_rectangle5601_282x282.png",
      cEO: "Marketing Coordinator",
    },
    {
      kausarPialOne: "Arlene McCoy",
      rectangle5596: "images/img_rectangle5602_282x282.png",
      cEO: "Marketing Coordinator",
    },
    {
      kausarPialOne: "Devon Lane",
      rectangle5596: "images/img_rectangle5603_282x282.png",
      cEO: "Marketing Coordinator",
    },
    {
      kausarPialOne: "Courtney Henry",
      rectangle5596: "images/img_rectangle5604_282x282.png",
      cEO: "Marketing Coordinator",
    },
    {
      kausarPialOne: "Bessie Cooper",
      rectangle5596: "images/img_rectangle5605_282x282.png",
      cEO: "Marketing Coordinator",
    },
    {
      kausarPialOne: "Cody Fisher",
      rectangle5596: "images/img_rectangle5606_282x282.png",
      cEO: "Marketing Coordinator",
    },
    {
      kausarPialOne: "Cody Fisher",
      rectangle5596: "images/img_rectangle5607_282x282.png",
      cEO: "Marketing Coordinator",
    },
  ];
  const articleCardPropList = [
    {
      title: "9 Easy-to-Ambitious DIY Projects to Improve Your Home",
      thumbnail: "images/img_image_350x384.png",
    },
    {
      title: "Serie Shophouse Launch In July, Opportunity For Investors",
      thumbnail: "images/img_image_21.png",
    },
    {
      title: "Looking for a New Place? Use This Time to Create Your Wishlist",
      thumbnail: "images/img_image_22.png",
    },
  ];

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-markoone gap-[100px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
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
          <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
              <Text
                className="leading-[140.00%] text-center text-gray_900 tracking-[-1.08px]"
                as="h1"
                variant="h1"
              >
                <>
                  Reimagining real estate to <br />
                  make it easier to unlock.
                </>
              </Text>
              <Text
                className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[1200px] not-italic text-center text-gray_700"
                variant="body3"
              >
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble.
              </Text>
            </div>
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5592_400x792.png"
                  className="flex-1 md:flex-none h-[400px] sm:h-[auto] max-h-[400px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
                  alt="rectangle5592"
                />
                <Img
                  src="images/img_rectangle5593_400x384.png"
                  className="h-[100%] md:h-[400px] sm:h-[auto] max-h-[400px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
                  alt="rectangle5593"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5595_400x384.png"
                  className="h-[100%] md:h-[400px] sm:h-[auto] max-h-[400px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
                  alt="rectangle5595"
                />
                <Img
                  src="images/img_rectangle5594_400x792.png"
                  className="flex-1 md:flex-none h-[400px] sm:h-[auto] max-h-[400px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
                  alt="rectangle5594"
                />
              </div>
            </div>
          </div>
        </div>
        <NumberCount
          className="bg-gray_50 flex flex-col font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] py-[50px] w-[100%]"
          price="$15.4M"
          ownedfromPropertys={
            <>
              Owned from
              <br />
              Properties transactions
            </>
          }
          _25K="25K+"
          propertysforBuy="Properties for Buy & sell Successfully"
          fiveHundred="500"
          dailycompleted="Daily completed transactions"
          sixHundred="600+"
          reagularClientsOne="Reagular Clients"
        />
        <div className="flex font-manrope items-center justify-center max-w-[1440px] pl-[120px] pr-[173px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[84px] items-center justify-start max-w-[1147px] mx-[auto] w-[100%]">
            <div className="flex flex-1 flex-col gap-[56px] items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  A note from our founders.
                </Text>
                <Text
                  className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[531px] not-italic text-gray_700 text-left"
                  variant="body3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour,
                </Text>
              </div>
              <List
                className="flex-col gap-[32px] grid items-start w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-[0] w-[100%]">
                  <Text
                    className="border-[2px] border-gray_900 border-solid flex font-extrabold h-[35px] items-center justify-center rounded-[17px] text-center text-gray_900 tracking-[-0.40px] w-[35px]"
                    variant="body1"
                  >
                    1
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.44px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      It all started in 1995
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[470px] not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-[0] w-[100%]">
                  <Text
                    className="border-[2px] border-gray_900 border-solid flex font-extrabold h-[35px] items-center justify-center rounded-[17px] text-center text-gray_900 tracking-[-0.40px] w-[35px]"
                    variant="body1"
                  >
                    2
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.44px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Donate launches in 2007
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[470px] not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-[0] w-[100%]">
                  <Text
                    className="border-[2px] border-gray_900 border-solid flex font-extrabold h-[35px] items-center justify-center rounded-[17px] text-center text-gray_900 tracking-[-0.40px] w-[35px]"
                    variant="body1"
                  >
                    3
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.44px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Relasto holds its initial public offering in 2008
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[470px] not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Img
              src="images/img_rectangle20_589x531.png"
              className="flex-1 md:flex-none h-[589px] sm:h-[auto] max-h-[589px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
              alt="rectangleTwenty"
            />
          </div>
        </div>
        <div className="flex font-manrope items-center justify-center max-w-[1440px] pl-[170px] pr-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[158px] md:gap-[40px] items-center justify-between max-w-[1150px] mx-[auto] w-[100%]">
            <Img
              src="images/img_rectangle20_589x496.png"
              className="flex-1 md:flex-none h-[589px] sm:h-[auto] max-h-[589px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
              alt="rectangleTwenty_One"
            />
            <div className="flex flex-1 flex-col gap-[56px] items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Our vision is simple.
                </Text>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_700 text-left"
                  variant="body3"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, On the other hand, we
                    denounce with righteous indignation and dislike men who are
                    so beguiled and demoralized by the charms of pleasure of the
                    moment.
                    <br />
                    In a free hour, On the other hand, we denounce with
                    righteous indignation and dislike men .
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  Kausar Pial
                </Text>
                <Text
                  className="font-semibold text-gray_700 text-left w-[auto]"
                  variant="body3"
                >
                  CEO at Static Mania
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <Text
              className="text-center text-gray_900 tracking-[-0.72px] w-[auto]"
              as="h3"
              variant="h3"
            >
              Relasto Team members
            </Text>
            <div className="flex items-start justify-start w-[100%]">
              <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                {teamMemberCardPropList.map((props, index) => (
                  <React.Fragment key={`TeamMemberCard${index}`}>
                    <TeamMemberCard
                      className="flex flex-1 flex-col items-start justify-start w-[100%]"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_900 flex font-manrope items-center justify-center p-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[120px] md:gap-[40px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                <Text
                  className="flex-1 text-left text-white_A700 tracking-[-0.72px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  News & Consult
                </Text>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[124px] w-[auto]"
                  onClick={() => navigate("/listing")}
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="mb-[3px] ml-[8px]"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="font-bold text-[18px] text-left text-orange_A700">
                    Explore All
                  </div>
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-[100%]"
                orientation="horizontal"
              >
                {articleCardPropList.map((props, index) => (
                  <React.Fragment key={`ArticleCard${index}`}>
                    <ArticleCard
                      className="flex flex-1 flex-col h-[487px] md:h-[auto] items-start justify-start w-[100%]"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <SubscriptionCard className="bg-gray_401 flex flex-col items-center justify-center px-[100px] sm:px-[20px] md:px-[40px] py-[40px] rounded-[10px] w-[100%]" />
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

export default AboutUsPage;
