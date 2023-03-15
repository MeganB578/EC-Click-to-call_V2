import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input, CheckBox, Button, Line } from "components";
import * as yup from "yup";
import { postLogin } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleLogin } from "@react-oauth/google";
import useForm from "hooks/useForm";

const LogInModal = (props) => {
  const [login, setLogin] = React.useState();
  const formValidationSchema = yup
    .object()
    .shape({
      username: yup
        .string()
        .required("Username is required")
        .email("Please enter valid email"),
      password: yup.string().required("Password is required"),
    });
  const form = useForm(
    { username: "", password: "" },
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

  function callApi(data) {
    const req = {
      data: { username: data?.username, password: data?.password },
    };

    postLogin(req)
      .then((res) => {
        setLogin(res?.data);

        localStorage.setItem("token", JSON.stringify(res?.data?.data?.token));

        toast.success("Logged In!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Invalid username or password!");
      });
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%]"
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
                      Log in
                    </Text>
                    <Img
                      src="images/img_close.svg"
                      className="common-pointer h-[30px] w-[30px]"
                      onClick={props.onRequestClose}
                      alt="close"
                    />
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                    <Input
                      wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex px-[16px] py-[14px] rounded-[10px] w-[100%]"
                      className="font-semibold p-[0] placeholder:text-gray_600 text-[18px] text-gray_600 text-left w-[100%]"
                      type="email"
                      onChange={(e) => {
                        form.handleChange("username", e.target.value);
                      }}
                      errors={form?.errors?.username}
                      value={form?.values?.username}
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
                </div>
                <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                  <CheckBox
                    className="font-bold text-[18px] text-gray_900 text-left"
                    inputClassName="border-[2px] border-gray_900 border-solid h-[18px] mr-[5px] rounded-[4px] w-[18px]"
                    name="remember"
                    id="remember"
                    label="Remember"
                  ></CheckBox>
                  <Text
                    className="font-bold text-gray_900 text-right w-[auto]"
                    variant="body3"
                  >
                    Forgot Password
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                <Button
                  className="common-pointer bg-gray_900 cursor-pointer font-bold sm:px-[20px] px-[24px] py-[20px] rounded-[10px] text-[18px] text-center text-white_A700 w-[100%]"
                  onClick={() => {
                    form.handleSubmit(callApi);
                  }}
                >
                  Log in
                </Button>
                <Button
                  className="common-pointer bg-white_A700 border-[1px] border-gray_600 border-solid cursor-pointer flex items-center justify-center sm:min-w-[100%] min-w-[420px] px-[24px] py-[20px] rounded-[10px] w-[auto]"
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
                    Log in with Google
                  </div>
                </Button>
              </div>
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <div className="flex flex-row gap-[8px] items-start justify-center w-[100%]">
                <Text
                  className="font-semibold text-center text-gray_600 tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  Don’t have an account?
                </Text>
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  Create Account
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

export default LogInModal;
