"use client";
import React from "react";
import clsx from "clsx";
import { ReactNode } from "react";
import { FiMenu } from "react-icons/fi";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}
const Button = ({ type, text, onClick, actionButton }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        actionButton &&
          "p-2 px-4  rounded-lg dark:bg-white dark:text-black dark:hover:bg-gray-200 hover:bg-slate-800 bg-black text-white ",
        "p-2 px-4  rounded-lg bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 hover:bg-slate-900 text-white"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
