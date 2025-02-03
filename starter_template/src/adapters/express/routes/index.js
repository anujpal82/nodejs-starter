import { Router } from 'express';
import formRoutes from './form.routes.js';
import stepRoutes from './step.routes.js';


const router = Router();

router.use('/step', stepRoutes);
router.use('/form', formRoutes);



export default router;
