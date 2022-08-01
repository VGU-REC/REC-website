import { EntitySchema, EntitySchemaColumnOptions } from "typeorm";
import { RecEvent, Workshop } from "../../types";

const activity = {
  id: {
    type: "varchar",
    length: 32,
    primary: true,
  } as EntitySchemaColumnOptions,
  title: {
    type: "varchar",
    length: 256,
    nullable: false,
  } as EntitySchemaColumnOptions,
  description: {
    type: "text",
    nullable: false,
  } as EntitySchemaColumnOptions,
  date: {
    type: "timestamp",
    nullable: false,
  } as EntitySchemaColumnOptions,
  imagePaths: {
    type: "varchar",
    length: 1024,
    nullable: true, // tam thoi true tai chua bik store ntn
    array: true,
  } as EntitySchemaColumnOptions,
};
export const RecEventEntity = new EntitySchema<RecEvent>({
  name: "rec-event",
  columns: {
    ...activity,
  },
});
export const WorkshopEntity = new EntitySchema<Workshop>({
  name: "work-shop",
  columns: {
    ...activity,
    host: {
      type: "varchar",
      nullable: false,
      length: 256,
    },
  },
});
