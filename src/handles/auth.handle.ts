import { FacebookAuth } from "src/classes/facebook.auth";
import { GoogleAuth } from "../classes/google.auth";

export abstract class AuthHandle{
  nextAuthHandle: AuthHandle;

  abstract handle(token:string): boolean;

  protected nextHandle(token:string) {
    if (this.nextAuthHandle == null) {
        return false;
    }
    return this.nextAuthHandle.handle(token);
  }

  static link(...handlers : AuthHandle[]){
    let first = handlers.splice(0,1)[0]
    let head = first
    for (const handle of handlers) {
      head.nextAuthHandle = handle;
      head = handle
    }
    return first;
  }
}
