import { PermissionHandler } from './PermissionHandler';

export class DepartmentHeadPermission implements PermissionHandler {
  private nextHandler: PermissionHandler | null = null;

  setNext(handler: PermissionHandler): PermissionHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(days: number): string {
    if (days <= 7) {
      return 'Тэнхимийн эрхлэгч зөвшөөрөл олголоо.';
    } else if (this.nextHandler) {
      return this.nextHandler.handleRequest(days);
    }
    return 'Татгалзлаа';
  }
}
