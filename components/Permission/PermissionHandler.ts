export interface PermissionHandler {
  setNext(handler: PermissionHandler): PermissionHandler;
  handleRequest(days: number): string;
}
