import { ReactElement, JSXElementConstructor } from "react";
import { Controller, useForm } from "react-hook-form";
import InputField from './compoments/inputFied';

function MyForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    console.log(errors, "888");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (error) => {
        console.log(errors.isValid, "888888");
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
        control={control}
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
        control={control}
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
        control={control}
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
  );
}

export default MyForm;
