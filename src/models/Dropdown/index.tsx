import classNames from "classnames";
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePopper } from "react-popper";

export const DropDown: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { styles, attributes, update } = usePopper(
    triggerRef.current,
    dropdownRef.current,
    {
      placement: "bottom-start",
      strategy: "absolute",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 5],
          },
        },
      ],
    }
  );
  const toggleDropdown = () => {
    setOpen(!open);
  };
  const handleMouseDown = useCallback(
    (e: any) => {
      if (
        triggerRef.current?.contains(e.target) ||
        dropdownRef.current?.contains(e.target)
      ) {
        return;//avoid repeated triggering
      }
      if (!open) {
        return;
      }
      setOpen(false);
    },
    [triggerRef, open, dropdownRef]
  );
  useEffect(() => {
    if (!update) {
      return;
    }
    if (open) {
      update();
    }
  }, [update, open]);
  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleMouseDown]);
  const [value, setValue] = useState<string>();
  return (
    <>
      <div
        aria-haspopup="listbox"
        className="select-none cursor-pointer"
        tabIndex={0}
        ref={triggerRef}
        onClick={toggleDropdown}
      >
        <span className="material-icons-outlined absolute right-[14px] top-[9px] !text-[20px] !leading-5 text-primary">
          {open ? "expand_less" : "expand_more"}
        </span>
        <input
          tabIndex={-1}
          readOnly
          value={value}
          className={classNames(
            "rounded-lg !px-[14px] select-none !cursor-pointer !py-[9px] text-base !bg-[#F3F1EE] !text-[#49454F]"
          )}
          type="text"
          placeholder="dropdpwn"
        />
      </div>
      <div
        role="listbox"
        ref={dropdownRef}
        style={styles.popper}
        {...attributes.popper}
        className={classNames(
          "boxShadow-card z-[10] w-full rounded-md border border-gray-1100 bg-white py-[5px]",
          open ? "block" : "hidden"
        )}
      >
        <ul>
          <li
            tabIndex={0}
            aria-selected={false}
            role="option"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
              setValue('111111')
            }}
            className={classNames(
              "flex select-dropdown items-center cursor-pointer gap-2 px-[14px] py-[10px] text-base text-[#49454F] hover:bg-[#FFF2F1] hover:!text-[#49454F]"
            )}
          >
            111111
          </li>
          <li
            tabIndex={0}
            aria-selected={false}
            role="option"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
              setValue('222222')
            }}
            className={classNames(
              "flex select-dropdown items-center cursor-pointer gap-2 px-[14px] py-[10px] text-base text-[#49454F] hover:bg-[#FFF2F1] hover:!text-[#49454F]"
            )}
          >
            222222
          </li>
          <li
            tabIndex={0}
            aria-selected={false}
            role="option"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
              setValue('333333')
            }}
            className={classNames(
              "flex select-dropdown items-center cursor-pointer gap-2 px-[14px] py-[10px] text-base text-[#49454F] hover:bg-[#FFF2F1] hover:!text-[#49454F]"
            )}
          >
            333333
          </li>
        </ul>
      </div>
    </>
  );
};
