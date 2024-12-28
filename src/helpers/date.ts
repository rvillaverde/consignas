export const parseDate = (dateString: string): Date | null => {
  // Split the input string by '/' to extract MM, DD, and YYYY
  const [month, day, year] = dateString.split('/').map(Number);

  // Check if all values are valid (between 1 and 12 for month, 1-31 for day, and valid year)
  if (month < 1 || month > 12 || day < 1 || day > 31 || isNaN(year)) {
    return null; // Return null if the input is not a valid date
  }

  // Create a new Date object (note: months in JavaScript Date are 0-indexed)
  const date = new Date(year, month - 1, day);

  // Check if the created date matches the input (to avoid invalid dates like 02/30/2024)
  if (
    date.getDate() !== day ||
    date.getMonth() !== month - 1 ||
    date.getFullYear() !== year
  ) {
    return null; // Return null for invalid dates
  }

  return date;
};

export const formatDate = (date: Date): string =>
  `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
