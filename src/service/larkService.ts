import {
  Config,
  Init,
  Inject,
  Provide,
  Scope,
  ScopeEnum,
  ServiceFactory,
  delegateTargetPrototypeMethod,
  MidwayCommonError,
} from '@midwayjs/core';

import { Client, AppType }from '@larksuiteoapi/node-sdk';

type LarkConfig ={
  appId: string,
  appSecret: string,
  appType?: AppType,
  [key: string]: any
}

@Provide()
@Scope(ScopeEnum.Singleton)
export class LarkServiceFactory extends ServiceFactory<Client> {
  @Config('larkConfig')
  larkConfig: LarkConfig;

  @Init()
  async init() {
    await this.initClients(this.larkConfig);
  }

  async createClient(config: LarkConfig): Promise<Client> {
    // config 请参考 https://github.com/larksuite/node-sdk/blob/main/README.zh.md
    return new Client(config) as Client;
  }
  getName() {
    return 'larkSDK';
  }
}

@Provide()
@Scope(ScopeEnum.Singleton)
export class LarkService implements Client {
  @Inject()
  private serviceFactory: LarkServiceFactory;
  private instance: Client;

  @Init()
  async init() {
    this.instance = this.serviceFactory.get(
      this.serviceFactory.getDefaultClientName?.() || 'default'
    );
    if (!this.instance) {
      throw new MidwayCommonError('lark client instance not found.');
    }
  }
}

// eslint-disable-next-line
export interface LarkService extends Client {}

delegateTargetPrototypeMethod(LarkService, [Client]);
