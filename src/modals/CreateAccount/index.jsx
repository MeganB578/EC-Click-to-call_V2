import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input, CheckBox, Button, Line } from "components";
import * as yup from "yup";
import { postRegister } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleLogin } from "@react-oauth/google";
import useForm from "hooks/useForm";

const CreateAccountModal = (props) => {
  const [register, setRegister] = React.useState();
  const formValidationSchema = yup.object().shape({
    password: yup
      .string()
      .min(10, "Password must be minimum of length 10")
      .max(20, "Password must be maximum of length 20")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-._]).{8,}$/,
        "Password is not in correct format"
      )
      .required("Password is required"),
    email: yup
      .string()
      .matches(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Email is not in correct format"
      )
      .required("Email is required"),
  });
  const form = useForm(
    { password: "", email: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  function callApi1(data) {
    const req = {
      data: {
        username: data?.username,
        password: data?.password,
        email: data?.email,
      },
    };

    postRegister(req)
      .then((res) => {
        setRegister(res?.data);

        localStorage.setItem("id", JSON.stringify(res?.data?.data?.id));

        toast.success("Registered successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      });
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[48%]"
        overlayClassName="bg-gray_900_cc fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="sm:h-[auto] md:h-[auto] max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start md:px-[20px] px-[30px] py-[40px] rounded-[10px] w-[100%]">
            <div className="flex flex-col gap-[32px] items-center justify-center w-[100%]">
              <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                    <Text
                      className="flex-1 text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Create Account
                    </Text>
                    <Img
                      src="images/img_close.svg"
                      className="common-pointer h-[30px] w-[30px]"
                      onClick={props.onRequestClose}
                      alt="close"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                    <div
                      className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]"
                      onChange={(e) => {
                        form.handleChange("username", undefined);
                      }}
                      value={form?.values?.username}
                    >
                      <Input
                        wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex px-[16px] py-[14px] rounded-[10px] w-[100%]"
                        className="font-semibold p-[0] placeholder:text-gray_600 text-[18px] text-gray_600 text-left w-[100%]"
                        type="email"
                        name="textfieldlarge"
                        placeholder="user / email address"
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
                        type="password"
                        onChange={(e) => {
                          form.handleChange("password", e.target.value);
                        }}
                        errors={form?.errors?.password}
                        value={form?.values?.password}
                        name="textfieldlarge_One"
                        placeholder="Password"
                        prefix={
                          <Img
                            src="images/img_user_24X24.svg"
                            className="mt-[auto] mb-[1px] mr-[14px]"
                            alt="user"
                          />
                        }
                        suffix={
                          <Img
                            src="images/img_airplane.svg"
                            className="mt-[auto] mb-[1px] ml-[35px]"
                            alt="airplane"
                          />
                        }
                      ></Input>
                    </div>
                    <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Input
                        wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex px-[16px] py-[14px] rounded-[10px] w-[100%]"
                        className="font-semibold p-[0] placeholder:text-gray_600 text-[18px] text-gray_600 text-left w-[100%]"
                        type="email"
                        onChange={(e) => {
                          form.handleChange("email", e.target.value);
                        }}
                        errors={form?.errors?.email}
                        value={form?.values?.email}
                        name="textfieldlarge_Two"
                        placeholder="user / email address"
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
                        type="password"
                        name="textfieldlarge_Three"
                        placeholder="Password"
                        prefix={
                          <Img
                            src="images/img_user_24X24.svg"
                            className="mt-[auto] mb-[1px] mr-[14px]"
                            alt="user"
                          />
                        }
                        suffix={
                          <Img
                            src="images/img_airplane.svg"
                            className="mt-[auto] mb-[1px] ml-[35px]"
                            alt="airplane"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <CheckBox
                    className="font-bold text-[18px] text-gray_600 text-left"
                    inputClassName="border-[2px] border-gray_900 border-solid h-[18px] mr-[5px] rounded-[4px] w-[18px]"
                    name="iagreetoallterm_One"
                    id="iagreetoallterm_One"
                    label="I agree to all Terms & Conditions"
                  ></CheckBox>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                <Button
                  className="common-pointer bg-gray_900 cursor-pointer font-bold sm:px-[20px] px-[24px] py-[20px] rounded-[10px] text-[18px] text-center text-white_A700 w-[100%]"
                  onClick={() => {
                    form.handleSubmit(callApi1);
                  }}
                >
                  Create Account
                </Button>
                <Button
                  className="common-pointer bg-white_A700 border-[1px] border-gray_600 border-solid cursor-pointer flex items-center justify-center md:min-w-[100%] min-w-[620px] px-[24px] py-[20px] rounded-[10px] w-[auto]"
                  onClick={() => googleSignIn()}
                  leftIcon={
                    <Img
                      src="images/img_refresh_20X20.svg"
                      className="mb-[5px] mr-[10px]"
                      alt="refresh"
                    />
                  }
                >
                  <div className="font-bold sm:px-[20px] text-[18px] text-gray_900 text-left">
                    Create Account with Google
                  </div>
                </Button>
              </div>
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <div className="flex flex-row gap-[8px] items-start justify-center w-[100%]">
                <Text
                  className="font-semibold text-center text-gray_600 tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  Have an account?
                </Text>
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  Log in
                </Text>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
      <ToastContainer />
    </>
  );
};

export default CreateAccountModal;
