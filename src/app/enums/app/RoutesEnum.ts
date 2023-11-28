const defaultRoute = '/painel-administrativo';

export enum RoutesEnum {
  LOGIN = `${defaultRoute}/autenticacao/login`,
  SIGNUP = `${defaultRoute}/autenticacao/registro`,
  PRODUTOS = `${defaultRoute}/produtos`,
  WHATSAPP = `${defaultRoute}/whatsapp`,
  NOVA_CATEGORIA = `${defaultRoute}/nova-categoria`,
}
