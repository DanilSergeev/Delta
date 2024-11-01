import { Router, Request, Response } from 'express';

const router = Router();

router.post('/contact', (req: Request, res: Response) => {
    const { name, email, message} = req.body;
    res.json({ message: `${name}` });
});

export default router;