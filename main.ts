import { execution } from './executor';
import * as jwt from 'jsonwebtoken';

function main(){
  const payloadGoogle: { user: string } = { user: 'jozimarGoogle' };
  const payloadface: { user: string } = { user: 'jozimarFace' };
  const googleToken: string = 'google ' + jwt.sign(payloadGoogle, 'googleKey', { expiresIn: '0.1s' });
  const faceboToken: string = 'facebook ' + jwt.sign(payloadface, 'facebookKey', { expiresIn: '10m' });

  execution([googleToken,faceboToken])
}
main()