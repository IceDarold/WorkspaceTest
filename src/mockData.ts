import { CoworkingSpace } from './types';

export const MOCK_SPACES: CoworkingSpace[] = [
  {
    id: '1',
    name: 'The Hub Limassol',
    neighborhood: 'Old Town',
    address: 'Ayiou Andreou 12, Limassol 3036',
    rating: 4.8,
    reviewCount: 124,
    description: 'A vibrant community-focused space in the heart of the old town. Perfect for creative professionals and tech nomads.',
    priceLevel: 2,
    openingHours: '08:00 - 20:00',
    photos: [
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Fast Wi-Fi', 'Coffee available', 'Central', 'Community'],
    wifiScore: 5,
    socketScore: 4,
    noiseLevel: 'moderate',
    callFriendly: true,
    coffee: true,
    meetingRooms: true,
    parking: false,
    bestFor: ['Startups', 'Creatives', 'Networking'],
    reviews: [
      {
        id: 'r1',
        userName: 'Alex Nomadi',
        rating: 5,
        text: 'Best vibes in Limassol. The internet is rock solid and the coffee is actually good.',
        date: '2024-03-15',
        tags: ['Wi-Fi', 'Coffee']
      }
    ]
  },
  {
    id: '2',
    name: 'Werkstatt',
    neighborhood: 'Mesa Geitonia',
    address: 'Spyrou Kyprianou 45, Limassol 4003',
    rating: 4.5,
    reviewCount: 89,
    description: 'Industrial chic workspace with high-end furniture and ergonomic focus. Serious work happens here.',
    priceLevel: 3,
    openingHours: '24/7 for members',
    photos: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517502884422-41eaadeff171?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['24/7 Access', 'Quiet', 'Ergonomic', 'Corporate'],
    wifiScore: 4,
    socketScore: 5,
    noiseLevel: 'quiet',
    callFriendly: false,
    coffee: true,
    meetingRooms: true,
    parking: true,
    bestFor: ['Deep Work', 'Corporate Teams', 'Long-term'],
    reviews: [
      {
        id: 'r2',
        userName: 'Elena P.',
        rating: 4,
        text: 'Very quiet and professional. A bit pricey but worth it for a productive day.',
        date: '2024-02-20',
        tags: ['Quiet', 'Ergonomic']
      }
    ]
  },
  {
    id: '3',
    name: 'BeachHouse Nomad',
    neighborhood: 'Agios Tychonas',
    address: 'Amathountos Ave 78, Limassol 4532',
    rating: 4.2,
    reviewCount: 56,
    description: 'Work right by the Mediterranean. Open-air feel, sea breeze, and high-speed internet.',
    priceLevel: 2,
    openingHours: '09:00 - 19:00',
    photos: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Sea View', 'Outdoor Area', 'Casual', 'Fast Wi-Fi'],
    wifiScore: 4,
    socketScore: 3,
    noiseLevel: 'moderate',
    callFriendly: true,
    coffee: true,
    meetingRooms: false,
    parking: true,
    bestFor: ['Casual Work', 'Sun Seekers', 'Short Sessions'],
    reviews: []
  },
  {
    id: '4',
    name: 'The Lab',
    neighborhood: 'City Center',
    address: 'Saripolou 3, Limassol 3036',
    rating: 4.7,
    reviewCount: 112,
    description: 'Modern, minimalist space focused on deep technical work and engineering teams.',
    priceLevel: 2,
    openingHours: '08:30 - 21:00',
    photos: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Deep Work', 'Quiet', 'Many sockets', 'Technical'],
    wifiScore: 5,
    socketScore: 5,
    noiseLevel: 'quiet',
    callFriendly: true,
    coffee: false,
    meetingRooms: true,
    parking: false,
    bestFor: ['Engineers', 'Deep Work', 'Small Teams'],
    reviews: []
  },
  {
    id: '5',
    name: 'Green Desk',
    neighborhood: 'Germasogeia',
    address: 'Kolonakiou 12, Limassol 4040',
    rating: 4.4,
    reviewCount: 45,
    description: 'Eco-friendly space with lots of indoor plants and natural light. Sustainable working.',
    priceLevel: 2,
    openingHours: '09:00 - 18:00',
    photos: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Eco-friendly', 'Plants', 'Natural Light', 'Cozy'],
    wifiScore: 3,
    socketScore: 4,
    noiseLevel: 'moderate',
    callFriendly: true,
    coffee: true,
    meetingRooms: true,
    parking: true,
    bestFor: ['Eco-conscious', 'Designers', 'Freelancers'],
    reviews: []
  },
  {
    id: '6',
    name: 'Coffee & Code',
    neighborhood: 'Columbia Area',
    address: 'Glafkou 22, Limassol 4044',
    rating: 4.0,
    reviewCount: 78,
    description: 'A hybrid entre a speciality coffee shop and a professional coworking space.',
    priceLevel: 1,
    openingHours: '07:30 - 22:00',
    photos: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Budget-friendly', 'Good Coffee', 'Open late', 'Casual'],
    wifiScore: 4,
    socketScore: 3,
    noiseLevel: 'loud',
    callFriendly: true,
    coffee: true,
    meetingRooms: false,
    parking: true,
    bestFor: ['Students', 'Short Sessions', 'Coffee Lovers'],
    reviews: []
  },
  {
    id: '7',
    name: 'Sky Garden',
    neighborhood: 'Limassol Marina',
    address: 'Marina Square 4, Limassol 3601',
    rating: 4.9,
    reviewCount: 156,
    description: 'Luxury coworking with panoramic views of the marina. Premium amenities and networking.',
    priceLevel: 4,
    openingHours: '08:00 - 23:00',
    photos: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Premium', 'Sea View', 'Networking', 'Luxurious'],
    wifiScore: 5,
    socketScore: 5,
    noiseLevel: 'moderate',
    callFriendly: true,
    coffee: true,
    meetingRooms: true,
    parking: true,
    bestFor: ['Startup Founders', 'Executives', 'Clients'],
    reviews: []
  },
  {
    id: '8',
    name: 'The Loft',
    neighborhood: 'Industrial Area',
    address: 'Zakaki St 89, Limassol 3045',
    rating: 4.3,
    reviewCount: 34,
    description: 'Massive open plan loft space. Great for workshops and large team hackathons.',
    priceLevel: 2,
    openingHours: '09:00 - 18:00',
    photos: [
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Large Teams', 'Industrial', 'Flexible', 'Workshops'],
    wifiScore: 4,
    socketScore: 5,
    noiseLevel: 'moderate',
    callFriendly: true,
    coffee: true,
    meetingRooms: true,
    parking: true,
    bestFor: ['Teams', 'Workshops', 'Hackathons'],
    reviews: []
  }
];
