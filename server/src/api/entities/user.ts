import { EntitySchema } from "typeorm";
import { User } from "../../types";
export const UserEntity = new EntitySchema<User>({
  name: "users",
  columns: {
    id: {
      type: "varchar",
      length: 32,
      primary: true,
    },
    email: {
      type: "varchar",
      length: 64,
      nullable: false,
    },
    role: {
      type: "enum",
      enum: ["MEMBER", "ADMIN"],
      nullable: false,
    },
  },
});
