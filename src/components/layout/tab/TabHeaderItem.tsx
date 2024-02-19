import React from "react";

type Prop = {
  className?: string;
  label: string;
};

const TabHeaderItem: React.FC<Prop> = ({ className, label }) => {
  return <span className={className}>{label}</span>;
};

export default TabHeaderItem;
