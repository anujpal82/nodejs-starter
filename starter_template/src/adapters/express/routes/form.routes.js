import { Router } from 'express';
const router = Router();


router.get('/', (_req, res) => {
  res.send('This is a simple Node.js server using Express.js usig form 1.');
});

export default router