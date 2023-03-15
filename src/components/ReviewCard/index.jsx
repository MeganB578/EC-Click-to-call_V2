import React from "react";

import { Text, Img } from "components";

const ReviewCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
          <Text
            className="font-manrope font-semibold leading-[165.00%] md:max-w-[100%] max-w-[1090px] text-gray_600 text-left"
            as="h5"
            variant="h5"
          >
            {props?.descriptionOne}
          </Text>
          <div className="flex flex-col gap-[25px] items-start justify-start w-[100%]">
            <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[552px] w-[100%]">
              <div className="flex flex-1 flex-row gap-[10px] items-center justify-start w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-between w-[50%]">
                  <Img
                    src="images/img_star_gray_900_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="star Ten"
                  />
                  <Img
                    src="images/img_star_gray_900_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="star One"
                  />
                  <Img
                    src="images/img_star_gray_900_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="star Two"
                  />
                  <Img
                    src="images/img_star_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="star Three"
                  />
                </div>
                <Text
                  className="flex-1 font-manrope font-semibold pl-[20px] text-gray_600 text-left tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  {props?.reviewCounterTwo}
                </Text>
              </div>
              <Text
                className="flex-1 font-manrope font-semibold text-gray_600 text-left tracking-[-0.40px] w-[auto]"
                variant="body1"
              >
                {props?.date}
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
              <Img
                src="images/img_ellipse2695.png"
                className="h-[80px] md:h-[auto] rounded-[50%] w-[80px]"
                alt="Ellipse2695"
              />
              <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                <Text
                  className="font-manrope text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  {props?.taylorWilson}
                </Text>
                <Text
                  className="font-manrope font-semibold text-gray_900 text-left w-[auto]"
                  variant="body3"
                >
                  {props?.productManager}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ReviewCard.defaultProps = {
  descriptionOne:
    "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
  reviewCounterTwo: "4.5 review",
  date: "02 June 2022",
  taylorWilson: "Taylor Wilson",
  productManager: "Product Manager - Static Mania",
};

export default ReviewCard;
