import { DbCollection, DbDoc, OmitPrimaryKey } from "interfaces";

declare function set<T extends DbCollection>(
  col: T,
  id: string,
  data: OmitPrimaryKey<DbDoc<T>>
): Promise<void>;

declare function get<T extends DbCollection>(col: T): Promise<DbDoc<T>[]>;
declare function get<T extends DbCollection>(
  col: T,
  id: string
): Promise<DbDoc<T>>;

declare function update<T extends DbCollection>(
  col: T,
  id: string,
  data: Partial<OmitPrimaryKey<DbDoc<T>>>
): Promise<void>;

declare function del<T extends DbCollection>(col: T, id: string): Promise<void>;

export { set, get, update, del };