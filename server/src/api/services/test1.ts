import { Request, Response } from "express";
import { Achievement } from "../../types";
import { AchievementEntity } from "../entities/achievement";
import { dataSource } from "../../config";
import { EntitySchema } from "typeorm";
import { Data, DataType } from "../../types/Database";

// export async function get<T extends DataType>(
//   id: string,
//   entity: EntitySchema<Data<T>>
// ): Promise<Data<T> | null> {
//   const db = await dataSource;
//   const schemaName = entity.options.name;
//   const repo = db.getRepository(entity);
//   const data = repo
//     .createQueryBuilder()
//     .select()
//     .where(`${schemaName}.id = :id`, { id })
//     .getOne();
//   return data;
// }

export async function create<T extends DataType>(
  body: Data<T>,
  entity: EntitySchema<Data<T>>
) {
  const db = await dataSource;
  const repo = db.getRepository(entity);
  repo
    .createQueryBuilder()
    .insert()
    .into(entity)
    .values(body)
    .output("*")
    .execute(); // <---- measured code goes between startTime and endTime
}
