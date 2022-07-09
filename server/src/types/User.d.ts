export interface User {
  id: string;
  role: UserRole;
}

export type UserRole = "GUEST" | "MEMBER" | "ADMIN";
