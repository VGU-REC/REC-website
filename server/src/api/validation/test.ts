import {
  object,
  string,
  number,
  date,
  InferType,
  isSchema,
  reach,
  ValidationError,
  lazy,
} from "yup";
import { generateID } from "../helpers/generateID";

let userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email().required(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});
const description = userSchema.describe();
// console.log(description)
const test = async () => {
  try {
    const value = await userSchema.validate(
      {
        name: "hehe",
        email: "haha@gmail.com",
        age: 24,
        bucu: "yes",
        haha: true,
      },
      { abortEarly: false, stripUnknown: true }
    );
    console.log(value);
  } catch (error) {
    console.log((error as ValidationError).errors);
  }
};
// userSchema.typeError(`${value} `)
test();
type User = InferType<typeof userSchema>;
/* {
  name: string;
  age: number;
  email?: string | undefined
  website?: string | null | undefined
  createdOn: Date
}*/
