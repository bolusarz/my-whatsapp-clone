import React from "react";

type Prop = {};

const ContactSearch: React.FC<Prop> = () => {
  return (
    <div className="border bg-white border-[D1E4E8] px-4 py-3 rounded-3xl flex items-center gap-2">
      <span className="icon-[ion--search] text-[#9393C1] text-xl"></span>
      <input
        className="bg-transparent placeholder:text-[#9393C1] grow focus-visible:outline-0"
        placeholder="Search or start a new chat"
      />
    </div>
  );
};

export default ContactSearch;
