import { createRouter } from 'next-connect';

import dbconnect from '@/backend/config/dbConnect';
import { getArticles, newArticle } from '@/backend/controllers/articleController';

const router = createRouter();

dbconnect();

router.get(getArticles);
router.post(newArticle);

export default router.handler();