import { PrismaClient } from '@prisma/client';
import { CreateDestinationInput } from './destination.types';

const prisma = new PrismaClient();

export async function getAllDestinations() {
  return prisma.destination.findMany({
    include: { attractions: true },
  });
}

export async function getDestinationById(id: string) {
  return prisma.destination.findUnique({
    where: { id },
    include: { attractions: true },
  });
}

export async function createDestination(data: CreateDestinationInput) {
  return prisma.destination.create({
    data,
  });
}