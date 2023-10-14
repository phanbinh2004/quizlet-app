import { useUser ,useClerk,SignInButton,SignUpButton,useAuth, RedirectToSignIn } from "@clerk/clerk-react";
import { useEffect, useState,Fragment } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link,useNavigate } from "react-router-dom";
import { Logo } from "../../utils/svg";
import { Dialog, Popover, Transition } from '@headlessui/react';
import {  Tabs } from 'antd';
import slugify from "slugify";
import { Input, Tooltip, Button ,Avatar } from "antd";
import "../../styles/CustomeTabs.scss";
import Tab from "../Tab";
import { PATH } from "../../utils/PATH";
import {
  BellOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { SunMoon, UserCog, Settings, LogOut, Copy, Folder, Users, Menu, X } from "lucide-react";

const { TabPane } = Tabs;

const tabs = [
  { name: "header.tabs.study_sets" },
  { name: "header.tabs.expert_solutions" },
  { name: "header.tabs.folders" },
  { name: "header.tabs.classes" },
]

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('0'); 
    const { t } = useTranslation();
    const navigate = useNavigate();
    useEffect(() => {
        const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        setIsDarkMode(isDark);
    }, []);
    useEffect(() => {
        if (isDarkMode) {
            // Bật chế độ tối
            document.documentElement.classList.add('dark');
        } else {
            // Tắt chế độ tối
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);
    const handleTabChange = (key) => {
        setActiveTab(key);
    };
    const res = useUser();
    const { isSignedIn,userId } = useAuth();
    const { signOut } = useClerk();
    const username = res?.user?.username;
    const emailAddresses = res?.user?.emailAddresses;
    const imageUrl = res?.user?.imageUrl;
    const email = emailAddresses?.[0]?.emailAddress;
    const currentLanguage = i18next.language;
    const createStudy = (type) => {
        if(!isSignedIn || !userId) {
            console.log("not ok");
            return <RedirectToSignIn/>
        }
        navigate(`${PATH.APP}/${slugify(type,{lower: true, strict: true,})}`);
    }
    const titleLinkTab = t(tabs[activeTab.name]).charAt(0).toLowerCase() + t(tabs[activeTab.name]).slice(1);
    return (
      <>
        <header className="h-[7.25rem] md:h-[64px] dark:bg-primary_dark bg-white px-4 border-b-slate-200 border-b">
          <div className="h-full flex items-center justify-between flex-wrap md:flex-nowrap">
            <div className="px-2 h-[30px] hidden md:block">
              <Logo
                className="h-[22px] mt-[3px]"
                fill={!isDarkMode ? "#4255ff" : "#fff"}
              />
            </div>
            <div className="px-2 md:h-full flex items-center justify-center md:hidden ">
              <Menu
                size={24}
                className="cursor-pointer dark:text-white"
                onClick={() => setOpen(true)}
              />
            </div>
            {/* Menu Bar Mobile */}
            <Transition.Root show={open} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-[50%] pr-2">
                      <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="-translate-x-full"
                        enterTo="-translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                      >
                        <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="mt-[9px] mr-[9px]  ml-[auto] flex h-7 items-center">
                              <button
                                type="button"
                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close panel</span>
                                <X className="h-6 w-6" />
                              </button>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>

            {/* home and library*/}
            <div className="h-full md:flex hidden">
              <div className="h-full md:flex hidden whitespace-nowrap">
                <Link
                  to={PATH.APP}
                  className="mx-[0.75rem] dark:text-white text-[14px] font-semibold flex items-center justify-center hover:after:rounded-tr-[0.25rem] hover:after:rounded-tl-[0.25rem] hover:after:absolute hover:after:h-[0.25rem] hover:after:bg-hover_bg hover:after:w-full relative hover:after:bottom-0"
                >
                  {t("header.home")}
                </Link>
              </div>

              <Popover className="relative h-full">
                <Popover.Button className="whitespace-nowrap dark:text-white h-full mx-[0.75rem] text-[14px] font-semibold flex items-center justify-center hover:after:rounded-tr-[0.25rem] hover:after:rounded-tl-[0.25rem] hover:after:absolute hover:after:h-[0.25rem] hover:after:bg-hover_bg hover:after:w-full relative hover:after:bottom-0 outline-none">
                  {t("header.lib")}
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-[#0a092d] dark:text-white">
                    <div className="p-4">
                      <Tabs
                        tabPosition="top"
                        activeKey={activeTab}
                        onChange={handleTabChange}
                      >
                        {tabs.map((tab, i) => (
                          <TabPane
                            key={i}
                            tab={t(tab.name)}
                            className="dark:text-white"
                          >
                            <Tab type={t(tab.name)} />
                          </TabPane>
                        ))}
                      </Tabs>
                    </div>
                    <Link
                      className="border-t-2 border-[#edeff4] bg-gray-50 w-full py-2 px-6 text-[#4245ff] flex font-bold"
                      to={`${PATH.PROFILE}/${slugify(t(tabs[activeTab].name), {
                        lower: true,
                        strict: true,
                      })}`}
                    >
                      {t("header.tabs.view_all")} {titleLinkTab}
                    </Link>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>

            {/* Input Search */}
            <div className="flex grow md:px-6 px-2 order-last md:order-none w-full">
              <Input
                placeholder="Study sets, textbooks, questions,..."
                className="bg-[#f6f7fb] dark:bg-[#2e3856] min-h-[2.75rem] md:min-h-[2.375rem] w-full rounded-full text-[#282e3e] dark:text-[#ffffff] min-w-[15rem] border-[1px solid #d9d9d9] hover:border-[#d9d9d9]  dark:border-[#2e3856] outline-0 placeholder:text-slate-400"
                classNames={{
                  color: "#282e3e",
                }}
              />
            </div>

            {/* Create new study, set, ... */}
            <div className="md:h-full flex">
              <Popover className="relative h-full flex items-center justify-center">
                <Tooltip title="create">
                  <Popover.Button className="h-[40px] w-[40px] rounded-full bg-primary mx-2 hover:bg-[#423ed8] flex items-center justify-center">
                    <PlusOutlined className="text-white font-bold text-[20px]" />
                  </Popover.Button>
                </Tooltip>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 top-full z-10 mt-3 w-screen overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-[#0a092d] max-h-[866px] max-w-[200px]">
                    <div className="px-3 flex flex-col py-2">
                      <Button
                        type="text"
                        className="dark:text-[#f6f7fb] dark:hover:text-[#f6f7fb] w-full dark:hover:bg-indigo-500 flex items-center justify-items-start px-4 text-[14px] font-bold h-[2.5rem]"
                        onClick={() => createStudy("create-set")}
                      >
                        <Copy
                          size={18}
                          className="dark:text-white text-[18px] mr-2"
                        />
                        Study sets
                      </Button>
                      <Button
                        type="text"
                        className="dark:text-[#f6f7fb] dark:hover:text-[#f6f7fb] w-full dark:hover:bg-indigo-500 flex items-center justify-items-start px-4 text-[14px] font-bold h-[2.5rem]"
                        onClick={() => createStudy("create-folder")}
                      >
                        <Folder
                          size={18}
                          className="dark:text-white text-[18px] mr-2"
                        />
                        Folders
                      </Button>
                      <Button
                        type="text"
                        className="dark:text-[#f6f7fb] dark:hover:text-[#f6f7fb] w-full dark:hover:bg-indigo-500 flex items-center justify-items-start px-4 text-[14px] font-bold h-[2.5rem]"
                        onClick={() => createStudy("create-class")}
                      >
                        <Users
                          size={18}
                          className="dark:text-white text-[18px] mr-2"
                        />
                        Class
                      </Button>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

              {isSignedIn && (
                <Popover className="relative h-full hidden md:flex items-center justify-center">
                  <Tooltip title="notice">
                    <Popover.Button className="h-[40px] w-[40px] rounded-full border  dark:border-[#d9dde8] mx-2 flex items-center justify-center">
                      <BellOutlined className="text-[#586380] dark:text-white font-bold text-[20px] " />
                    </Popover.Button>
                  </Tooltip>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute right-0 top-full z-10 mt-3 w-screen overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-[#0a092d] max-h-[866px] max-w-[200px]">
                      <div className="px-3 flex flex-col py-2">
                        <Button
                          type="text"
                          className="dark:text-[#f6f7fb] dark:hover:text-[#f6f7fb] w-full dark:hover:bg-indigo-500 flex items-center justify-items-start px-4 text-[14px] font-bold h-[2.5rem]"
                        >
                          <Copy
                            size={18}
                            className="dark:text-white text-[18px] mr-2"
                          />
                          Study sets
                        </Button>
                        <Button
                          type="text"
                          className="dark:text-[#f6f7fb] dark:hover:text-[#f6f7fb] w-full dark:hover:bg-indigo-500 flex items-center justify-items-start px-4 text-[14px] font-bold h-[2.5rem]"
                        >
                          <Folder
                            size={18}
                            className="dark:text-white text-[18px] mr-2"
                          />
                          Folders
                        </Button>
                        <Button
                          type="text"
                          className="dark:text-[#f6f7fb] dark:hover:text-[#f6f7fb] w-full dark:hover:bg-indigo-500 flex items-center justify-items-start px-4 text-[14px] font-bold h-[2.5rem]"
                        >
                          <Users
                            size={18}
                            className="dark:text-white text-[18px] mr-2"
                          />
                          Class
                        </Button>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              )}

              {isSignedIn && (
                <Popover className="relative h-full hidden items-center justify-center md:flex">
                  <Tooltip title="User">
                    <Popover.Button
                      className={`h-[40px] w-[40px] rounded-full mx-2 flex items-center justify-center ${
                        !imageUrl && "border"
                      } dark:border-[#d9dde8]`}
                    >
                      <Avatar
                        size={40}
                        src={imageUrl}
                        icon={
                          (!imageUrl || imageUrl === "undefined") && (
                            <UserOutlined />
                          )
                        }
                      />
                    </Popover.Button>
                  </Tooltip>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute right-0 top-full z-10 mt-3 w-screen overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-[#0a092d] max-h-[866px] max-w-[220px]">
                      <div className="flex flex-col">
                        <div className="flex flex-row px-[1.5rem] pt-[10px] pb-[16px] items-center">
                          <div>
                            <Avatar
                              size={40}
                              src={imageUrl}
                              icon={
                                (!imageUrl || imageUrl === "undefined") && (
                                  <UserOutlined />
                                )
                              }
                            />
                          </div>
                          <div className="flex flex-col ml-2 ">
                            <div className="text-[#2e3856] dark:text-[#f6f7fb] font-semibold text-[12px] max-w-[7.5rem] overflow-hidden text-ellipsis">
                              {username}
                            </div>
                            <div className="dark:text-[#f6f7fb] text-[12px] font-[400] max-w-[7.5rem] overflow-hidden text-ellipsis">
                              {email}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center flex-col border-t-[1px] border-solid dark:border-[#2e3856] border-[#edeff4] p-2 gap-y-2">
                          <Link
                            to={`${PATH.PROFILE}/${userId}`}
                            className="flex items-center justify-start w-full px-6 h-[40px] hover:bg-[#dde3e7] dark:hover:bg-[#2e26728f] rounded-md text-[14px] text-[#586380]"
                          >
                            <div className="h-full dark:text-white flex items-center justify-center">
                              <UserCog />
                            </div>
                            <div className="h-full dark:text-white flex items-center justify-center ml-2">
                              {t("header.profile")}
                            </div>
                          </Link>
                          <Link
                            to={`${PATH.SETTING}/${userId}`}
                            className="flex items-center justify-start w-full px-6 h-[40px] hover:bg-[#dde3e7] dark:hover:bg-[#2e26728f] rounded-md text-[14px] text-[#586380]"
                          >
                            <div className="h-full dark:text-white flex items-center justify-center">
                              <Settings />
                            </div>
                            <div className="h-full dark:text-white flex items-center justify-center ml-2">
                              {t("header.settings")}
                            </div>
                          </Link>
                          <Button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            type="text"
                            className="flex items-center justify-start w-full px-6 h-[40px] hover:bg-[#dde3e7] dark:hover:bg-[#2e26728f] rounded-md py-0 text-[#586380]"
                          >
                            <div className="h-full dark:text-white flex items-center justify-center">
                              <SunMoon />
                            </div>
                            <div className="h-full dark:text-white flex items-center justify-center ml-2">
                              {currentLanguage === "en"
                                ? `${isDarkMode ? "Light" : "Dark"} ${t(
                                    "header.mode"
                                  )}`
                                : `${isDarkMode ? "Sáng" : "Tối"}`}
                            </div>
                          </Button>
                        </div>
                        <div className="border-t-[1px] border-solid dark:border-[#2e3856] border-[#edeff4] p-2">
                          <Button
                            onClick={signOut}
                            type="text"
                            className="flex items-center justify-start w-full px-6 h-[40px] hover:bg-[#dde3e7] dark:hover:bg-[#2e26728f] rounded-md py-0 text-rose-400 dark:text-rose-500"
                          >
                            <div className="h-ful flex items-center justify-center">
                              <LogOut />
                            </div>
                            <div className="h-ful flex items-center justify-center ml-2">
                              {t("header.logout")}
                            </div>
                          </Button>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              )}
              {isSignedIn && (
                <div className="h-full flex items-center justify-center">
                  <Button
                    type="text"
                    className="h-[40px] w-[120px] text-[12px] truncate md:w-[197px] rounded-lg mx-2 bg-[#ffcd1f] text-[#282e3e] md:text-[14px] font-bold hover:bg-[#ffdc62]"
                  >
                    Quizlet Plus
                  </Button>
                </div>
              )}
              {!isSignedIn && (
                <div className="h-full flex items-center justify-center">
                  <SignInButton className="h-[40px] w-[80px] rounded-lg mx-2 text-[#586380] text-[14px] font-bold hover:bg-[#f6f7fb]">
                    Log in
                  </SignInButton>
                </div>
              )}
              {!isSignedIn && (
                <div className="h-full flex items-center justify-center">
                  <SignUpButton className="h-[40px] w-[80px] rounded-lg mx-2 bg-[#ffcd1f] text-[#282e3e] text-[14px] font-bold hover:bg-[#ffdc62]">
                    Sign up
                  </SignUpButton>
                </div>
              )}
            </div>
          </div>
        </header>
      </>
    );
}
 
export default Header;