import { FacebookAuth } from "../../src/classes/facebook.auth";
import { AuthHandle } from "./auth.handle";

export class FacebookAuthHandle extends AuthHandle{
  nextAuthHandle: AuthHandle;
  auth = new FacebookAuth()

  handle(token: string): boolean {
    const codeDecoded = this.decode(token)
    if(codeDecoded!=='facebook'){
      return super.nextHandle(token);
    }
    return this.auth.auth(token)
  }

  decode(token: string){
    return token.split(' ')[0]
  }
}