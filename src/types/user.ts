export enum Roles {
  ADMIN = 'admin',
  MEMBER = 'member',
  USER = 'user'
}

export interface User {
  displayName: string | null
  email: string | null
  emailVerified: boolean
  isAnonymous: boolean
  photoURL: string | null
  uid: string
  role: Roles
}
