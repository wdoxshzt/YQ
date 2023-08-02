import { UnionFieldProps } from "Type/type";
import { FunctionComponent } from "react";
import {
    Control,
    Controller,
    FieldPath,
    FieldValues,
    RegisterOptions,
    useForm,
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
    const { control, handleSubmit } = useForm({mode: 'onBlur',});
    const reg= /^\S+@\S+$/i;
    const onSubmit = (data:any) => {
      console.log(data);
    };
    const rules = { required: 'Please enter a last name.', validate: {
      valid: (value:any) => {
        return (
          reg.test(value) ||
          'Please select a valid date - this must be DD/MM/YYYY.'
        );
      },
    }, }
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={rules}
          render={({ field, fieldState: { error } }) => {
            console.log(error);
            console.log(rules);
            return (
                <div>
              <input {...field} placeholder="Email" />
              <input type="number" name="travellers.0.firstName" placeholder="Enter your first name" pattern="[0-9]*" className="input input-bordered w-full"></input>
              {error && <p>{error.message as string}</p>}
            </div>
            )
            
        }}
        />
  
        <button type="submit">Submit</button>
      </form>
    );
}
export default Summary;