import {colors} from "../consts/colors";

export const getErrorColor = (code: number | null, index: number) => {
  return code ? colors.base[index] : colors.other
}