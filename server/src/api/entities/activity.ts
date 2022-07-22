import { EntitySchema, EntitySchemaColumnOptions } from "typeorm";
import { RecEvent, Workshop } from "../../types";

const activity = {
  id: {
    type: "int",
    generated: true,
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
    type: "date",
    nullable: false,
  } as EntitySchemaColumnOptions,
  imagePaths: {
    type: "varchar",
    length: 256,
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
