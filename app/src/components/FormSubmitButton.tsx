"use client";

import { ComponentProps } from "react";

type FormSubmitButtonProps = {
    children: React.ReactNode,
    className?: string,
// More info about ComponentProps: https://www.totaltypescript.com/react-component-props-type-helper
} & ComponentProps<"button">

export default function FormSubmitButton(
    {children, className} : FormSubmitButtonProps
) {
   return(
    <button
    className={`btn btn-primary ${className}`}
    >{children}</button>
   )
}