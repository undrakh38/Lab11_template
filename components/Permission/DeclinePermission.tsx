import { PermissionHandler } from './PermissionHandler';

export class DeclinePermission implements PermissionHandler {
  private nextHandler: PermissionHandler | null = null;
  private approvalCriteria: number = 7;

  setApprovalCriteria(days: number): void {
    if (days > 0)
      this.approvalCriteria = days;
  }

  setNext(handler: PermissionHandler): PermissionHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(days: number): string {
    if (days > 7 || days < 60) {
      return '6 аас 60 :Татгалзлаа.';
    } else if (this.nextHandler) {
      return this.nextHandler.handleRequest(days);
    }
    return 'Татгалзлаа';
  }
}
