import { ReactElement, JSXElementConstructor } from "react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import InputField from './compoments/inputFied';

function MyForm() {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
    <form
      onSubmit={methods.handleSubmit(onSubmit, (error) => {
        console.log(methods.formState.errors.isValid, "888888");
      })}
    >
      <Controller
        name="confirm"
        rules={{
          validate: {
            valid: (value) => {
              return (
                value === 1 ||
                "Please confirm you have read and understand the Privacy Notice."
              );
            },
          },
        }}
        control={methods.control}
        render={({ field, fieldState }) => {
          return (
            <div className=" flex  flex-col  gap-4">
              <input
                value={field.value}
                ref={field.ref}
                type="text"
                placeholder="input your name"
                onChange={field.onChange}
                onBlur={(value)=>{console.log(value, '888888888')}}
              />
              <p>{fieldState.error?.message}</p>
            </div>
          );
        }}
      />
      <Controller
        name="confirma"
        rules={{
          validate: {
            valid: (value) => {
              return (
                value === 1 ||
                "Please confirm you have read and understand the Privacy Notice."
              );
            },
          },
        }}
        control={methods.control}
        render={({ field, fieldState }) => {
          return (
            <div className=" flex  flex-col  gap-4">
              <input
                value={field.value}
                ref={field.ref}
                type="text"
                placeholder="input your name"
                onChange={field.onChange}
              />
              <p>{fieldState.error?.message}</p>
            </div>
          );
        }}
      />
      <Controller
        name='aaa'
        rules={{required: 'please select'}}
        control={methods.control}
        render={({ field, fieldState }) => {
          return (
            <InputField
              error={fieldState.error?.message as string}
              {...field}
            />
          );
        }}
      />
      <div className="w-[300px] h-[600px] bg-purple-50"></div>
      <button type="submit">Submit</button>
    </form>
    </FormProvider>
  );
}

export default MyForm;
