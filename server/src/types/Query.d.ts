import { EntityCollection } from "../entities"

export interface GetQuery {
  id: string,
  table: keyof typeof EntityCollection
  database: Promise<T>
}

