import type { NextApiRequest, NextApiResponse } from "next";
import ReportEmail from "../../emails/ReportEmail";
import { render } from "@react-email/render";
import { handleEmailFire } from "../../lib/email-helper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = await JSON.parse(req.body);

  await handleEmailFire({
    recipient: data.email,
    subject: "Hello",
    html: render(ReportEmail({ ...req.body })),
  });

  return res.status(200).json({ message: "Success" });
}
