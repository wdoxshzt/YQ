import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import SwitchButtons from './SwitchButtons';
import FormError from './formError';
import './index.scss';

const schema = yup.object().shape({
  residence: yup.number().test('res','please select yes or no!', (value)=>{
    console.log(value);
    return (value !== undefined)
  }),
});

const MyComponent = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
                name="residence"
                // rules={{
                //   validate: {
                //     valid: (value) => {
                //       console.log(value, '11');
                //       return (
                //         (value !== -1 && value !== undefined) ||
                //         'Please select "Yes" or "No".'
                //       );
                //     },
                //   },
                // }}
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <>
                      <SwitchButtons {...field} />
                      <FormError message={fieldState.error?.message} />
                    </>
                  );
                }}
              />
      <button type="submit">提交</button>
    </form>
  );
};

export default MyComponent;