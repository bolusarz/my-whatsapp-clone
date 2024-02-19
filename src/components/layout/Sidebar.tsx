"use client";

import React, { useState } from "react";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import classNames from "classnames";
import {
  ContactSearch,
  TabHeader,
  TabHeaderItem,
  TabPanel,
  UserHeader,
} from "@/components";
import { friends } from "@/utils";
import ContactDisplay from "@/components/user/ContactDisplay";

type Prop = {
  user: KindeUser | null;
  className?: string;
};

const Sidebar: React.FC<Prop> = ({ user, className }) => {
  const [page, setPage] = useState<number>(0);
  return (
    <aside
      className={classNames(className, "flex gap-6 flex-col relative h-screen")}
    >
      <UserHeader user={user} />
      <ContactSearch />
      <TabHeader
        onChange={setPage}
        className="flex rounded-xl bg-white font-medium text-[#5A6A9D] overflow-hidden"
      >
        <TabHeaderItem
          label="Favourites"
          className={classNames("block text-center px-4 py-3 transition-all", {
            "bg-[#128C7E] text-white font-bold": page === 0,
          })}
        />
        <TabHeaderItem
          label="Friends"
          className={classNames("block text-center px-4 py-3 transition-all", {
            "bg-[#128C7E] text-white font-bold": page === 1,
          })}
        />
        <TabHeaderItem
          label="Groups"
          className={classNames("block text-center px-4 py-3 transition-all", {
            "bg-[#128C7E] text-white font-bold": page === 2,
          })}
        />
      </TabHeader>
      <TabPanel
        className="overflow-y-auto flex-1 flex flex-col gap-2"
        value={page}
        index={0}
      >
        {friends.map((friend) => (
          <ContactDisplay
            key={friend.name}
            image={friend.image}
            title={friend.name}
            date={friend.data}
            subtitle={friend.tagline}
          />
        ))}
      </TabPanel>
      <button className="w-[60px] h-[60px] rounded-full bg-[#128C7E] absolute bottom-7 right-5 grid place-content-center shadow-lg shadow-[#DFF6F4]">
        <span
          className="icon-[eva--message-square-fill] text-white text-2xl -scale-x-100"
          aria-description="Start new Chat"
        ></span>
      </button>
    </aside>
  );
};

export default Sidebar;
