import { FunctionComponent} from 'react';
import { memo } from 'react';
import  ErrorIcon  from './error';

interface Props {
  message: string | undefined;
  className?: string;
}
const FormError: FunctionComponent<Props> = memo(
  ({ message = '', className = '' }) => {
    if (!message) {
      return null;
    }
    return (
      <div
      >
        <ErrorIcon width={16} height={16} color="#D92D20" />
        <span className="tw-text-sm tw-text-error-600 tw-font-light tw-flex-1">
          {message}
        </span>
      </div>
    );
  },
);

FormError.displayName = 'FormError';
export default FormError;
