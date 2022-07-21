import { EntitySchema } from "typeorm";
import { User, UserRole } from "../../types";

export const UserEntity = new EntitySchema<User>({
  name: "blog",

  columns: {
    id: {
      type: "int",
      generated: true,
      primary: true,
    },
    email: {
      type: "varchar",
      length: 256,
      nullable: false,
    },
    role: {
      type: "enum",
      enum: ["GUEST", "MEMBER", "ADMIN"],
    },
  },
});
