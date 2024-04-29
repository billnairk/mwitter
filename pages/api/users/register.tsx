import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/db";

export default async function Reister(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, password } = req.body;
  let user;
  const findUser = await db.user.findUnique({
    where: {
      username: id,
    },
  });
  if (findUser) {
    console.log("이미 존재하는 아이디입니다.");
    return res.status(200).json({ ok: true });
  } else {
    user = await db.user.create({
      data: {
        username: id,
        password,
      },
    });
    console.log(`${id}, 아이디 생성 완료했습니다.`);
    return res.status(200).json({ ok: true });
  }
}
