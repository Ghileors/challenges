import { z } from 'zod';

export const BookingSchema = z.object({
  id: z.string(),
  title: z.string(),
  apartmentId: z.string(),
  apartmentTitle: z.string(),
  checkIn: z.string(),
  checkOut: z.string(),
  guests: z.number(),
  totalPrice: z.number(),
});

export type Booking = z.infer<typeof BookingSchema>;

export const DraftBookingSchema = BookingSchema.extend({
  createdAt: z.string(),
});

export type DraftBooking = z.infer<typeof DraftBookingSchema>;

export const DraftBookingsListSchema = z.array(DraftBookingSchema);

export type DraftBookingsList = z.infer<typeof DraftBookingsListSchema>;

export const ApartmentSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  location: z.object({
    city: z.string(),
    country: z.string(),
  }),
  image: z.string(),
  pricePerNight: z.number(),
  currency: z.string(),
});

export type Apartment = z.infer<typeof ApartmentSchema>;

export const ApartmentsListSchema = z.array(ApartmentSchema);

export type ApartmentsList = z.infer<typeof ApartmentsListSchema>;
