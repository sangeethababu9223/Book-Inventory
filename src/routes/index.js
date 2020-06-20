import express from 'express';
import { indexPage, indexnewPage, messagesPage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/new', indexnewPage);
indexRouter.get('/messages', messagesPage)

export default indexRouter;