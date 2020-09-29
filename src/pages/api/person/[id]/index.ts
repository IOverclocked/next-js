import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';

export default async function getPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open('./mydb.sqlite');

  if (req.method === 'PUT') {
    const { body: { email, name } } = req;
    const statement = db.prepare('UPDATE person SET name = ?, email = ? where id = ?');
    const result = (await statement).run(name, email, req.query.id);
    (await result).finalize();
  }
  const person = await db.get('select * from person where id = ?', [req.query.id]);

  res.json(person);
}
