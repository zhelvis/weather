import {
  convertKelvinToCelsius,
  convertMilesPerHourToMetersPerSeconds,
  countStringArrayElementsFrequency,
  getMostFrequentElementOfStringArray,
  isEmptyObj,
  purgeNullsFromArray,
} from "../index";

describe("Test Utils Functions", () => {
  test("Conver Kelvin to Celsius", () => {
    expect(convertKelvinToCelsius(0)).toBe(-273.15);
    expect(convertKelvinToCelsius(274.159999999999)).toBe(1.009999999999);
  });

  test("convert Miles Per Hour To Meters PerSeconds", () => {
    expect(convertMilesPerHourToMetersPerSeconds(1)).toBe(0.4470272686633885);
    expect(convertMilesPerHourToMetersPerSeconds(0)).toBe(0);
  });

  test("Purge Nulls From Array", () => {
    const arr = [null, null, "a", 4, null, "b", 3, null];
    expect(purgeNullsFromArray(arr)).toEqual(["a", 4, "b", 3]);
    expect(purgeNullsFromArray([])).toEqual([]);
  });

  test("Count String Array Elements Frequency", () => {
    const arr = ["foo", "bar", "baz", "bar", "bar", "foo"];
    expect(countStringArrayElementsFrequency(arr)).toEqual({
      foo: 2,
      bar: 3,
      baz: 1,
    });
    expect(countStringArrayElementsFrequency([])).toEqual({});
  });

  test("Check empty object", () => {
    expect(isEmptyObj({})).toBe(true);
    expect(isEmptyObj({ a: 1 })).toBe(false);
  });

  test("Check empty object", () => {
    expect(isEmptyObj({})).toBe(true);
    expect(isEmptyObj({ a: 1 })).toBe(false);
  });

  test("Get Most Frequent Element Of String Array", () => {
    const arr = ["foo", "bar", "baz", "bar", "bar", "foo"];
    expect(getMostFrequentElementOfStringArray(arr)).toBe("bar");
    expect(getMostFrequentElementOfStringArray([])).toBe(null);
    expect(getMostFrequentElementOfStringArray(["foo", "bar"])).toBe("bar");
  });
});
