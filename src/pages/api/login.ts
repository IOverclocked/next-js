import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { secret } from '../../../api/secret';
import cookie from 'cookie';

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open('./mydb.sqlite');

  if (req.method === 'POST') {
    const { id, password, email } = await db.get('select * from person where email = ?', [req.body.email]);
    compare(req.query.password, password, function (err, result) {
      if (!err && result) {
        const claims = { sub: id, personEmail: email };
        const jwt = sign(claims, secret, { expiresIn: '1h' });

        res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: 3600,
          path: '/',
        }));
        res.status(200).json({ message: 'Login success' });
      } else {
        res.status(500).json({ message: 'Ups, something went wrong!' });
      }
    });
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}
