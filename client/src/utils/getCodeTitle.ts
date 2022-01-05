export const getCodeTitle = (code: number | null, count: number): string => {
  const codeTitle = code !== null ? code : 'Other'
  return `Error: ${codeTitle}: ${count}`
}
