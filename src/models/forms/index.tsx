import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from 'moment';
import dayjs from "dayjs";

const minDate = moment();
interface IFormInputs {
  firstName: string;
  lastName: string;
  // age: number;
}
const SignupSchema = yup
  .object().shape({
        firstName: yup.string()
        // .min(moment('1900-01-02', 'YYYY-MM-DD').toDate(), 'error,min date')
        // .max(moment().toDate(), 'error,max date')
        .required('Please input  a birth'),
    lastName: yup.string().defined().required('111111111111111'),
  })

function MyForm() {
  const methods = useForm<IFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(SignupSchema)
  });
  const { control, handleSubmit } = methods;
  const onSubmit = (data: IFormInputs) => {
    alert(JSON.stringify(data));
  };
//   const str = "25/12/1995";
// const parts = str.split('/'); // 将字符串按照"/"分割成多个部分
// // 交换月份和日期的位置
// const convertedStr = `${parts[1]}/${parts[0]}/${parts[2]}`;
// console.log(convertedStr); // 输出：12/25/1995
  const inputDate = "31/12/2023";
  const format = "DD/MM/YYYY";
  const date = moment(inputDate, format);
  console.log(date, '3333')
  console.log(dayjs(inputDate, format), '222');
  const currentDate = moment();
const hundredYearsAgo = moment().subtract(100, 'years');

  if (date.isValid() && date.isAfter(hundredYearsAgo) && date.isBefore(currentDate)) {
    console.log("输入的日期格式正确");
  } else if (!date.isAfter(hundredYearsAgo)) {
    console.log("输入的日期太小");
  } else if(!date.isBefore(currentDate)) {
    console.log('时间太大')
  }

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => {
            return (
                <div>
              <input {...field} placeholder="Email" />
              {error && <p>{error.message as string}</p>}
            </div>
            )
            
        }}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => {
            return (
                <div>
              <input {...field} placeholder="firstName" />
              {error && <p>{error.message as string}</p>}
            </div>
            )
            
        }}
        />
      <input type="submit" />
    </form>
  );
}

export default MyForm;
