import type { Booking } from './types';

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
