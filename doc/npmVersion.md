# npm version

- 版本号格式：主版本号.次版本号.修订号-预发布号

npm版本管理指令，主要用于对现有版本进行升级，同时生成同名的tag与commit记录；

## major

- 使用方式：`npm version major`
- npm tag: `latest`
- 安装方式：`npm i package@latest`

升级`主版本号`，同时重置后续版本号，如：

```
//原版本：1.1.1
npm version major
//新版本：2.0.0
//新Tag：v2.0.0
```

## minor

- 使用方式：`npm version minor`
- npm tag: `latest`
- 安装方式：`npm i package@latest`

升级`次版本号`，同时重置后续版本号，如：

```
//原版本：1.1.1
npm version minor
//新版本：1.2.0
//新Tag：v1.2.0
```

## patch

- 使用方式：`npm version patch`
- npm tag: `latest`
- 安装方式：`npm i package@latest`

升级`修订号`，有以下两种情况：
1. 对非预发布版本进行升级，会升级`修订号`，如：

```
//原版本：1.1.1
npm version patch
//新版本：1.1.2
//新Tag：v1.1.2
```

2. 对预发布版本进行升级，则只会重置`预发布号`，如：

```
//原版本：1.1.2-0
npm version patch
//新版本：1.1.2
//新Tag：v1.1.2
```

## prerelease

- 使用方式：`npm version prerelease`
- npm tag: `beta`
- 安装方式：`npm i package@beta`

升级`预发布号`，有以下两种请求：

1. 对非`预发布号`进行升级，会追加到升级后的`修订号`中，如：

```
//原版本：1.1.1
npm version prerelease
//新版本：1.1.2-0
//新Tag：v1.1.2-0
```

2. 对`预发布号`进行升级，只会简单升级`预发布`号，如：

```
//原版本：1.1.1-0
npm version prerelease
//新版本：1.1.1-1
//新Tag：v1.1.1-1
```