import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Sidebar from "@/components/layout/Sidebar";
import { EmptyChatLayout } from "@/components";

export default async function Home() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <main className="min-h-screen grid grid-cols-[minmax(200px,_360px)_1fr]">
      <Sidebar user={user} className="bg-[#F5FAFC] py-5 px-6" />
      <div className="bg-[#FAFAFA]">
        <EmptyChatLayout />
      </div>
    </main>
  );
}
