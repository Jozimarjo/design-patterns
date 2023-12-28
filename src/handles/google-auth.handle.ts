import { GoogleAuth } from "../classes/google.auth";
import { AuthHandle } from "./auth.handle";

export class GoogleAuthHandle extends AuthHandle{
  nextAuthHandle: AuthHandle;
  auth = new GoogleAuth()
  handle(token: string): boolean {
    const codeDecoded = this.decode(token)
    if(codeDecoded!=='google'){
      return super.nextHandle(token);
    }
    return this.auth.auth(token)
  }

  decode(token: string){
    return token.split(' ')[0]
  }
}