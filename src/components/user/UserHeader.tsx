import React from "react";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Image from "next/image";

type Prop = {
  user: KindeUser | null;
};

const UserHeader: React.FC<Prop> = ({ user }) => {
  return (
    <div className="flex justify-between items-center">
      {user?.picture ? (
        <Image
          src={user.picture}
          width={40}
          height={40}
          className="rounded-full"
          alt="User profile picture"
        />
      ) : (
        <span className="w-10 h-10 rounded-full bg-[#128C7E] !text-white grid place-content-center">
          {user?.family_name?.at(0)}
          {user?.given_name?.at(0)}
        </span>
      )}
      <span className="icon-[ion--chevron-down] text-xl"></span>
    </div>
  );
};

export default UserHeader;
