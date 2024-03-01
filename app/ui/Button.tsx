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
          "p-2 px-4  rounded-lg hover:bg-slate-800 bg-black text-white ",
        "p-2 px-4  rounded-lg bg-black hover:bg-slate-900 text-white"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
