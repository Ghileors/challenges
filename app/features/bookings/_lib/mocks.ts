import type { ApartmentsList, Booking } from './types';

export const mockBookings: Array<Booking> = [
  {
    id: 'booking-001',
    title: 'Cozy apartment in city center',
    apartmentId: 'apt-101',
    apartmentTitle: 'Cozy City Center Apartment',
    checkIn: '2025-04-10',
    checkOut: '2025-04-15',
    guests: 2,
    totalPrice: 750,
  },
  {
    id: 'booking-002',
    title: 'Modern studio near park',
    apartmentId: 'apt-202',
    apartmentTitle: 'Modern Studio Near the Park',
    checkIn: '2025-05-01',
    checkOut: '2025-05-05',
    guests: 1,
    totalPrice: 420,
  },
  {
    id: 'booking-003',
    title: 'Spacious family apartment',
    apartmentId: 'apt-303',
    apartmentTitle: 'Spacious Family Apartment',
    checkIn: '2025-06-12',
    checkOut: '2025-06-20',
    guests: 4,
    totalPrice: 1280,
  },
];

export const mockedApartments: ApartmentsList = [
  {
    id: 'apt-001',
    title: 'Cozy City Center Apartment',
    description: 'A cozy apartment located in the heart of the city.',
    location: {
      city: 'Berlin',
      country: 'Germany',
    },
    image: 'https://picsum.photos/400/300?1',
    pricePerNight: 120,
    currency: 'EUR',
  },
  {
    id: 'apt-002',
    title: 'Modern Studio Near Park',
    description: 'Modern studio apartment with a beautiful park view.',
    location: {
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    image: 'https://picsum.photos/400/300?2',
    pricePerNight: 95,
    currency: 'EUR',
  },
  {
    id: 'apt-003',
    title: 'Spacious Family Apartment',
    description: 'Perfect for families, spacious and fully equipped.',
    location: {
      city: 'Barcelona',
      country: 'Spain',
    },
    image: 'https://picsum.photos/400/300?3',
    pricePerNight: 150,
    currency: 'EUR',
  },
  {
    id: 'apt-004',
    title: 'Charming Old Town Flat',
    description: 'Charming flat located in the historical old town.',
    location: {
      city: 'Prague',
      country: 'Czech Republic',
    },
    image: 'https://picsum.photos/400/300?4',
    pricePerNight: 110,
    currency: 'EUR',
  },
  {
    id: 'apt-005',
    title: 'Luxury Apartment with Sea View',
    description: 'Luxury apartment offering an amazing sea view.',
    location: {
      city: 'Nice',
      country: 'France',
    },
    image: 'https://picsum.photos/400/300?5',
    pricePerNight: 220,
    currency: 'EUR',
  },
];
