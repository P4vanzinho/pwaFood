const defaultRoute = '/painel-administrativo';

export enum RoutesEnum {
  LOGIN = `${defaultRoute}/autenticacao/login`,
  SIGNUP = `${defaultRoute}/autenticacao/registro`,
  PRODUTOS = `${defaultRoute}/produtos`,
  WHATSAPP = `${defaultRoute}/whatsapp`,
  CATEGORIA_CADASTRO = `${defaultRoute}/categoria/cadastro`,
}
