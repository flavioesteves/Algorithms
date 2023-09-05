import { walkForTsConfig } from "tsconfig-paths/lib/tsconfig-loader";

export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmout = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmout;

  for (; i < breaks.length; i += jmpAmout) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jmpAmout;

  for (let j = 0; j < jmpAmout && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}
