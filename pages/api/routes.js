import { serialize } from "cookie";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { password } = req.body;
    
    // Debug log to check values
    console.log({
      receivedPassword: password,
      envPassword: process.env.PAGE_PASSWORD,
      type: {
        received: typeof password,
        env: typeof process.env.PAGE_PASSWORD
      }
    });

    if (process.env.PAGE_PASSWORD !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    res.setHeader('Set-Cookie', serialize(process.env.PASSWORD_COOKIE_NAME, 'true', {
      httpOnly: true,
      path: '/',
    }));

    return res.status(200).json({ message: 'Password correct' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}