export function getAbbreviation(subject) {
  // Split the subject name by spaces
  const words = subject.split(" ");

  // Initialize an empty string to store the abbreviation
  let abbreviation = "";

  // Loop through each word in the subject name
  for (let word of words) {
    // Get the first character of each word and convert it to uppercase
    abbreviation += word.charAt(0).toUpperCase();
  }

  // Return the abbreviation
  return abbreviation;
}
