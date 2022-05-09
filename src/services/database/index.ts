import { DbCollection, DbDoc, OmitId } from "interfaces";

declare function add<Col extends DbCollection>(
  col: Col,
  data: OmitId<DbDoc<Col>>
): Promise<void>;

declare function set<Col extends DbCollection>(
  col: Col,
  id: string,
  data: OmitId<DbDoc<Col>>
): Promise<void>;

declare function get<Col extends DbCollection>(col: Col): Promise<DbDoc<Col>[]>;
declare function get<Col extends DbCollection>(
  col: Col,
  id: string
): Promise<DbDoc<Col>>;

declare function onSnapshot<Col extends DbCollection>(
  col: Col,
  callback: (docs: DbDoc<Col>[]) => void,
  onError?: (error: Error) => void
): () => void;
declare function onSnapshot<Col extends DbCollection>(
  col: Col,
  id: string,
  callback: (doc: DbDoc<Col>) => void,
  onError?: (error: Error) => void
): () => void;

declare function update<Col extends DbCollection>(
  col: Col,
  id: string,
  data: Partial<OmitId<DbDoc<Col>>>
): Promise<void>;

declare function del<Col extends DbCollection>(
  col: Col,
  id: string
): Promise<void>;

export { add, set, get, onSnapshot, update, del };
