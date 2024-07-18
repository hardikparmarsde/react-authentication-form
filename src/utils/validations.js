//Supported image formats
export const supportedImageFormats = ['jpg', 'jpeg', 'png']; // Define supported file extensions
export const supportedIconFormats = ['jpg', 'jpeg', 'png', 'svg']; // Define supported file extensions
export const supportedFileFormats = ['exe', 'zip', 'apk', 'ipa']; // Define supported file extensions

//Email address regex
export const emailValidationRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

//Phone number regex
export const phoneValidationRegex = /^(\+|-|\()?\d{1,4}(\)?[-\s]?)?\d{1,4}([-.\s]?\d{1,4})?$/;
// export const phoneValidationRegex = /^\+\d+$/;

// Validate if the input contains only numeric characters
export const numberValidator = (number) => {
  try {
    const numericRegex = /^(?:[\d+()\s]+)?$/;
    return !numericRegex.test(number);
  } catch (err) {
    throw new Error("Failed to validate input");
  }
};

// Check Password length is at least 8 characters
export const checkPasswordLength = (password) => {
  return (password.length >= 6)
};

// Check Password contains at least one uppercase letter
export const checkUppercase = (password) => {
  const pattern = /[A-Z]/;
  return pattern.test(password)
};

// Check Password contains at least one lowercase letter
export const checkLowercase = (password) => {
  const pattern = /[a-z]/;
  return pattern.test(password)
};

// Check Password contains at least one numeric digit
export const checkNumber = (password) => {
  const pattern = /[0-9]/;
  return pattern.test(password)
};
export function secondsToUTCDate(seconds) {
  const milliseconds = seconds * 1000; // Convert seconds to milliseconds
  const date = new Date(milliseconds);
  return date.toUTCString(); // Convert to UTC date string
}

export function formatDateFromTimestamp(timestamp) {
  // Convert Unix timestamp to milliseconds
  let date = new Date(timestamp * 1000);

  // Array of month names
  let monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // Extract date components
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();

  // Format the date
  let formattedDate = `${day}-${monthNames[monthIndex]}-${year}-${hours}`;

  return formattedDate;
}

export function convertToDayAndTime(seconds) {
  // Input seconds
  // Convert seconds to milliseconds
  const milliseconds = seconds * 1000;

  // Create a new Date object from milliseconds
  const date = new Date(milliseconds);

  // Format the date into the desired string format
  const formattedDate = `${('0' + date.getDate()).slice(-2)}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}, ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
  return formattedDate
}
export function secondsToFullDate(seconds) {
  const milliseconds = seconds * 1000;
  const date = new Date(milliseconds);

  const day = date.getDate().toString().padStart(2, '0');

  // Mapping of month numbers to their abbreviated names
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[date.getMonth()]; // Get the abbreviated month name

  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');

  // Convert hours to 12-hour format and determine AM/PM
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be considered as 12
  const formattedHours = hours.toString().padStart(2, '0');

  // Format the date as desired (e.g., DD-Mon-YYYY, HH:MM AM/PM)
  const formattedDate = `${day}-${month}-${year}, ${formattedHours}:${minutes} ${ampm}`;

  return formattedDate;
}

