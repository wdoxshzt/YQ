export interface Person {
    name:string,
    sex:string,
    age:number,
    address?:string,
}
export interface IFormFieldBaseProps {
    name?: string;
    value?: string | number | undefined;
    onChange?: (_v: string | number | undefined) => void;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    callBack?: (v: string | number | undefined) => void;
    required?: boolean;
    placeholder?: string;
    className?: string;
    error?: string | VNode;
    label?: string;
    containerClassName?: string;
    autoComplete?: 'random' | string;
    isPII?: boolean;
  }
  
export interface InputFieldProps extends IFormFieldBaseProps {
    maxLength?: number;
    prefix?: VNode;
    label?: string;
    pattern?: string;
    type?: string;
  }
export interface DropdownSelectFieldProps extends IFormFieldBaseProps {
    data?: Data[];
    borderColorClass?: string;
    backgroundColorClass?: string;
}
export interface DatepickerFieldProps extends IFormFieldBaseProps {
    dateFormat?: string;
    minDate?: string | Date | number;
    maxDate?: string | Date | number;
    pattern?: string;
  }
  export interface DateMaskFieldProps extends IFormFieldBaseProps {
    minDate?: Date;
    maxDate?: Date;
    inputPattern?: string;
    maskPattern?: string;
  }

export type UnionFieldProps = InputFieldProps &
  DropdownSelectFieldProps &
  DatepickerFieldProps &
  DateMaskFieldProps;

