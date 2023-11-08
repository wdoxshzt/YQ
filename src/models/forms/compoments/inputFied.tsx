import classNames from "classnames";
import { FunctionComponent } from "react";
import { forwardRef } from "react";
import { useId, useRef } from "react";
import FormError from "./formError";

export interface IFormFieldBaseProps {
  name?: string;
  value?: any;
  onChange?: (_v: any | undefined) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  callBack?: (v: string | number | undefined) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
  error?: string;
  renderLabel?: (id: string) => Node;
  labelText?: string;
  containerClassName?: string;
  autoComplete?: "random" | string;
  isPII?: boolean;
}

export interface InputFieldProps extends IFormFieldBaseProps {
  maxLength?: number;
  pattern?: string;
  type?: string;
}

const InputField: FunctionComponent<InputFieldProps> = forwardRef<
  HTMLInputElement,
  InputFieldProps
>(
  (
    {
      value = "",
      onChange = () => {},
      maxLength = 128,
      required,
      placeholder = "",
      className = "",
      error = "",
      labelText = "",
      containerClassName = "",
      pattern,
      type = "text",
      name = "",
      isPII = false,
    },
    ref
  ) => {
    const innerRef = useRef<HTMLInputElement | null>();
    const id = useId();
    const _onFocus = (event: any) => {
      const element = event.currentTarget;
      setTimeout(() => {
        element.scrollIntoView({
          block: "center",
          behavior: "auto",
        });
      }, 200);
    };
    return (
      <>
        <div className={containerClassName}>
          {/* eslint-disable-next-line no-nested-ternary */}
          {labelText ? (
            <label
              htmlFor={`form-contorl-${id}-${name}`}
              className=" text-sm  text-gray-700  mb-[6px]"
            >
              {labelText}
              {required ? <span className=" text-error-500">*</span> : null}
            </label>
          ) : null}
          <div className=" flex  flex-col  gap-2">
            <div className=" relative">
              <input
                id={`form-contorl-${id}-${name}`}
                ref={ref}
                type={type}
                pattern={pattern}
                onInput={(e: any) => {
                  onChange(e.target.value);
                }}
                value={value}
                maxLength={maxLength}
                className={classNames(
                  {
                    pii: isPII,
                  },
                  className,
                  " bg-white  w-full focus: text-gray-900  self-baseline  cm-boxshadow  py-[11px]  outline-none  block  px-[13px]  transition-colors  border  border-solid  font-light  text-gray-500  text-base  rounded-lg"
                )}
                placeholder={placeholder}
              />
            </div>
            <FormError message={error} />
          </div>
        </div>
      </>
    );
  }
);

InputField.displayName = "InputField";
export default InputField;
