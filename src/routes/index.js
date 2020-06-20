import express from 'express';
import { indexPage, indexnewPage, messagesPage, addMessage  } from '../controllers';
import { modifyMessage, performAsyncAction } from '../middleware';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/new', indexnewPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);

export default indexRouter;