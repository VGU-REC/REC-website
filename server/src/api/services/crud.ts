import { Response, Request } from "express";
import { EntitySchema } from "typeorm";
import { dataSource } from "../../config";
import { Achievement, Blog, RecEvent, User, Workshop } from "../../types";
import { Data, Database, DataType } from "../../types/Database";
import { AchievementEntity } from "../entities/achievement";
import { EntityCollection } from "../entities/collection";

// có cách nào nhét thẳng cái T là Achievement, User, Blog type vào getbyID không hay là phải thông qua keyof Database?
async function getTable(table: keyof typeof EntityCollection) {
  const entity = EntityCollection[table];
  const db = await dataSource;
  return db.getRepository(entity);
}
export async function getbyID(
  id: string,
  table: keyof typeof EntityCollection
) {
  const db = await dataSource;
  const entity = EntityCollection[table];
  // const result = await get<Data<typeof table>>(id, entity);
  const tableRepository = db.getRepository(entity);
  const result = await tableRepository.findOneBy({
    id: id,
  });
  return result;
}

export async function create(data: any, table: keyof typeof EntityCollection) {
  const tableRepository = await getTable(table);
  const result = await tableRepository.insert(data);
  // const result = await repo
  //   .createQueryBuilder()
  //   .insert()
  //   .into(entity)
  //   .values(data)
  //   .returning("*")
  //   .execute();
  return result;
}

export async function update(
  id: string,
  data: any,
  table: keyof typeof EntityCollection
) {
  const tableRepository = await getTable(table);
  // So boilerplate
  // const result = await repo
  //   .createQueryBuilder()
  //   .update(entity)
  //   .set(data)
  //   .where(`${schemaName}.id = :id`, { id })
  //   .execute();
  const result = tableRepository.update(
    {
      id: id,
    },
    data
  );
  return result;
}

export async function deleteByID(
  id: string,
  table: keyof typeof EntityCollection
) {
  const tableRepository = await getTable(table);

  const result = await tableRepository.delete({ id: id });
  // const result = await repo
  //   .createQueryBuilder()
  //   .delete()
  //   .from(entity)
  //   .where(`${schemaName}.id = :id`, { id })
  //   .execute();
  return result;
}

export async function getItems(
  limit: number,
  page: number,
  table: keyof typeof EntityCollection
) {
  const skip = (page - 1) * limit;
  const tableRepository = await getTable(table);
  const result = await tableRepository.find({ skip: skip, take: limit });
  return result;
}

export async function countItems(
  table: keyof typeof EntityCollection
) {
  const tableRepository = await getTable(table);
  return await tableRepository.count();
}
