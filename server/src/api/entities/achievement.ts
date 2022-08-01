import { EntitySchema } from "typeorm";
import { Achievement } from "../../types";

export const AchievementEntity = new EntitySchema<Achievement>({
  name: "achievement",
  columns: {
    id: {
      type: "varchar",
      length: 32,
      primary: true,
    },
    title: {
      type: "varchar",
      length: 256,
      nullable: false,
    },
    imagePath: {
      type: "varchar",
      length: 1024,
      nullable: false,
    },
    date: {
      type: "timestamp",
      nullable: false,
    },
  },
});
