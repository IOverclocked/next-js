import { verify } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { secret } from "./secret";

export const authenticated = (fn: NextApiHandler) => (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.cookies.auth!, secret, function(err, decoded) {
    if (!err && decoded) {
      fn(req, res);
    }

    res.status(401).json({ message: 'Sorry yua are not authenticated ' });
  });
};