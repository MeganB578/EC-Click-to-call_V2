import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import { Text, Input, Img, List, Line } from "components";
import { CloseSVG } from "../../assets/images";

const FAQPage = () => {
  function handleNavigate1() {
    window.location.href = "https://relasto.com";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-[40px] md:gap-[40px] gap-[68px] items-center justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
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
            <Text
              className="text-center text-gray_900 tracking-[-0.92px] w-[auto]"
              as="h2"
              variant="h2"
            >
              Search Property / Anything
            </Text>
            <div className="flex flex-col gap-[25px] items-start justify-start w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex gap-[8px] px-[26px] py-[14px] rounded-[10px] w-[100%]"
                className="font-semibold p-[0] placeholder:text-gray_600 sm:px-[20px] text-[18px] text-gray_600 text-left w-[100%]"
                name="search_One"
                placeholder="Search Property / Anything"
                prefix={
                  <Img
                    src="images/img_search_1.svg"
                    className="mt-[auto] mb-[3px] cursor-pointer mr-[14px]"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    className="cursor-pointer my-[auto]"
                    onClick={() => setInputvalue("")}
                    color="#6e6e6e"
                    style={{
                      visibility:
                        inputvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                  />
                }
              ></Input>
              <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start sm:px-[20px] px-[30px] py-[28px] rounded-[10px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start max-w-[732px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      You&#39;re viewing sample results.
                    </Text>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="common-pointer font-semibold text-gray_600 text-left w-[auto]"
                        variant="body4"
                        onClick={handleNavigate1}
                      >
                        https://relasto.com
                      </Text>
                      <Text
                        className="leading-[150.00%] md:max-w-[100%] max-w-[732px] not-italic text-gray_600 text-left"
                        variant="body5"
                      >
                        Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                        quibusdam autem suscipit culpa perspiciatis.
                        Exercitationem dolorum dolore perferendis praesen…
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[20px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                        variant="body1"
                      >
                        Add CMS or Business Hosting and index your site to see
                        real search results!
                      </Text>
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_600 text-left w-[auto]"
                          variant="body4"
                        >
                          https://relasto.com
                        </Text>
                        <Text
                          className="not-italic text-gray_600 text-left w-[auto]"
                          variant="body5"
                        >
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                          quibusdam autem suscipit culpa perspiciatis.
                          Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-bluegray_100 w-[100%]" />
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                        variant="body1"
                      >
                        You&#39;re viewing sample results.
                      </Text>
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_600 text-left w-[auto]"
                          variant="body4"
                        >
                          https://relasto.com
                        </Text>
                        <Text
                          className="not-italic text-gray_600 text-left w-[auto]"
                          variant="body5"
                        >
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                          quibusdam autem suscipit culpa perspiciatis.
                          Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
