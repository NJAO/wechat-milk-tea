export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/order/index',
    'pages/user-center/index'
  ],
  window: {
    navigationStyle: 'custom',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color:'#909399',
    selectedColor:'#E3A577',
    backgroundColor: '#fafafa',
    borderStyle:'black',
    list: [
      {
        pagePath:'pages/index/index',
        iconPath:'./static/tabBar/index.png',
        selectedIconPath:'./static/tabBar/index-alive.png',
        text:'首页'
      },
      {
        pagePath:'pages/order/index',
        iconPath:'./static/tabBar/order.png',
        selectedIconPath:'./static/tabBar/order-alive.png',
        text:'点单'
      },
      {
        pagePath:'pages/user-center/index',
        iconPath:'./static/tabBar/user-center.png',
        selectedIconPath:'./static/tabBar/user-center-alive.png',
        text:'我的'
      }
    ]
  }
})
