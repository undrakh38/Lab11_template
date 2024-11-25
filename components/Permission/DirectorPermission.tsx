import { PermissionHandler } from './PermissionHandler';

export class DirectorPermission implements PermissionHandler {
  private nextHandler: PermissionHandler | null = null;
  private approvalCriteria: number = 60;

  setApprovalCriteria(days: number): void {
    if (days > 0)
      this.approvalCriteria = days;
  }


  setNext(handler: PermissionHandler): PermissionHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(days: number): string {
    if (days >= this.approvalCriteria) {
      return 'Сургалтын алба 60-аас дээш хоногийн чөлөө олголоо.';
    } else if (this.nextHandler) {
      return this.nextHandler.handleRequest(days);
    }
    return 'Татгалзлаа';
  }
}
