import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";

export default async function Myinfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const urlArray = await req.url?.split("/api/users/myinfo/");
  let userId;
  if (urlArray) {
    userId = urlArray[1];
    const myProfile = await db.user.findUnique({
      where: {
        username: userId,
      },
    });
    res.json({
      ok: true,
      myProfile,
    });
  }
}
