import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextApiRequest } from "next";

export default function middleware(req: NextApiRequest) {
  return withAuth(req);
}

export const config = {
    matcher: ["/"]
}