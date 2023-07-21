import { UnionFieldProps } from "Type/type";
import { FunctionComponent } from "react";
import {
    Control,
    Controller,
    FieldPath,
    FieldValues,
    RegisterOptions,
  } from 'react-hook-form';
  export type FieldType = 'input' | 'select' | 'datepicker' | 'datemask';
  interface Props extends UnionFieldProps {
    fieldType: FieldType;
    rules?: Omit<
      RegisterOptions<FieldValues, FieldPath<FieldValues>>,
      'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >;
    control: Control<FieldValues>;
    label?: string;
    required?: boolean;
    placeholder?: string;
  }
  
const Summary:FunctionComponent =()=>{
    return (
        <div>
            {/* <Controller name="test" rules={{
                validate: {
                  valid: (value) => {
                    if (!value) {
                      return true;
                    }
                    if (/^[0-9]{10}$/.test(value)) {
                      let sum = 0;
                      Array.from(value).forEach((item, index) => {
                        if (index < value.length - 1) {
                          sum += Number(value.charAt(index));
                        }
                      });
                      // eslint-disable-next-line eqeqeq
                      if (sum % 7 == value.substring(value.length - 1)) {
                        return true;
                      }
                      return 'Please enter a valid Velocity Frequent Flyer number.';
                    }
                    return 'Please enter a valid 10-digit Velocity Frequent Flyer number.';
                  },
                },
              }}
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <div>
                    输入名字：<input type="text" placeholder="Enter your Velocity number"/>
                  </div>
                );
              }}
              /> */}

        </div>
    )
}
export default Summary;