import React, { useEffect, useRef } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import DateRangePicker from '../../components/datapicker';
import * as yup from "yup";
import moment from 'moment';

const ChildComponent = (value:any) => {
  const { register, handleSubmit } = useFormContext();

  const onSubmit = (data:any) => {
    console.log(data);
  };
  // const schema = yup.string().matches(
  //   /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/([0-9]{2})$/,
  //   'Invalid date format'
  // ).test('valid-date', 'Date should not be less than 100 years ago or in the future', function (value) {
  //   const currentDate = moment();
  //   const minDate = moment().subtract(100, 'years');
  //   const selectedDate = moment(value, 'DD/MM/YY');
  
  //   return selectedDate.isValid() && selectedDate.isBetween(minDate, currentDate, null, '[]');
  // });
  const schema = yup.string().required();
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
  const vaild = ()=>{
    const schema = yup.number().required('Please input a number.');
    const text = document.getElementById('text');
    if (text instanceof HTMLInputElement) {
      const value = text.value;
      console.log(value);
      schema.validate(value).then(valid => console.log(valid, '113333333333333'))
      .catch(err => console.log(err.errors[0], '22333333'));
    }
  }
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const weeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const departOptions = {
    yearMonthSingle: true,
    autoUpdateInput: false,
    singleDatePicker: true,
    startDate: '28/09/2023',
    opens: 'center',
    showDropdowns: true,
    minDate: '22/09/2023',
    locale: {
      applyLabel: 'OK',
      format: 'DD/MM/YYYY',
      monthNames: months,
      daysOfWeek: weeks,
    },
  };
  const test = document.getElementById('newdom');
  useEffect(()=>{
  const myDataPicker = new DateRangePicker(test, departOptions);
  }, [])
  return (
    <div>
       <input className='bg-purple-500 w-[100px] h-[34px]' type="text" id="text" />
      <button className='text-xs font-normal bg-blue-400' type="submit" onClick={vaild}>Submit</button>
      <div>
      <input id="newdom" type="text" />
      data
    </div>
      {/* <ParentComponent /> */}
    </div>
  );
};

export default Person;
