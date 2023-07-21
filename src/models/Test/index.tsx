import { FunctionComponent } from 'react';

interface Props {
  intoView: (type?: string) => void;
}
export const Test: FunctionComponent<Props> = ({ intoView = () => {} }) => {
  const path = 'aaa';
  const banner = 'bbb';
  const thinkBanner = 'ccc';
  const viewToPolicy = (value:string) => {
    intoView(value);
  };
  return (
    <div>
      <div className="tw-w-full tw-bg-primary-25">
        <div className="tw-container tw-pt-[64px] tw-pb-[38px] md:tw-pb-[80px] tw-relative">
          <span className="md:tw-hidden tw-tracking-[-.02em] tw-text-[48px] tw-font-mu md:tw-text-[30px] md:tw-leading-[38px] tw-text-bluedark-900 tw-leading-[60px] tw-font-medium">
            Thank you,
            <span className="tw-text-primary-800 tw-break-all">
              {' '}
              {thinkBanner}
            </span>
          </span>
          <div className="tw-flex tw-gap-8 md:tw-flex-col tw-mt-6 md:tw-mt-0">
            <img
              src={`${path}/confirmation.svg`}
              alt="xxx"
              className="tw-w-[280px] tw-h-[325px] md:tw-hidden"
            />
            <img
              src={`${path}/confirmation-mobile.svg`}
              alt="xxx"
              className="tw-w-[127px] tw-h-[176px] md:tw-block tw-hidden"
            />
            <span className="tw-hidden tw-tracking-[-.02em] md:tw-block tw-text-[48px] tw-font-mu md:tw-text-[30px] md:tw-leading-[38px] tw-text-bluedark-900 tw-leading-[60px] tw-font-medium">
              Thank you,
              <span className="tw-text-primary-800 tw-break-all">
                {' '}
                {thinkBanner}
              </span>
            </span>
            <div className="tw-break-words tw-my-auto tw-flex tw-flex-col tw-gap-8 md:tw-gap-4 tw-w-[768px] md:tw-w-full">
              <span className="tw-text-[30px] tw-font-mu md:tw-text-[24px] md:tw-leading-[32px] tw-leading-[38px] tw-font-medium tw-text-primary-900">
                {thinkBanner}
              </span>
              <span className="tw-mb-8 md:tw-mb-0 md:tw-mt-4 tw-text-gray-500 tw-font-light md:tw-text-lg tw-text-xl">
                {thinkBanner}
              </span>
              <div className="tw-font-normal md:tw-flex-col md:tw-items-center md:tw-pt-4 tw-pt-8 tw-border-t tw-border-t-gray-200 tw-border-solid tw-border-x-0 tw-border-b-0 tw-text-bluelight-800 tw-text-l tw-flex md:tw-gap-4 tw-gap-8">
                <button
                  type="button"
                  onClick={() => {
                    viewToPolicy('policy');
                  }}
                  className="tw-underline tw-px-0 tw-h-6 tw-bg-primary-25 tw-cursor-pointer"
                >
                  <span className="material-icons-outlined tw-text-[20px] tw-mr-2 tw-align-middle">
                    arrow_downward
                  </span>
                  View Your Policy Summary
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: banner }}
        className="tw-pb-[37.5px] md:tw-pb-0 tw-bg-beige-50"
      />
    </div>
  );
};
