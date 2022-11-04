import { EntitySchema } from "typeorm";
import { Blog } from "../../types";

export const BlogEntity = new EntitySchema<Blog>({
  name: "blog",
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
    author: {
      type: "varchar",
      length: 256,
      nullable: false,
    },
    content: {
      type: "text",
      nullable: false,
    },
    dateWritten: {
      type: "timestamp",
      nullable: false,
    },
    date: {
      type: "date",
      nullable: false,
    },
  },
});
