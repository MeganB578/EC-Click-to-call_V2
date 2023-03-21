import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import {
  Text,
  Button,
  Input,
  Img,
  SelectBox,
  CheckBox,
  Slider,
  List,
} from "components";
import NumberCount from "components/NumberCount";
import PropertyCard from "components/PropertyCard";
import ArticleCard from "components/ArticleCard";
import SubscriptionCard from "components/SubscriptionCard";
import LandingPageFooter from "components/LandingPageFooter";
import { useNavigate } from "react-router-dom";
import AcsCallComposite from "../../components/C2CWidget/acsCallComposite";

const LandingPagePage = () => {
  const navigate = useNavigate();

  const propertyCardPropList = [
    { image: "images/img_image_260x384.png" },
    { image: "images/img_image_16.png" },
    { image: "images/img_image_17.png" },
    { image: "images/img_image_18.png" },
    { image: "images/img_image_19.png" },
    { image: "images/img_image_20.png" },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
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
            log_In="Ilya B."
          />
          <div className="bg-yellow_50 flex font-manrope items-start justify-start pl-[120px] sm:pl-[20px] md:pl-[40px] py-[50px] w-[100%]">
            <div className="flex md:flex-col flex-row gap-[100px] md:gap-[40px] items-center justify-start ml-[auto] w-[100%]">
              <div className="flex flex-1 flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="leading-[140.00%] text-gray_900 text-left tracking-[-0.92px]"
                    as="h2"
                    variant="h2"
                  >
                    <>
                      Find a perfect property
                      <br />
                      Where you&#39;ll love to live
                    </>
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[610px] not-italic text-gray_700 text-left"
                    variant="body1"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="bg-white_A700 flex items-start justify-start p-[24px] sm:px-[20px] rounded-[16px] w-[100%]">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-center w-[100%]">
                      <Button className="bg-gray_900 cursor-pointer flex-1 font-bold sm:px-[20px] px-[31px] py-[16px] rounded-[10px] text-[18px] text-center text-white_A700 w-[100%]">
                        Buy
                      </Button>
                      <Button className="bg-gray_300 cursor-pointer flex-1 font-bold sm:px-[20px] px-[31px] py-[16px] rounded-[10px] text-[18px] text-center text-gray_900 w-[100%]">
                        Sell
                      </Button>
                      <Button className="bg-gray_300 cursor-pointer flex-1 font-bold sm:px-[20px] px-[26px] py-[16px] rounded-[10px] text-[18px] text-center text-gray_900 w-[100%]">
                        Rent
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex px-[16px] py-[14px] rounded-[10px] w-[100%]"
                          className="font-semibold p-[0] placeholder:text-gray_600 text-[18px] text-gray_600 text-left w-[100%]"
                          name="textfieldlarge"
                          placeholder="City/Street"
                          suffix={
                            <Img
                              src="images/img_location.svg"
                              className="mt-[auto] mb-[5px] ml-[35px]"
                              alt="location"
                            />
                          }
                        ></Input>
                        <SelectBox
                          className="bg-white_A700 border-[1px] border-bluegray_100 border-solid font-semibold px-[16px] py-[14px] rounded-[10px] text-[18px] text-gray_600 text-left w-[100%]"
                          placeholderClassName="text-gray_600"
                          name="textfieldlarge_One"
                          placeholder="Property Type"
                          isSearchable={true}
                          isMulti={true}
                          indicator={
                            <Img
                              src="images/img_sort.svg"
                              className="h-[20px] w-[20px]"
                              alt="sort"
                            />
                          }
                        ></SelectBox>
                        <SelectBox
                          className="bg-white_A700 border-[1px] border-bluegray_100 border-solid font-semibold px-[16px] py-[14px] rounded-[10px] text-[18px] text-gray_600 text-left w-[100%]"
                          placeholderClassName="text-gray_600"
                          name="textfieldlarge_Two"
                          placeholder="Price Range"
                          isSearchable={true}
                          isMulti={true}
                          indicator={
                            <Img
                              src="images/img_sort.svg"
                              className="h-[20px] w-[20px]"
                              alt="sort"
                            />
                          }
                        ></SelectBox>
                      </div>
                      <Button
                        className="common-pointer bg-gray_900 cursor-pointer font-bold sm:px-[20px] px-[24px] py-[21px] rounded-[10px] text-[18px] text-center text-white_A700 w-[100%]"
                        onClick={() => navigate("/listing")}
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[47%]">
                <Img
                  src="images/img_image_503x610.png"
                  className="h-[503px] md:h-[auto] object-cover w-[100%]"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-manrope items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[24px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
            <div className="bg-red_100 flex flex-1 h-[424px] md:h-[auto] items-start justify-center sm:px-[20px] md:px-[40px] px-[50px] py-[46px] rounded-[20px] w-[100%]">
              <div className="flex flex-col gap-[50px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="leading-[140.00%] md:max-w-[100%] max-w-[488px] text-gray_900 text-left tracking-[-0.72px]"
                    as="h3"
                    variant="h3"
                  >
                    Simple & easy way to find your dream Appointment
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[488px] not-italic text-gray_900 text-left"
                    variant="body3"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </Text>
                </div>
                <Button className="bg-gray_900 cursor-pointer font-semibold min-w-[138px] sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 w-[auto]">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex flex-1 items-start justify-start w-[100%]">
              <div className="sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                <div className="bg-deep_orange_50 flex flex-1 h-[200px] md:h-[auto] items-start justify-center sm:px-[20px] px-[30px] py-[24px] rounded-[20px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_refresh.svg"
                      className="h-[30px] w-[30px]"
                      alt="refresh"
                    />
                    <Text
                      className="leading-[135.00%] md:max-w-[100%] max-w-[222px] text-gray_900 text-left tracking-[-0.56px]"
                      as="h4"
                      variant="h4"
                    >
                      Search your location
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange_50 flex flex-1 h-[200px] md:h-[auto] items-start justify-center sm:px-[20px] px-[30px] py-[24px] rounded-[20px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_instagram.svg"
                      className="h-[30px] w-[30px]"
                      alt="instagram"
                    />
                    <Text
                      className="leading-[135.00%] md:max-w-[100%] max-w-[222px] text-gray_900 text-left tracking-[-0.56px]"
                      as="h4"
                      variant="h4"
                    >
                      Visit Appointment
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange_50 flex flex-1 h-[200px] md:h-[auto] items-start justify-center sm:px-[20px] px-[30px] py-[24px] rounded-[20px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_camera_orange_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="camera"
                    />
                    <Text
                      className="leading-[135.00%] md:max-w-[100%] max-w-[222px] text-gray_900 text-left tracking-[-0.56px]"
                      as="h4"
                      variant="h4"
                    >
                      Get your dream house
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange_50 flex flex-1 h-[200px] md:h-[auto] items-start justify-center sm:px-[20px] px-[30px] py-[24px] rounded-[20px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_instagram_30X30.svg"
                      className="h-[30px] w-[30px]"
                      alt="instagram"
                    />
                    <Text
                      className="leading-[135.00%] md:max-w-[100%] max-w-[222px] text-gray_900 text-left tracking-[-0.56px]"
                      as="h4"
                      variant="h4"
                    >
                      Enjoy your Appointment
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NumberCount
          className="bg-gray_50 flex flex-col font-manrope items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] py-[50px] w-[100%]"
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
        <div className="flex font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[60px] md:h-[auto] items-start justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Featured Properties
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
              <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start w-[100%]">
                <Button className="bg-transparent cursor-pointer font-bold min-w-[159px] text-[18px] text-center text-gray_900 w-[auto]">
                  Resident Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[186px] text-[18px] text-center text-gray_400 w-[auto]">
                  Commercial Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[164px] text-[18px] text-center text-gray_400 w-[auto]">
                  Industrial Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[180px] text-[18px] text-center text-gray_400 w-[auto]">
                  Agriculture Property
                </Button>
              </div>
            </div>
            <div className="flex items-start justify-start w-[100%]">
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
          </div>
        </div>
        <div className="bg-gray_51 flex font-manrope items-center justify-center p-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[150px] md:gap-[40px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[85px] items-center justify-start w-[100%]">
              <div className="flex flex-1 flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="leading-[140.00%] md:max-w-[100%] max-w-[557px] text-gray_900 text-left tracking-[-0.72px]"
                    as="h3"
                    variant="h3"
                  >
                    Simple & easy way to find your dream Appointment
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[557px] not-italic text-gray_700 text-left"
                    variant="body3"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, when our power of
                    choice is untrammelled and when nothing prevents our being
                    able to do what we like best, every pleasure is to be
                    welcomed.
                  </Text>
                </div>
                <Button className="bg-gray_900 cursor-pointer font-semibold min-w-[138px] sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 w-[auto]">
                  Get Started
                </Button>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle18_327x268.png"
                    className="h-[327px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="rectangleEighteen"
                  />
                  <Img
                    src="images/img_rectangle21_218x268.png"
                    className="h-[218px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="rectangleTwentyOne"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle19_218x268.png"
                    className="h-[218px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="rectangleNineteen"
                  />
                  <Img
                    src="images/img_rectangle20_327x268.png"
                    className="h-[327px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="rectangleTwenty"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[157px] md:gap-[40px] items-center justify-start w-[100%]">
              <Img
                src="images/img_rectangle20_589x521.png"
                className="flex-1 md:flex-none h-[589px] sm:h-[auto] max-h-[589px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
                alt="rectangleTwenty_One"
              />
              <div className="flex flex-1 flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="leading-[140.00%] md:max-w-[100%] max-w-[521px] text-gray_900 text-left tracking-[-0.72px]"
                      as="h3"
                      variant="h3"
                    >
                      Best rated host on popular rental sites
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[521px] not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, when our power of
                      choice is untrammelled.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                    <CheckBox
                      className="font-semibold text-[18px] text-gray_900 text-left"
                      inputClassName="mr-[5px]"
                      name="findexcellentde_One"
                      id="findexcellentde_One"
                      label="Find excellent deals"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold text-[18px] text-gray_900 text-left"
                      inputClassName="mr-[5px]"
                      name="friendlyhost"
                      id="friendlyhost"
                      label="Friendly host & Fast support"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold text-[18px] text-gray_900 text-left"
                      inputClassName="mr-[5px]"
                      name="securepaymentsy_One"
                      id="securepaymentsy_One"
                      label="Secure payment system"
                    ></CheckBox>
                  </div>
                </div>
                <Button className="bg-gray_900 cursor-pointer font-semibold min-w-[134px] py-[13px] rounded-[10px] text-[16px] text-center text-white_A700 w-[auto]">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope gap-[24px] items-start justify-start w-[100%]">
          <div className="flex items-center justify-center sm:px-[20px] px-[215px] md:px-[40px] w-[100%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="max-w-[1010px] mx-[auto] w-[100%]"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex md:flex-col flex-row gap-[100px] md:gap-[40px] items-start justify-start mx-[10px]">
                    <Img
                      src="images/img_rectangle5591_344x455.png"
                      className="flex-1 md:flex-none h-[344px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="rectangle5591"
                    />
                    <div className="flex flex-1 items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[73px] items-center justify-start w-[100%]">
                          <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                            <Text
                              className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Taylor Wilson
                            </Text>
                            <Text
                              className="font-semibold text-gray_900 text-left w-[auto]"
                              variant="body3"
                            >
                              Product Manager - Static Mania
                            </Text>
                          </div>
                          <Img
                            src="images/img_shape_deep_orange_300.svg"
                            className="h-[51px] max-h-[51px] w-[auto] sm:w-[auto]"
                            alt="shape"
                          />
                        </div>
                        <Text
                          className="font-semibold leading-[165.00%] md:max-w-[100%] max-w-[455px] text-gray_700 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="flex flex-row gap-[30px] items-start justify-between pl-[770px] pr-[215px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_arrowleft.svg"
                className="h-[24px] w-[24px]"
                alt="arrowleft"
              />
              <Text
                className="font-bold text-gray_604 text-left w-[auto]"
                variant="body3"
              >
                Previews
              </Text>
            </div>
            <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-bold text-left text-orange_A700 w-[auto]"
                variant="body3"
              >
                Next
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright"
              />
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
            <SubscriptionCard
              className="bg-gray_401 flex flex-col items-center justify-center px-[100px] sm:px-[20px] md:px-[40px] py-[40px] rounded-[10px] w-[100%]"
              forRecentUpdateOne="For Recent Update, News."
              wehelpsbusinessesOne="We helps businesses customize, automate and scale up their ad production and delivery."
              subscribe="Subscribe"
            />
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
        <AcsCallComposite></AcsCallComposite>
      </div>
    </>
  );
};

export default LandingPagePage;
