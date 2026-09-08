import { Router } from 'express';
import {
  handleGetAllDestinations,
  handleGetDestinationById,
  handleCreateDestination,
} from './destination.controller';

const router = Router();

router.get('/', handleGetAllDestinations);
router.get('/:id', handleGetDestinationById);
router.post('/', handleCreateDestination);

export default router;