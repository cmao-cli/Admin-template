## 运行
npm run start
## 打包
npm run build

#### 依赖模块
- [@cmao/yummi](https://phab.srv.codemao.cn/source/yuumi/)(项目生成和启动)
- [@mlz/pack](https://github.com/juicecube/mlz-pack)webpack打包库
- [@mlz/axios](https://github.com/juicecube/mlz-axios)请求封装库
- [@mlz/config](https://phab.srv.codemao.cn/source/codemaster-mlz-config)通用的后端接口配置
- [@mlz/lint](https://github.com/juicecube/mlz-lint)(tsConfig和tslint的通用配置)
- [@redux/toolkit](https://github.com/reduxjs/redux-toolkit/)(更简便的redux用法)
- [@ant-design/pro-layout](https://prolayout.ant.design/)(更加方便快速的使用layout，配置化更强)
- [@mlz/doraemon](https://github.com/juicecube/doraemon)(常用的lodash里没有的utils方法)
- [ahooks](https://github.com/alibaba/hooks)(非常方便的hooks)

#### 项目结构
```
.
├── README.md
├── bin //线上运行项目的server文件
│   └── server.js
├── commitlint.config.js //commit规范配置文件
├── config //项目后台接口配置文件
│   ├── index.js
│   └── local.json
├── favicon.ico
├── js_transition.d.ts //ts定义
├── mlz-pack.js //@mlz/pack所需要的配置文件
├── package-lock.json
├── package.json
├── src
│   ├── App.tsx
│   ├── api //统一管理项目中的api请求
│   │   ├── admin.ts //按照不同的host来拆分命名
│   │   ├── error-code-parse.ts //错误码解析
│   │   └── index.ts //@mlz/axios封装配置
│   ├── commons //css images fonts等资源文件
│   │   ├── css
│   │   └── images
│   ├── components //项目公共组件
│   │   ├── basic-layouts
│   │   ├── bread-crumb
│   │   ├── common-table
│   │   ├── page-not-found
│   │   ├── table-operate-btn
│   │   └── with-search
│   ├── hooks
│   │   └── useFetchHook.ts
│   ├── index.ejs
│   ├── index.tsx
│   ├── pages //路由
│   │   ├── order
│   │   │   ├── order_list //一级路由
│   │   │   │   ├── components //当前页面用到的组件
│   │   │   │   └── index.tsx
│   │   │   ├── constant.ts
│   │   │   └── type.ts
│   │   └── routes.tsx //所有路由的配置文件
│   ├── redux
│   │   ├── demo //每个文件为一个state_model
│   │   │   ├── index.ts //action + reducer定义
│   │   │   └── selector.ts
│   │   │   └── saga.ts
│   │   ├── root-reducer.ts
│   │   ├── root-saga.ts
│   │   └── root-store.ts
│   └── utils
│       └── base.ts
├── tsconfig.json
├── tsfmt.json
└── tslint.json
```

#### 特性
1. antd按需加载

#### 路由
1. `src/pages/routes.tsx`配置所有的路由数组和左侧菜单数组

#### 封装的antd公共组件
1. Breadcrumb
2. CommonTable: 添加`type`减少重复`render`编写，`type`定义在`CommonTable/fieldTypes`。 分页操作响应函数`onPageChange`
3. WithSearch: 带搜索和重置的表单组件

#### HOOKS
1. 请求数据的hooks: useFetchHook

#### 设计（样式）规范
1. 相关文件
- `src/commons/css/themes.scss` : 主题文件（存放相关主题样式）
- `src/commons/css/themify.scss` : 主题 mixin（负责生成主题样式map和相关类名，无需关心）

2. 应用
- html文件的根元素类名为 `.theme_${主题名}`, 如要更换主题，只需更换其类名为相应主题即可
- 具体某个元素要适配主题，写法如下：
```js
.button {
  height: 40px;
  width: 60px;
  // 固定写法（注意：主题样式必须包含在themify中）
  @include themify($themes) {
    // 样式： themed(主题中的样式名)
    background-color: themed(red_1);
  }

  &:hover {
    @include themify($themes) {
      background-color: themed(red_2);
    }
  }
}
```
