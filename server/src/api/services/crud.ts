import { Response, Request } from "express";
import { EntitySchema } from "typeorm";
import { dataSource } from "../../config";
import { Achievement, Blog, RecEvent, User, Workshop } from "../../types";
import { Data, Database, DataType } from "../../types/Database";
import { AchievementEntity } from "../entities/achievement";
import { EntityCollection } from "../entities/collection";

// có cách nào nhét thẳng cái T là Achievement, User, Blog type vào getbyID không hay là phải thông qua keyof Database?
export async function getbyID(
  id: string,
  table: keyof typeof EntityCollection
) {
  // const result = await get<Data<typeof table>>(id, entity);
  const entity = EntityCollection[table];
  const db = await dataSource;
  const schemaName = entity.options.name;
  const repo = db.getRepository(entity);
  const result = await repo
    .createQueryBuilder()
    .select()
    .where(`${schemaName}.id = :id`, { id })
    .getOne();
  return result;
}

export async function create(data: any, table: keyof typeof EntityCollection) {
  const db = await dataSource;
  const entity = EntityCollection[table];
  const repo = db.getRepository(entity);
  const result = await repo
    .createQueryBuilder()
    .insert()
    .into(entity)
    .values(data)
    .returning("*")
    .execute(); // <---- measured code goes between startTime and endTime
  // const result = await get<T>(id, entity);
  return result;
}

export async function update(
  id: string,
  data: any,
  table: keyof typeof EntityCollection
) {
  const db = await dataSource;
  const entity = EntityCollection[table];
  const schemaName = entity.options.name;
  const repo = db.getRepository(entity);
  const result = await repo
    .createQueryBuilder()
    .update(entity)
    .set(data)
    .where(`${schemaName}.id = :id`, { id })
    .execute(); // <---- measured code goes between startTime and endTime
  // const result = await get<T>(id, entity);
  return result;
}

export async function deleteByID(
  id: string,
  table: keyof typeof EntityCollection
) {
  const db = await dataSource;
  const entity: EntitySchema<Data<typeof table>> = EntityCollection[table];
  const schemaName = entity.options.name;
  const repo = db.getRepository(entity);
  const result = await repo
    .createQueryBuilder()
    .delete()
    .from(entity)
    .where(`${schemaName}.id = :id`, { id })
    .execute(); // <---- measured code goes between startTime and endTime
  // const result = await get<T>(id, entity);
  return result;
}
