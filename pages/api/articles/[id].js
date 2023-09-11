import { createRouter } from 'next-connect';

import dbconnect from '@/backend/config/dbConnect';
import { getArticle } from '@/backend/controllers/articleController';

const router = createRouter();

dbconnect();

router.get(getArticle);

export default router.handler();