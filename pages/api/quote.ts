
import qs from "qs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const query = qs.stringify(req.query);
  const response = await fetch(
    `https://polygon.api.0x.org/swap/v1/quote?${query}`,
    {
      headers: {
        "0x-api-key": "c9f13c84-9fcb-4f42-aa30-a11b0d016aa5",
      },
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}
