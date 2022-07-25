
export const generateID = (data: string, limit: number) => {
  if (data.length > limit) data = data.substring(0, limit);
  data = data.toLowerCase();
  data = data.replace(/ /g, "_");
  return data;
};

let a = "How I met your mother by Tho Phan";

console.log(generateID(a, 20));
