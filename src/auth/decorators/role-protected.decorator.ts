import { SetMetadata } from '@nestjs/common';
import { ValidRoles } from 'src/auth/interfaces';
export const META_ROLES = 'roles';

export const RoleProtected = (...args: ValidRoles[]) => {
  return SetMetadata('role-protected', args);
};
