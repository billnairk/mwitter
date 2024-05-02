import { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db";

export default async function uploadPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postText = req.body.writeForm;
  const username = req.body.userName;
  console.log(`${username} ${postText}`);
  // const getId = await db.user.findUnique({
  //   where: {
  //     username,
  //   },
  // });
  // if (getId) {
  //   const uploadPost = await db.post.create({
  //     data: {
  //       userId: getId.id,
  //     },
  //   });
  //   console.log(uploadPost);
  //   return res.json({ ok: true });
  // }
}
