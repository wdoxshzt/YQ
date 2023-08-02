import { FunctionComponent } from 'react';
import { forwardRef, useRef } from 'react';

interface Props {
  value?: number;
  /**
   * @params {Number} v (-1 => unselected, 0 => false, 1 => true)
   */
  onChange?: (v: number) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const SwitchButtons: FunctionComponent<Props> = forwardRef<
  HTMLButtonElement,
  Props
>(
  (
    { value = -1, onChange = () => {}, onBlur = () => {}, onFocus = () => {} },
    ref,
  ) => {
    const btnRef = useRef<HTMLButtonElement | null>();
    const handleClick = (_v: number) => {
      if (_v === value) {
        return;
      }
      onChange(_v);
    };
    return (
      <div className="tw-flex tw-gap-3" onBlur={onBlur} onFocus={onFocus}>
        <button
        className={value === 1 ? 'checked btn' : 'btn' }
          ref={(e) => {
            if (typeof ref === 'function') {
              ref(e);
            }
            btnRef.current = e;
          }}
          type="button"
          onClick={() => handleClick(1)}
        >
          {value === 1 ? (
            <span className="material-icons tw-text-success-400 tw-text-[20px]">
              check_circle
            </span>
          ) : null}
          Yes
        </button>
        <button
        className={value === 0 ? 'checked btn' : 'btn' }
          type="button"
          onClick={() => handleClick(0)}
        >
          {value === 0 ? (
            <span className="material-icons tw-text-success-400 tw-text-[20px]">
              check_circle
            </span>
          ) : null}
          No
        </button>
      </div>
    );
  },
);
export default SwitchButtons;
