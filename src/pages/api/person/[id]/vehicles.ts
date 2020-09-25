import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite'

export default async function getAllVehiclesByPersoneId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open('./mydb.sqlite');
  const allVehicles = await db.all('select * from vehicle where ownerId = ?', [req.query.id]);

  res.json(allVehicles);
}
