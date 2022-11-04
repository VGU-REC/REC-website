import { Request, Response } from "express";
import { Achievement } from "../../types";
import { AchievementEntity } from "../entities/achievement";
import { dataSource } from "../../config";
import { EntitySchema } from "typeorm";
import { Data, DataType } from "../../types/Database";

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
