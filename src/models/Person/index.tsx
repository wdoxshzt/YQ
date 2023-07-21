import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

const ChildComponent = (value:any) => {
  const { register, handleSubmit } = useFormContext();

  const onSubmit = (data:any) => {
    console.log(data);
  };
console.log(value)
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <input className='bg-purple-500 w-[100px] h-[34px]' type="text" value={value.value} {...register('example')} />
      <button type="submit">Submit</button>
    </form>
  );
};

const ParentComponent = () => {
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
        text:'aaa'
    }
  });
  const { watch } = methods;
    const text = watch('text');
  return (
    <FormProvider {...methods}>
      <ChildComponent value={text}/>
    </FormProvider>
  );
};

const Person = () => {
  return (
    <div>
      <h1>Form</h1>
      <ParentComponent />
    </div>
  );
};

export default Person;
