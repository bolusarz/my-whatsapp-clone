import React, { PropsWithChildren } from "react";
import classNames from "classnames";

type Prop = {
  value: number;
  index: number;
  className?: string;
};

const TabPanel: React.FC<PropsWithChildren<Prop>> = ({
  children,
  value,
  index,
  className,
}) => {
  return (
    <div
      className={classNames(
        {
          block: value === index,
          hidden: value !== index,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TabPanel;
