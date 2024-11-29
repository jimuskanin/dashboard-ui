// TEXT FIELD STYLES
const textFieldStyles = {
    backgroundColor: "var(--d-gray)",
    borderRadius: "50px",
    "& .MuiOutlinedInput-root": {
        color: "var(--white)",
        fontSize: "small",
        "&::placeholder": {
            color: "var(--l-gray)",
        },
        "& fieldset": {
            border: "none",
        },
        "&:hover fieldset": {
            border: "none",
        },
        "&.Mui-focused fieldset": {
            border: "none",
        },
    },
    "& .MuiInputBase-input::placeholder": {
        color: "var(--l-gray)",
        opacity: 1,
    },
    "& .MuiInputBase-input": {
        color: "var(--white)",
    },
};

export default textFieldStyles;