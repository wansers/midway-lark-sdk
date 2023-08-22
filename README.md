# midway-lark-sdk
this is a midway component for lark SDK.
###### 用于快捷使用飞书应用DK的接口

参考 Document: [https://midwayjs.org](https://midwayjs.org)

## Install

```bash
pnpm add midway-lark-sdk
```
## config for midwayjs config-default.ts
```typescript jsx
import { MidwayConfig } from '@midwayjs/core';

export default {
  // config 请参考 https://github.com/larksuite/node-sdk/blob/main/README.zh.md
  larkSDK: {
    client: {
      appId: process.env.APP_ID,
      appSecret: process.env.APP_SECRET,
    },
  },
} as MidwayConfig;
```

## config for midwayjs configuration.ts

```typescript jsx
import {Configuration,} from "@midwayjs/core";
import {join} from 'path';
import * as larkSDK from 'midway-lark-sdk';

@Configuration({
  imports: [
    larkSDK,
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
}
```
## License

[MIT](LICENSE)
