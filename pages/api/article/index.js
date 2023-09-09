import { createRouter } from 'next-connect';

import dbconnect from '@/backend/config/dbConnect';
import { newArticle } from '@/backend/controllers/articleController';

const router = createRouter();

dbconnect();


router.post(newArticle);

export default router.handler();