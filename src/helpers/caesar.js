
import { DEFAULT_OFFSET, ALPHABET } from '../config/settings';

export const encrypt = (inputString, shiftBy = DEFAULT_OFFSET) => {
  const result = [];

  for (let i = 0; i < inputString.length; i += 1) {
    const char = inputString[i];
    const isUpperCase = char === char.toUpperCase();
    const index = ALPHABET.indexOf(char.toLowerCase());

    if (index !== -1) {
      // Shift the character by the specified number of positions
      let shiftedIndex = (index + shiftBy) % ALPHABET.length;
      if (shiftedIndex < 0) {
        shiftedIndex += ALPHABET.length;
      }

      // Use the case information to reconstruct the shifted character
      const shiftedChar = isUpperCase
        ? ALPHABET[shiftedIndex].toUpperCase()
        : ALPHABET[shiftedIndex];

      result.push(shiftedChar);
    } else {
      // Keep non-alphabetical characters unchanged
      result.push(char);
    }
  }

  // Join the characters in the result array to form the encrypted string
  return result.join('');
};

export const decrypt = (word, unshiftBy = DEFAULT_OFFSET) => encrypt(word, -unshiftBy);
