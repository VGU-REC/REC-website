const generateString = (data: string, limit: number) => {
  if (data.length > limit) data = data.substring(0, limit);
  data = data.toLowerCase();
  data = data.replace(/  /g, ""); //remove redundant white space
  data = data.replace(/ /g, "_");
  return data;
};

const generateUserID = (data: string, limit: number) => {
  const end = data.indexOf("@");
  if (end > limit) data = data.substring(0, limit);
  else data = data.substring(0, end);
  return data;
};
export const generateID = (
  data: string,
  limit: number,
  generateIdFrom: string
) => {
  if (generateIdFrom === "email") return generateUserID(data, limit);
  else return generateString(data, limit);
};
