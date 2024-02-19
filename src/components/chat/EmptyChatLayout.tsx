import React from "react";
import Image from "next/image";

type Prop = {};

const EmptyChatLayout: React.FC<Prop> = () => {
  return (
    <section className="flex flex-col items-center gap-6 justify-center h-full text-center">
      <Image
        src="/images/empty_chat.png"
        alt="Empty Chat Illustration"
        width={280}
        height={280}
      />
      <p className="max-w-[302px] mt-1 mx-auto text-[#333E5B] font-medium text-4xl leading-snug">
        Keep your phone connected
      </p>
      <p className="max-w-[586px] mx-auto">
        Whatsapp connects to your phone to sync messages. To reduce data usage.
        connect your phone to Wi-Fi.
      </p>
    </section>
  );
};

export default EmptyChatLayout;
