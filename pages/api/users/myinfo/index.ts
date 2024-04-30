import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";

export default async function Myinfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log(req);
  // console.log(req.url);
  // const urlArray = await req.url?.split("/api/users/myinfo/");
  // if (urlArray && urlArray[1] !== undefined) {
  //   let userId = +urlArray[1];
  // console.log(userId);

  // userId가 유효한 값이 있는 경우에만 findUnique 메서드 실행
  //   if (!isNaN(userId)) {
  //     });
  const myProfile = await db.user.findUnique({
    where: {
      id: 1,
    },
  });
  //     console.log(myProfile);
  //   }
  // }
  // if (userId !== undefined) {
  //   userId = +urlArray[1];
  //   const myProfile = await db.user.findUnique({
  //     where: {
  //       id: userId,
  //     },
  //   });
  //   console.log(myProfile);
  // }

  res.json({
    ok: true,
    myProfile,
  });
}
