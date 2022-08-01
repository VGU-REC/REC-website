export interface CustomizeRouter {
  generateIdFrom?: string;
  limit?: number;
  orderBy?: string;
}
type Concreate<T> = {
  [properties in keyof T]-?: T[properties];
};
export type ConcreateRouter = Concreate<CustomizeRouter>;
