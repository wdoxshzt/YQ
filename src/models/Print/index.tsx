import classNames from 'classnames';
import { FunctionComponent, useEffect, useRef } from 'react';
import './index.scss';
interface Traveller {
    tid: string | number;
    first_name: string;
    last_name: string;
    age: number;
    date_of_birth: string;
    email: string;
    phone: string;
    is_primary: boolean;
    state?: string;
    emc?: {
      step: string;
      is_accepted: boolean | null;
    };
  }
  interface ConfirmationState {
    policy: {
      date: string;
      plan: string;
      policy_number: string;
    };
    travellers: Traveller[];
    trip: {
      trip_type: string;
      departure_date: string;
      return_date: string;
      destinations: Array<{ name: string }>;
    };
    conclusion: {
      title: string;
      description: {
        value: string;
      };
    };
  }
export const TripDetails: FunctionComponent = () => {
  const duration = 10;
  const policyMap = [
    {
      'Trip plans: ': '1111',
      'Destination: ': '222',
      'Trip dates: ': `333`,
      'Duration:': `Up to ${duration} days`,
    },
    { 'Policy Number: ': 33, 'Policy Plan: ': 33, 'Policy Issue Date: ': 55 },
  ];
  const travellers = [12,32,44]
  const rows = travellers?.length % 2 == 0 ? travellers.length / 2 + 1 : (travellers.length + 1) / 2 + 1;
  const ele = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const element = ele.current;
    console.log(element, '666666');
  }, [])
  return (
    <>
    <div ref={ele} id="TripDetails" className={classNames('grid grid-flow-row gap-[25px] lg:grid-cols-2', `lg:grid-rows-${rows}`)}>
      {policyMap.map((x, index) => (
        <div key={index} className="rounded-lg border border-[#E4E7EC] px-5 py-[30px] lg:px-[30px]">
          <span className="material-icons mb-[15px] text-primary" style={{ fontSize: '42px' }}>
            {index < 1 ? 'map' : 'receipt_long'}
          </span>
          <h3 className="mb-[15px] text-xl font-bold leading-[23px] text-[#31313C]">
            {index < 1 ? 'Trip Details' : 'Policy Information'}
          </h3>
          <div>
            {Object.entries(x).map(([key, value], keyIndex) => {
              return (
                <p className="max-w-full flex flex-col text-base font-normal leading-7 text-[#4D4D55] lg:flex-row lg:gap-1">
                  <span className="whitespace-nowrap">{key}</span>
                  <span className="font-bold whitespace-break-spaces">{value}</span>
                </p>
              );
            })}
          </div>
        </div>
      ))}
      {travellers.map((item, index) => {
        return (
          <div key={index} className="rounded-lg border border-[#E4E7EC] px-5 py-[30px] lg:px-[30px]">
            <span className="material-icons mb-[15px] text-primary" style={{ fontSize: '42px' }}>
              person
            </span>
            <h3 className="mb-[15px] text-xl font-bold leading-[23px] text-[#31313C]">
              {index < 1 ? 'Primary Traveller' : `Additional traveller ${index + 1 }`}
            </h3>
            <div className="flex flex-col gap-[5px] lg:gap-0">
              <p className="flex flex-col text-base font-normal leading-7 text-[#4D4D55] lg:flex-row lg:gap-1">
                <span>Name: </span>
                <span className="font-bold whitespace-break-spaces break-all">
                  222
                </span>
              </p>
              <p className="flex flex-col text-base font-normal leading-7 text-[#4D4D55] lg:flex-row lg:gap-1">
                <span>Name: </span>
                <span className="font-bold whitespace-break-spaces break-all">
                  222
                </span>
              </p>
              <p className="flex flex-col text-base font-normal leading-7 text-[#4D4D55] lg:flex-row lg:gap-1">
                <span>Date of Birthday: </span>
                <span className="font-bold">333</span>
              </p>
              {index < 1 && (
                <>
                  <p className="flex flex-col text-base font-normal leading-7 text-[#4D4D55] lg:flex-row lg:gap-1">
                    <span>Email: </span>
                    <span className="font-bold whitespace-break-spaces break-all">444</span>
                  </p>
                  <p className="flex flex-col text-base font-normal leading-7 text-[#4D4D55] lg:flex-row lg:gap-1">
                    <span>Mobile: </span>
                    <span className="font-bold">666</span>
                  </p>
                </>
              )}
              <p className="flex flex-col text-base font-normal leading-7 text-[#4D4D55] lg:flex-row lg:gap-1">
                <span>Existing Medical Condition: </span>
                <span className="font-bold">555</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
    <button className='w-[100px] h-10 bg-purple-300 rounded-lg' onClick={()=>{window.print()}}>print</button>
    </>
  );
};
