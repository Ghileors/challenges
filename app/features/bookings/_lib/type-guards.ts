type Booking = {
  id: string;
  title: string;
  apartmentId: string;
  apartmentTitle: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
};

type DraftBooking = Booking & {
  createdAt: string;
};

export function isDraftBooking(value: unknown): value is DraftBooking {
  if (typeof value !== 'object' || value === null) return false;

  const booking = value as Record<string, unknown>;

  return (
    typeof booking.id === 'string' &&
    typeof booking.title === 'string' &&
    typeof booking.apartmentId === 'string' &&
    typeof booking.apartmentTitle === 'string' &&
    typeof booking.checkIn === 'string' &&
    typeof booking.checkOut === 'string' &&
    typeof booking.guests === 'number' &&
    typeof booking.totalPrice === 'number' &&
    typeof booking.createdAt === 'string'
  );
}
