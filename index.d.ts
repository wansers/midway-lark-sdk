import { ServiceFactory, ServiceFactoryConfigOption } from '@midwayjs/core';
import { AppType } from '@larksuiteoapi/node-sdk';

export * from './dist/index';

declare module '@midwayjs/core/dist/interface' {
  interface MidwayConfig {
    larkConfig?: ServiceFactoryConfigOption<{
      appId: string,
      appSecret: string,
      appType?: AppType,
      [key: string]: any
    }>;
  }
}
