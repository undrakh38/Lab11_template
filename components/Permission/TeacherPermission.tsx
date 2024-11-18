import { PermissionHandler } from './PermissionHandler';

export class TeacherPermission implements PermissionHandler {
  private nextHandler: PermissionHandler | null = null;

  setNext(handler: PermissionHandler): PermissionHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(days: number): string {
    if (days <= 1) {
      return 'Багш зөвшөөрөл олголоо';
    } else if (this.nextHandler) {
      return this.nextHandler.handleRequest(days);
    }
    return 'Татгазлаа';
  }
}
