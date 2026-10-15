const phoneNumber = "2348102803169";
const whatsappMessage =
  "Hello Wisdom, I found your portfolio and I'd like to talk about a project.";

export const contactPhoneDisplay = `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)} ${phoneNumber.slice(9)}`;
export const contactPhoneHref = `tel:+${phoneNumber}`;
export const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
