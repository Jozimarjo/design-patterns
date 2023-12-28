import { AuthHandle } from "./auth.handle";
import { FacebookAuthHandle } from "./facebook-auth.handle";
import { GoogleAuthHandle } from "./google-auth.handle";

export class ConcretAuthHandle {
  handler: AuthHandle
  constructor(){
    this.handler = AuthHandle.link(
      new GoogleAuthHandle(),
      new FacebookAuthHandle()
    )
  }
  execute(token: string){
    return this.handler.handle(token)
  }

}