import { Authenticacao } from "../../src/interfaces/authenticacao.interface";
import * as jwt from 'jsonwebtoken';

export class FacebookAuth implements Authenticacao{
  key = 'facebookKey'
  auth(token: string): boolean {
    const cleanToken = this.decodeToken(token)
    if(cleanToken)
      return this.verify(cleanToken);
    return false;
  }

  private decodeToken(token:string){
    const label= token.split(' ')[0];
    const tokenClean= token.split(' ')[1];
    
    if(label && label==='facebook'){
      return tokenClean;
    }
  }
  private verify(token: string){
    try {
        const decode = jwt.verify(token,this.key)
        console.log('Authenticacao Facebook: ',decode)
        return true;
    } catch (error) {
      console.log('Authenticacao Facebook: token expirado as:',error.expiredAt)

      return false;
    }
  }

}