import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite'

export default async function getAllVehicleById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open('./mydb.sqlite');
  const vehicle = await db.get('select * from vehicle where id = ?', [req.query.id]);

  res.json(vehicle);
}
