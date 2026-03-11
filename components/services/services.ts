export const SERVICES = [
  "Cavity Protection",
  "Root Canal Treatment",
  "Oral Surgery",
  "Teeth Whitening",
  "Teeth Straightening",
  "Dental Implant",
  "Dental Checkup",
  "Dental X-Ray",
  "Pediatric Dentistry",
  "Deep Cleaning",
] as const;

export type ServiceName = (typeof SERVICES)[number];
