import { Authenticacao } from "../interfaces/authenticacao.interface";
import * as jwt from 'jsonwebtoken';

export class GoogleAuth implements Authenticacao{
  private key ='googleKey'
  auth(token: string): boolean {
    const cleanToken = this.decodeToken(token)
    if(cleanToken)
      return this.verify(cleanToken);
    return false;
  }

  private decodeToken(token:string){
    const label= token.split(' ')[0];
    const tokenDecoded= token.split(' ')[1];
    
    if(label && label==='google'){
      return tokenDecoded;
    }
  }
  private verify(token: string){
    try {
        const decode = jwt.verify(token, this.key)
        console.log('Authenticacao Google: ',decode)
        return true;
    } catch (error) {
      console.log('Authenticacao Google: token expirado as:',error.expiredAt)
      return false;
    }
  }

}