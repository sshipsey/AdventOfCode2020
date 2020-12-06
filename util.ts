export const sum = (a: number, b: number) => a + b;

export const stripCr = (g: string) => g.replace(/\n/g, '');

export const countByString = (str: string) =>
  [...str].reduce((map: { [key: string]: number }, char: string) => {
    map[char] = char in map ? map[char] + 1 : 1;
    return map;
  }, {});

export const flat = (arr: any[]) => [].concat(...arr);
