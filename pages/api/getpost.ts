import { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db";

export default async function getPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.body.id;
  const p = await db.post.findUnique({ where: { id: +postId } });
  console.log(p);
  res.status(200).json({ ok: true });
}
