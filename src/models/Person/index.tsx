import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from 'moment';

const ChildComponent = (value:any) => {
  const { register, handleSubmit } = useFormContext();

  const onSubmit = (data:any) => {
    console.log(data);
  };
  const schema = yup.string().matches(
    /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/([0-9]{2})$/,
    'Invalid date format'
  ).test('valid-date', 'Date should not be less than 100 years ago or in the future', function (value) {
    const currentDate = moment();
    const minDate = moment().subtract(100, 'years');
    const selectedDate = moment(value, 'DD/MM/YY');
  
    return selectedDate.isValid() && selectedDate.isBetween(minDate, currentDate, null, '[]');
  });
  
  const dataToValidate = '02/03/2001';
  
  schema.validate(dataToValidate)
    .then(valid => console.log(valid, '11'))
    .catch(err => console.log(err, '22'));
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <input className='bg-purple-500 w-[100px] h-[34px]' type="text" value={value.value} {...register('example')} />
      <button className='text-xs font-normal bg-blue-400' type="submit">Submit</button>
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
