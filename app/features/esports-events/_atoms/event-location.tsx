import LocationPinIcon from '@/assets/icons/location-pin.svg?react';

type Props = {
  location: string;
};

export default function EventLocation({ location }: Props) {
  return (
    <div className="flex items-center gap-1.5">
      <LocationPinIcon
        width={20}
        height={20}
      />
      <p className="font-exo text-sm font-semibold text-[#8F9DA2]">{location}</p>
    </div>
  );
}
