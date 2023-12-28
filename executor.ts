import { ConcretAuthHandle } from "./src/handles/concret-auth.handle"

export function execution(tokens:string[]){
  const authHandler = new ConcretAuthHandle();
  tokens.forEach(token=>{
    const result = authHandler.execute(token)
    result?ok():unauthorized()
  })
}
function ok(){
  console.log('Acesso Permitido!')
}
function unauthorized(){
  console.log('Acesso negado!')
}