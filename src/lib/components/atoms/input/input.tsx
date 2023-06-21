"use client";

import type { InputProps } from "./input.type";
import { sm } from "#/lib/utils/style/class";
import { forwardRef, useContext, useEffect, useState } from "react";
import { LabelContext } from "../label/label-provider";

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, disabled, value: valueProps, ...props }, ref) => {
  const haveError = useContext(LabelContext);
  const [value, setValue] = useState(valueProps);

  const styles = sm(
    "outline-none bg-background-card border-2 text-white-desc rounded px-3 py-2 w-full",
    "focus:ring-2",
    {
      "border-background-info focus:ring-purple": !haveError,
      "border-danger focus:ring-danger": haveError,

      "brightness-[.7]": disabled
    },
    className
  );

  return <input
    aria-required={props.required}
    aria-disabled={disabled}

    ref={ref}
    className={styles}
    disabled={disabled}
    value={value}
    onChange={(e) => setValue(e.target.value)}
    {...props} />;
});

Input.displayName = "Input";