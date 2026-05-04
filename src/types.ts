/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Review {
  id: string;
  userName: string;
  userImage?: string;
  rating: number;
  text: string;
  date: string;
  tags: string[];
}

export type NoiseLevel = 'quiet' | 'moderate' | 'loud';

export interface CoworkingSpace {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  rating: number;
  reviewCount: number;
  description: string;
  priceLevel: 1 | 2 | 3 | 4; // 1 = $, 4 = $$$$
  openingHours: string;
  photos: string[];
  tags: string[];
  wifiScore: number; // 1-5
  socketScore: number; // 1-5
  noiseLevel: NoiseLevel;
  callFriendly: boolean;
  coffee: boolean;
  meetingRooms: boolean;
  parking: boolean;
  bestFor: string[];
  reviews: Review[];
}

export interface FilterState {
  searchQuery: string;
  city: string;
  tags: string[];
}
