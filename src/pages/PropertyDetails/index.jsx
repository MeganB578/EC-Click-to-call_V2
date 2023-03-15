import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Img, Button, Text, GoogleMap, List, Input } from "components";
import PropertyCard from "components/PropertyCard";
import LandingPageFooter from "components/LandingPageFooter";

const PropertyDetailsPage = () => {
  const propertyCardPropList = [
    { image: "images/img_image_260x384.png" },
    { image: "images/img_image_16.png" },
    { image: "images/img_image_17.png" },
  ];

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
          <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
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
              <div className="flex md:flex-col flex-row gap-[24px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5610.png"
                    className="h-[550px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="rectangle5610"
                  />
                </div>
                <div className="flex sm:flex-1 flex-col gap-[24px] h-[550px] md:h-[auto] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Img
                    src="images/img_rectangle5611_263x384.png"
                    className="h-[263px] sm:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="rectangle5611"
                  />
                  <div className="h-[263px] relative sm:w-[100%] w-[384px]">
                    <Img
                      src="images/img_rectangle5612.png"
                      className="h-[263px] m-[auto] object-cover rounded-[10px] w-[100%]"
                      alt="rectangle5612"
                    />
                    <Button
                      className="bg-white_A700 bottom-[0] cursor-pointer flex items-center justify-center min-w-[122px] px-[16px] py-[10px] right-[0] rounded-[10px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_mail_24X24.svg"
                          className="mb-[1px] mr-[6px] bottom-[0] right-[2%] absolute"
                          alt="mail"
                        />
                      }
                    >
                      <div className="font-bold text-[18px] text-gray_900 text-left">
                        3 more
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[24px] items-start justify-center max-w-[1200px] mx-[auto] w-[100%]">
                <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start p-[40px] sm:px-[20px] rounded-[10px] w-[100%]">
                    <div className="flex flex-col gap-[44px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <Text
                            className="leading-[135.00%] md:max-w-[100%] max-w-[712px] text-gray_900 text-left tracking-[-0.56px]"
                            as="h4"
                            variant="h4"
                          >
                            Trovilla Plan in Sereno Canyon - Estate Collection
                            by Toll Brothers
                          </Text>
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                            variant="body1"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pr-[180px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_600 border-solid flex flex-1 items-center justify-center sm:px-[20px] px-[24px] py-[7px] rounded-[10px] w-[100%]">
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $649,900
                              </Text>
                              <Text
                                className="text-gray_600 text-left w-[auto]"
                                variant="body7"
                              >
                                Online / Cash Payment
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-1 items-center justify-center sm:px-[20px] px-[24px] py-[7px] rounded-[10px] w-[100%]">
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $850 / month
                              </Text>
                              <Text
                                className="text-gray_600 text-left w-[auto]"
                                variant="body7"
                              >
                                0% EMI for 6 Months
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                          variant="body1"
                        >
                          Well-constructed 1562 Sq Ft Home Is Now Offering To
                          You In Uttara For Sale
                        </Text>
                        <Text
                          className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[712px] not-italic text-gray_600 text-left"
                          variant="body3"
                        >
                          A slider is great way to display a slideshow featuring
                          images or videos, usually on your homepage.Adding
                          sliders to your site is no longer difficult. You don’t
                          have to know coding anymore. Just use a slider widget
                          and it will automatically insert the slider on your
                          web page.So, the Elementor slider would be a great
                          tool to work with when building a WordPress site.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                          <Text
                            className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Local Information
                          </Text>
                          <div className="gap-[12px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start pr-[200px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer flex-1 font-semibold sm:px-[20px] px-[24px] py-[14px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                              Map
                            </Button>
                            <Button className="bg-gray_900 cursor-pointer flex-1 font-semibold sm:px-[20px] px-[24px] py-[14px] rounded-[10px] text-[16px] text-center text-white_A700 w-[100%]">
                              Schools
                            </Button>
                            <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer flex-1 font-semibold sm:px-[20px] px-[24px] py-[14px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                              Crime
                            </Button>
                            <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer flex-1 font-semibold px-[16px] py-[14px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                              Shop & Eat
                            </Button>
                          </div>
                        </div>
                        <div className="h-[400px] relative w-[100%]">
                          <GoogleMap
                            className="h-[400px] m-[auto] rounded-[10px] w-[100%]"
                            showMarker={false}
                          ></GoogleMap>
                          <Img
                            src="images/img_group100000142_deep_orange_300.svg"
                            className="absolute h-[54px] inset-[0] m-[auto] w-[389px]"
                            alt="frame1000001425"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start p-[40px] sm:px-[20px] rounded-[10px] w-[100%]">
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                      <Text
                        className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Home Highlights
                      </Text>
                      <List
                        className="sm:flex-col flex-row gap-[150px] md:gap-[40px] grid md:grid-cols-1 grid-cols-2 justify-start w-[100%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 flex-col gap-[10px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[55px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-[50%] w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                Parking
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-[auto]"
                              variant="body3"
                            >
                              No Info
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[47px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-[50%] w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                Outdoor
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-[auto]"
                              variant="body3"
                            >
                              No Info
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[85px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-[50%] w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                A/C
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-[auto]"
                              variant="body3"
                            >
                              No Info
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[40px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-[50%] w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                Year Built
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-[auto]"
                              variant="body3"
                            >
                              2021
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[10px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[80px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-[50%] w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                HOA
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-[auto]"
                              variant="body3"
                            >
                              None
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[32px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-[50%] w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                Price/Sqft
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-[auto]"
                              variant="body3"
                            >
                              $560
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[66px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start w-[100%]">
                              <div className="bg-gray_600 h-[8px] rounded-[50%] w-[8px]"></div>
                              <Text
                                className="flex-1 font-normal not-italic text-gray_600 text-left w-[auto]"
                                variant="body3"
                              >
                                Listed
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_900 text-right w-[auto]"
                              variant="body3"
                            >
                              No Info
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start p-[40px] sm:px-[20px] rounded-[10px] w-[100%]">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-[100%]">
                      <Text
                        className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Agent Information
                      </Text>
                      <div className="flex flex-row gap-[24px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_rectangle5599_282x282.png"
                          className="h-[150px] md:h-[auto] object-cover rounded-[10px] w-[150px]"
                          alt="rectangle5599"
                        />
                        <div className="flex flex-col gap-[3px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                            variant="body1"
                          >
                            Bruno Fernandes
                          </Text>
                          <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[4px] items-start justify-start self-stretch w-[auto]">
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
                              className="font-semibold text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              4 review
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_mail_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="mail"
                            />
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body4"
                            >
                              bruno@relasto .com
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_call_gray_600.svg"
                              className="h-[20px] w-[20px]"
                              alt="call"
                            />
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body4"
                            >
                              +65 0231 965 965
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex sm:flex-1 items-start justify-start p-[24px] sm:px-[20px] rounded-[10px] self-stretch sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[40px] items-start justify-start w-[336px]">
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                      <Text
                        className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Request for Visit
                      </Text>
                      <div className="flex flex-col gap-[12px] h-[440px] md:h-[auto] items-start justify-start w-[100%]">
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
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex px-[16px] py-[14px] rounded-[10px] w-[100%]"
                          className="font-semibold p-[0] placeholder:text-gray_600 text-[18px] text-gray_600 text-left w-[100%]"
                          name="textfieldlarge_Three"
                          placeholder="Date"
                          prefix={
                            <Img
                              src="images/img_calendar.svg"
                              className="mt-[auto] mb-[1px] mr-[14px]"
                              alt="calendar"
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
                </div>
              </div>
            </div>
          </div>
          <div className="flex font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col gap-[40px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                <Text
                  className="flex-1 text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Latest Property Listings
                </Text>
                <Button
                  className="bg-transparent cursor-pointer flex items-center justify-center min-w-[124px] w-[auto]"
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
              </List>
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

export default PropertyDetailsPage;
