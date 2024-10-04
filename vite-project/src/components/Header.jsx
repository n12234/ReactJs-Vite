import React from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";

const loginItems = [
    {
      key: "1",
      label: <Link to={"register"}>Đăng ký</Link>,
    },
    {
      key: "2",
      label: <Link to={"login"}>Đăng nhập</Link>,
    },
  ];

const Header = () => {

     
  const loggedItems = [
    {
      key: "1",
      label: <Link to={"/update-info"}>Cập nhật tài khoản</Link>,
    },
    {
      key: "2",
      label: <span>Đăng xuất</span>,
    },
    {
      key: "3",
      label: <Link to={"/forgot"}>Đổi mật khẩu</Link>,
    },
    {
      key: "4",
      label: <Link to={"/forgot-password"}>Quên mật khẩu</Link>,
    }
  ];
  return (
    <>
      <header>
        <div className="bg-blue-600 h-10 flex items-center justify-between">
          <div className="text-white flex h-full px-6">
            <strong className="flex items-center">
              <i className="fa-solid fa-phone pr-1"></i>
              <p>Điện thoại: 0346583243</p>
            </strong>
            <strong className="flex items-center px-6">
              <i className="fa-solid fa-envelope pr-1"></i>
              <p>Email: nhatngo20102002@gmail.com</p>
            </strong>
          </div>
          <div className="user pr-6 text-white">
            {/* {isLoggedIn ? (
              <Dropdown
                menu={{
                  items: loggedItems,
                }}
                placement="bottomLeft"
                arrow
              >
                <div className="text-brown-strong flex items-center gap-1">
                  <div className="h-9 w-9 overflow-hidden rounded-full flex items-center">
                    <img src={amdin} alt="avatar" />{" "}
                  </div>
                  {user?.fullName || "Khách hàng"}
                </div>
              </Dropdown>
            ) : ( */}
              <Dropdown
                menu={{
                  items: loginItems,
                }}
                placement="bottomLeft"
                arrow
              >
                <div className="text-brown-strong ">
                  <i className="fa-solid fa-user"></i> Đăng ký/nhập
                </div>
              </Dropdown>
            {/* )} */}
            {/*  */}
          </div>
        </div>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
