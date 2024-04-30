import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/db";

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
  const { id, password } = req.body;
  const findUser = await db.user.findMany({
    where: {
      username: id,
      password,
    },
  });
  if (findUser.length > 0) {
    console.log("로그인에 성공 하셨습니다..");
    return res.json({ ok: true });
  } else {
    console.log("로그인에 실패 했습니다.");
    return res.json({ ok: false });
  }
}
