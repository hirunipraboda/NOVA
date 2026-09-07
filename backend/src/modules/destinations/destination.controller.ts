import { Request, Response } from 'express';
import { getAllDestinations, getDestinationById, createDestination } from './destination.service';

export async function handleGetAllDestinations(req: Request, res: Response) {
  try {
    const destinations = await getAllDestinations();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
}

export async function handleGetDestinationById(req: Request, res: Response) {
  try {
    const destination = await getDestinationById(req.params.id);
    if (!destination) {
      return res.status(404).json({ error: 'Destination not found' });
    }
    res.json(destination);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch destination' });
  }
}

export async function handleCreateDestination(req: Request, res: Response) {
  try {
    const destination = await createDestination(req.body);
    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create destination' });
  }
}