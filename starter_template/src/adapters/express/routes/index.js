import { Router } from 'express';
import formRoutes from './form.routes.js';


const router = Router();

router.use('/form', formRoutes);



export default router;
