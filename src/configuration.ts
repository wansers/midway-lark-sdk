import { Configuration } from '@midwayjs/core';
import { LarkServiceFactory } from './service/larkService';

@Configuration({
  namespace: 'larkSDK',
  importConfigs: [
    {
      default: {
        larkConfig: {
          default: {},
        },
      },
    },
  ],
})
export class LarkSDKConfiguration {
  async onReady(container) {
    await container.getAsync(LarkServiceFactory);
  }
}
