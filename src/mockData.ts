import { CoworkingSpace } from './types';

export const MOCK_SPACES: CoworkingSpace[] = [
  {
    id: '1',
    name: 'Names (БЦ Антей)',
    neighborhood: 'Центр',
    address: 'ул. Малышева, 44, Екатеринбург',
    rating: 4.9,
    reviewCount: 245,
    description: 'Технологичный «умный» коворкинг в самом центре города. Здесь продумана каждая деталь: от эргономичных кресел до системы климат-контроля. Идеально для IT-специалистов и команд.',
    priceLevel: 3,
    openingHours: 'Круглосуточно',
    photos: [
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Быстрый Wi-Fi', 'Много розеток', 'Центр', 'Умный офис'],
    wifiScore: 5,
    socketScore: 5,
    noiseLevel: 'quiet',
    callFriendly: true,
    coffee: true,
    meetingRooms: true,
    parking: true,
    bestFor: ['IT-команды', 'Глубокая работа', 'Встречи'],
    reviews: [
      {
        id: 'r1',
        userName: 'Михаил Решетников',
        rating: 5,
        text: 'Лучший коворкинг в городе. Интернет летает, кресла безумно удобные. Очень крутая атмосфера.',
        date: '2024-04-10',
        tags: ['Wi-Fi', 'Комфорт']
      }
    ]
  },
  {
    id: '2',
    name: 'Ельцин Центр (Коворкинг)',
    neighborhood: 'Набережная',
    address: 'ул. Бориса Ельцина, 3, Екатеринбург',
    rating: 4.7,
    reviewCount: 156,
    description: 'Просторный коворкинг с панорамным видом на город и набережную. Находится в главном культурном центре Екатеринбурга. Здесь всегда кипит жизнь и проходят интересные события.',
    priceLevel: 2,
    openingHours: '09:00 - 21:00',
    photos: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Вид на город', 'Культурная среда', 'Хороший кофе'],
    wifiScore: 4,
    socketScore: 4,
    noiseLevel: 'moderate',
    callFriendly: true,
    coffee: true,
    meetingRooms: true,
    parking: true,
    bestFor: ['Фрилансеры', 'Нетворкинг', 'Творчество'],
    reviews: [
      {
        id: 'r2',
        userName: 'Анна Васильева',
        rating: 4,
        text: 'Вид просто потрясающий! Иногда бывает шумно из-за мероприятий, но атмосфера вдохновляет.',
        date: '2024-03-15',
        tags: ['Вид', 'Атмосфера']
      }
    ]
  },
  {
    id: '3',
    name: 'Соль (Sol)',
    neighborhood: 'Площадь 1905 года',
    address: 'ул. Химиков, 3, Екатеринбург',
    rating: 4.8,
    reviewCount: 189,
    description: 'Индустриальный стиль, кирпичные стены и высокие потолки. Один из первых и самых душевных коворкингов города с сильным сообществом.',
    priceLevel: 2,
    openingHours: '09:00 - 22:00',
    photos: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517502884422-41eaadeff171?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Лофт', 'Сообщество', 'Тихо', 'Уютно'],
    wifiScore: 5,
    socketScore: 4,
    noiseLevel: 'quiet',
    callFriendly: false,
    coffee: true,
    meetingRooms: true,
    parking: false,
    bestFor: ['Дизайнеры', 'Стартапы', 'Тихая работа'],
    reviews: []
  },
  {
    id: '4',
    name: 'Kontora',
    neighborhood: 'Центр',
    address: 'ул. Малышева, 31а, Екатеринбург',
    rating: 4.5,
    reviewCount: 74,
    description: 'Минималистичное и строгое пространство для тех, кто ценит эстетику и тишину. Ничего лишнего, только вы и ваши задачи.',
    priceLevel: 2,
    openingHours: '09:00 - 20:00',
    photos: [
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Минимализм', 'Очень тихо', 'Удобные столы'],
    wifiScore: 4,
    socketScore: 5,
    noiseLevel: 'quiet',
    callFriendly: true,
    coffee: true,
    meetingRooms: false,
    parking: true,
    bestFor: ['Аналитика', 'Кодинг', 'Одиночки'],
    reviews: []
  },
  {
    id: '5',
    name: 'Free People',
    neighborhood: 'Центр',
    address: 'ул. Радищева, 6а, Екатеринбург',
    rating: 4.6,
    reviewCount: 92,
    description: 'Стильный коворкинг с элементами бохо. Здесь много растений, мягкого света и уютных зон для работы. Отличное место для тех, кто не любит офисную строгость.',
    priceLevel: 2,
    openingHours: '10:00 - 22:00',
    photos: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Растения', 'Уют', 'Креатив', 'Стиль'],
    wifiScore: 4,
    socketScore: 4,
    noiseLevel: 'moderate',
    callFriendly: true,
    coffee: true,
    meetingRooms: true,
    parking: false,
    bestFor: ['Блогеры', 'Маркетологи', 'Встречи с клиентами'],
    reviews: []
  },
  {
    id: '6',
    name: 'Names (Clever Park)',
    neighborhood: 'Парковый',
    address: 'ул. Ткачей, 23, Екатеринбург',
    rating: 4.9,
    reviewCount: 132,
    description: 'Второй филиал Names в одном из лучших бизнес-кварталов города. Современная архитектура, рядом парк Маяковского и множество кафе.',
    priceLevel: 3,
    openingHours: 'Круглосуточно',
    photos: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Премиум', 'Парк рядом', 'Безопасность', '24/7'],
    wifiScore: 5,
    socketScore: 5,
    noiseLevel: 'quiet',
    callFriendly: true,
    coffee: true,
    meetingRooms: true,
    parking: true,
    bestFor: ['Корпоративные команды', 'Топ-менеджмент'],
    reviews: []
  },
  {
    id: '7',
    name: 'Теплица (Teplitsa)',
    neighborhood: 'Центр',
    address: 'ул. Тургенева, 13, Екатеринбург',
    rating: 4.4,
    reviewCount: 68,
    description: 'Демократичный коворкинг с легкой и дружелюбной атмосферой. Подходит для студентов и начинающих специалистов.',
    priceLevel: 1,
    openingHours: '10:00 - 20:00',
    photos: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Бюджетно', 'Студенты', 'Дружелюбно'],
    wifiScore: 3,
    socketScore: 4,
    noiseLevel: 'moderate',
    callFriendly: true,
    coffee: false,
    meetingRooms: true,
    parking: false,
    bestFor: ['Студенты', 'Простые задачи', 'Фрилансеры'],
    reviews: []
  },
  {
    id: '8',
    name: 'Коворкинг в БЦ Высоцкий',
    neighborhood: 'Центр',
    address: 'ул. Малышева, 51, Екатеринбург',
    rating: 4.5,
    reviewCount: 45,
    description: 'Работа на высоте птичьего полета. Самый высокий небоскреб за пределами Москвы. Статусное место для важных переговоров.',
    priceLevel: 4,
    openingHours: '08:00 - 22:00',
    photos: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000'
    ],
    tags: ['Небоскреб', 'Статус', 'Панорама', 'Престиж'],
    wifiScore: 4,
    socketScore: 3,
    noiseLevel: 'moderate',
    callFriendly: true,
    coffee: true,
    meetingRooms: true,
    parking: true,
    bestFor: ['Переговоры', 'Предприниматели', 'Визиты партнеров'],
    reviews: []
  }
];
