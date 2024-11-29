import React, { useState } from "react";

import {
    TextField,
    InputAdornment
} from "@mui/material";

import { RxMagnifyingGlass } from "react-icons/rx";

import textFieldStyles from './../customStyles/customStyles';
import displayImg from "./../assets/images/user.jpg";

const Header = () => {
    return (
        <div className="header h-fit w-full flex justify-between items-center p-5">
            {/* SEARCH BOX */}
            <TextField
                sx={textFieldStyles}
                className="px-5 w-[300px]"
                placeholder="Search"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <RxMagnifyingGlass size={20} color={"white"} />
                        </InputAdornment>
                    ),
                }}
            />
            {/* USER'S DISPLAY PICTURE */}
            <img
                src={displayImg}
                className="rounded-full w-[50px] h-[50px]"
            />
        </div>
    );
};

export default Header;
