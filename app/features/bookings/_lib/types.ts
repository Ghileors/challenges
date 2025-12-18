export type Booking = {
  id: string;
  title: string;
  apartmentId: string;
  apartmentTitle: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
};

export type DraftBooking = Booking & {
  createdAt: string;
};
