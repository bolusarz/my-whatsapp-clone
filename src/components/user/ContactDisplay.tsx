import React, { ReactElement } from "react";
import Image from "next/image";
import classNames from "classnames";

type Prop = {
  image: string;
  title: string;
  date: string;
  subtitle: string;
  subtitleClass?: string;
  iconElement?: ReactElement;
};

const ContactDisplay: React.FC<Prop> = ({
  subtitle,
  date,
  title,
  image,
  iconElement,
  subtitleClass,
}) => {
  return (
    <section className="px-3 py-2 flex items-center gap-3">
      <Image
        src={image}
        alt="Contact Image"
        className="rounded-[8px] overflow-hidden"
        width={60}
        height={60}
      />
      <div className="flex flex-col gap-2 grow text-[#09132C]">
        <p className="text-base font-medium">{title}</p>
        <p className={classNames(subtitleClass, "text-xs")}>{subtitle}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm !text-[10px] text-[#829C99]">{date}</p>
        {iconElement}
      </div>
    </section>
  );
};

export default ContactDisplay;
