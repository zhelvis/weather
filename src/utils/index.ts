import { Decimal } from "decimal.js";

export function convertKelvinToCelsius(tepm: number): number {
  return Decimal.sub(tepm, 273.15).toNumber();
}

export function convertMilesPerHourToMetersPerSeconds(speed: number): number {
  return Decimal.div(speed, 2.237).toNumber();
}

export function purgeNullsFromArray<T>(array: (T | null)[]): T[] {
  return array.filter((el) => el !== null) as T[];
}

export function countStringArrayElementsFrequency(
  array: string[]
): { [key: string]: number } {
  return array.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {} as { [key: string]: number });
}

export function isEmptyObj(obj: Record<string, unknown>): boolean {
  for (const _key in obj) {
    // If the body of the loop starts executing, it means that the object has properties
    return false;
  }
  return true;
}

export function getMostFrequentElementOfStringArray(
  array: string[]
): string | null {
  const frequencyCounter = countStringArrayElementsFrequency(array);

  if (isEmptyObj(frequencyCounter)) {
    return null;
  }

  return Object.entries(frequencyCounter).reduce((acc, curr) =>
    curr[1] >= acc[1] ? curr : acc
  )[0];
}
