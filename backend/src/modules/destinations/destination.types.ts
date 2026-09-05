export interface Destination {
  id: string;
  name: string;
  country: string;
  city: string;
  description?: string;
  createdAt: Date;
}

export interface Attraction {
  id: string;
  destinationId: string;
  name: string;
  category: string;
  openingHours?: string;
  entryFee?: number;
  visitDuration?: number;
  latitude?: number;
  longitude?: number;
  isAccessible: boolean;
  createdAt: Date;
}

export interface CreateDestinationInput {
  name: string;
  country: string;
  city: string;
  description?: string;
}

export interface CreateAttractionInput {
  destinationId: string;
  name: string;
  category: string;
  openingHours?: string;
  entryFee?: number;
  visitDuration?: number;
  latitude?: number;
  longitude?: number;
  isAccessible?: boolean;
}