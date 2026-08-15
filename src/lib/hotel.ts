export const HOTEL_NAME = "Hotel Solan Regency";
export const PHONE = "+917807557756";
export const PHONE_DISPLAY = "+91 78075 57756";
export const ADDRESS =
  "Opposite Durga Petrol Pump, 3rd Floor, The Mall, Bajoral Khurd, Solan, Himachal Pradesh 173212";
export const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=HOTEL+SOLAN+REGANCY+The+Mall+Bajoral+Khurd+Solan";

export const telHref = `tel:${PHONE}`;

export function waLink(message = "Hello Hotel Solan Regency, I would like to enquire about a room booking.") {
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(message)}`;
}
