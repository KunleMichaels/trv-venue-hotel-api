
export type User = {
    id: string;
    name: string;
    // payment information
}

export type Room = {
    id: string;
    name: string;
    description: string;
    max_occupancy: 1 | 2 | 3 | 4;
    rating: 1 | 2 | 3 | 4 | 5;
    price_in_usd: number;
    available: boolean;
}

export type Amenity = 'free_parking' | 'free_wifi' | 'gym' | 'pets' | 'pool' | 'restaurant' | 'spa';

export type Hotel = {
    id: string;
    name: string;
    description: string;
    distance_to_venue: number;
    rating: 1 | 2 | 3 | 4 | 5;
    price_category: 'low' | 'medium' | 'high';
    amenities: [Amenity?, Amenity?, Amenity?, Amenity?, Amenity?]
    images: string[];
    rooms: Room[];
}