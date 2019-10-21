# 前置
复制./config/local.json.example到./config/local.json，并根据需求进行修改。
# 运行
npm run start
# 打包
npm run build

#### 路由
`src/router/routes.tsx`配置所有的路由数组和左侧菜单数组

#### Components
1. Breadcrumb
2. CommonTable: 添加`type`减少重复`render`编写，`type`定义在`CommonTable/fieldTypes`。 分页操作响应函数`onPageChange`
3. WithSearch: 带搜索和重置的表单组件

#### HOOKS
1. 请求数据的hooks: useFetchHook
