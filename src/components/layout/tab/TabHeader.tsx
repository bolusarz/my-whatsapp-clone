import React, { useCallback } from "react";
import { ChildrenOfType } from "@/utils";
import { TabHeaderItem } from "@/components";

type Prop = {
  onChange: (index: number) => void;
  children: ChildrenOfType<typeof TabHeaderItem>;
  className?: string;
};

const TabHeader: React.FC<Prop> = ({ children, onChange, className }) => {
  const renderChildren = useCallback(() => {
    if (Array.isArray(children)) {
      return children.map((el, index) => (
        <li
          className="cursor-pointer w-full"
          key={el.props.label}
          onClick={() => onChange(index)}
        >
          {el}
        </li>
      ));
    } else {
      return (
        <li className="cursor-pointer w-full" onClick={() => onChange(0)}>
          {children}
        </li>
      );
    }
  }, [children]);

  return <ul className={className}>{renderChildren()}</ul>;
};

export default TabHeader;
