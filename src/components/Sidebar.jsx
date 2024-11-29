import React, { useState } from "react";

import logo from "./../assets/images/logo.png";

import {
    RxDashboard,
    RxCube,
    RxGlobe,
    RxBell,
    RxExit
} from "react-icons/rx";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiCoatHanger } from "react-icons/pi";

const Sidebar = () => {
    const [active1Index, setActive1Index] = useState(0);
    const [active2Index, setActive2Index] = useState(0);

    const first_links = [
        {
            name: "Home",
            icon: <RxDashboard size={20} />
        },
        {
            name: "Orders",
            icon: <RxCube />,
        },
        {
            name: "Stocks",
            icon: <PiCoatHanger />,
        },
        {
            name: "Explore",
            icon: <RxGlobe />,
        }
    ];
    const second_links = [
        {
            name: "Dashboard",
            icon: <LuLayoutDashboard />,
        },
        {
            name: "Notification",
            icon: <RxBell />,
        }
    ];

    return (
        <div className="fixed w-[82px] h-full flex flex-col gap-5 items-center justify-items-center px-2 py-5">
            {/* LOGO */}
            <img
                src={logo}
                className="w-[55px] h-fit pb-2"
                alt="HIKAL"
            />
            {/* NAVIGATION */}
            <div className="h-full flex flex-col gap-4 items-center justify-between">
                {/* LINKS */}
                <div className="flex flex-col items-center justify-center gap-4">
                    {/* FIRST LINKS */}
                    <div className="sidebar relative rounded-full w-[55px] h-fit flex flex-col items-center justify-center">
                        {/* INDICATOR */}
                        <div
                            className="selected absolute w-full flex items-center justify-center top-0 left-0 h-[55px] w-[55px] rounded-full transition-transform duration-300"
                            style={{
                                transform: `translateY(${active1Index * 55}px)`
                            }}
                        ></div>

                        {/* LINKS */}
                        {first_links.map((link, index) => (
                            <button
                                key={index}
                                className={`sidebar-links h-[55px] transition-colors text-white`}
                                onClick={() => setActive1Index(index)}
                            >
                                <span className="text-xl">{link.icon}</span>
                            </button>
                        ))}
                    </div>
                    {/* SECOND LINKS */}
                    <div className="sidebar relative rounded-full w-[55px] h-fit flex flex-col items-center justify-center">
                        {/* INDICATOR */}
                        <div
                            className="selected absolute w-full flex items-center justify-center top-0 left-0 h-[55px] w-[55px] rounded-full transition-transform duration-300"
                            style={{
                                transform: `translateY(${active2Index * 55}px)`
                            }}
                        ></div>

                        {/* LINKS */}
                        {second_links.map((link, index) => (
                            <button
                                key={index}
                                className={`sidebar-links h-[55px] transition-colors text-white`}
                                onClick={() => setActive2Index(index)}
                            >
                                <span className="text-xl">{link.icon}</span>
                            </button>
                        ))}
                    </div>
                </div>
                {/* LOGOUT */}
                <div className="sidebar relative rounded-full w-[55px] h-fit flex flex-col items-center justify-center">
                    <button className={`sidebar-links h-[55px] transition-colors text-white`} >
                        <span className="text-xl">
                            <RxExit size={20} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
