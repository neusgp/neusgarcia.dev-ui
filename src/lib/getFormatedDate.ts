export const getFormatedDate = (date: string) => {
  const formattedDate = date.split("-").reverse().join(".");
  return formattedDate;
};
