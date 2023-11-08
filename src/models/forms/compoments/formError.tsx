import classNames from 'classnames';
import { FunctionComponent } from 'react';
import { memo } from 'react';

interface Props {
  message?: string;
  className?: string;
  richText?: boolean;
}
const FormError: FunctionComponent<Props> = memo(
  ({ message = '', className = '', richText = false }) => {
    if (!message) {
      return null;
    }
    const dangerouslySetInnerHTML = richText
      ? {
          dangerouslySetInnerHTML: { __html: message as string },
        }
      : {};
    return (
      <div
        className={classNames(
          `${message ? ' flex' : ' hidden'}`,
          className,
          ` bg-error-100  py-[2px]  px-1  rounded-sm  items-start  gap-1`,
        )}
      >
        <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          opacity='0.3'
          d="M14.0013 4.66797C8.84464 4.66797 4.66797 8.84464 4.66797 14.0013C4.66797 19.158 8.84464 23.3346 14.0013 23.3346C19.158 23.3346 23.3346 19.158 23.3346 14.0013C23.3346 8.84464 19.158 4.66797 14.0013 4.66797ZM15.168 19.8346H12.8346V17.5013H15.168V19.8346ZM15.168 15.168H12.8346V8.16797H15.168V15.168Z"
          fill="#D92D20"
        />
        <path
          d="M13.987 2.33203C7.54703 2.33203 2.33203 7.5587 2.33203 13.9987C2.33203 20.4387 7.54703 25.6654 13.987 25.6654C20.4387 25.6654 25.6654 20.4387 25.6654 13.9987C25.6654 7.5587 20.4387 2.33203 13.987 2.33203ZM13.9987 23.332C8.84203 23.332 4.66536 19.1554 4.66536 13.9987C4.66536 8.84203 8.84203 4.66536 13.9987 4.66536C19.1554 4.66536 23.332 8.84203 23.332 13.9987C23.332 19.1554 19.1554 23.332 13.9987 23.332ZM12.832 17.4987H15.1654V19.832H12.832V17.4987ZM12.832 8.16536H15.1654V15.1654H12.832V8.16536Z"
          fill="#D92D20"
        />
      </svg>
        <span
          className=" text-sm  text-error-600  font-light  flex-1"
          {...dangerouslySetInnerHTML}
        >
          {message}
        </span>
      </div>
    );
  },
);

FormError.displayName = 'FormError';
export default FormError;
