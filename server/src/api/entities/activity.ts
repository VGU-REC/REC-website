import { EntitySchema } from "typeorm";
import { RecEvent, Workshop } from "../../types";

export const RecEventEntity = new EntitySchema<RecEvent>({
  name: "rec-event",
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
    description: {
      type: "text",
      nullable: false,
    },
    date: {
      type: "date",
      nullable: false,
    },
    imagePaths: {
      type: "varchar",
      length: 256,
      nullable: true, // tam thoi true tai chua bik store ntn
      array: true,
    },
  },
});

export const WorkshopEntity = new EntitySchema<Workshop>({
  name: "work-shop",
  columns: {
    host: {
      type: "varchar",
      nullable: false,
      length: 256,
    },
  },
  embeddeds: {
    info: {
      schema: RecEventEntity,
      prefix: false,
    },
  },
});
