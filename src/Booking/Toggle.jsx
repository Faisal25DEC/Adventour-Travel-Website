import { IconButton } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

function Toggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="md"
        position="fixed"
        bottom={4}
        left={4}
        zIndex={"4"}
        onClick={() => {
          dispatch({ type: "THEME" });
        }}
        icon={theme ? <FaSun /> : <FaMoon />}
      />
    </>
  );
}

export default Toggle;
