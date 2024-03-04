import { encrypt, decrypt } from '../../../src/helpers/caesar.js';

describe('the encrypt helper', () => {
  test('encrypts a text string using the given offset', () => {
    expect(encrypt('Hello', 3)).toEqual('Khoor');
    expect(encrypt('Working software is the measure of progress!'))
      .toEqual('Jbexvat fbsgjner vf gur zrnfher bs cebterff!');
    expect(encrypt("Don't forget to drink your Ovaltine"))
      .toEqual("Qba'g sbetrg gb qevax lbhe Binygvar");
  });
});

describe('the decrypt helper', () => {
  test('decrypts a text string using the given offset', () => {
    expect(decrypt('Khoor', 3)).toEqual('Hello');
    expect(decrypt('Jbexvat fbsgjner vf gur zrnfher bs cebterff!'))
      .toEqual('Working software is the measure of progress!');
    expect(decrypt("Qba'g sbetrg gb qevax lbhe Binygvar"))
      .toEqual("Don't forget to drink your Ovaltine");
  });
});
