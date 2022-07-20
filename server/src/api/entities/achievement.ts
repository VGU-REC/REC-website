import { EntitySchema } from "typeorm";
import { Achievement } from "../../types";

export const AchievementEntity = new EntitySchema<Achievement>({
  name: "achievement",
  columns: {
    id: {
      type: "int",
      generated: true,
      primary: true,
    },
    title: {
      type: "varchar",
      length: 256,
      nullable: false,
    },
    imagePath: {
      type: "varchar",
      length: 256,
      nullable: false,
    },
    date: {
      type: "date",
      nullable: false,
    },
  },
});