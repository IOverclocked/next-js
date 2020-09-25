import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';

export default async function getAllVehicles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open('./mydb.sqlite');
  const vehicle = await db.all('select * from vehicle');

  res.json(vehicle);
}
