import { resolve as reso } from 'path';
import pxToViewPort from 'postcss-px-to-viewport';
// import postcssJs from 'postcss-js'
// ref: https://umijs.org/config/
export default {
  history: 'hash',
  hash: true,
  targets: {
    chrome: 58,
    ie: 10,
  },
  publicPath: './',
  disableCSSModules: true,
  treeShaking: true,
  alias: {
    '@': reso(__dirname, './src'),
    '@a': reso(__dirname, './src/assets'),
    '@v': reso(__dirname, './public'),
    '@c': reso(__dirname, './src/components'),
    '@u': reso(__dirname, './src/utils'),
    '@services': reso(__dirname, './src/services'),
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        experimentalDecorators: true,
        dynamicImport: true,
        title: 'test',
        dll: true,
        routes: [
          {
            include: [/.*/],
            exlude: [
              /models\//,
              /services\//,
              /model\.(t|j)sx?$/,
              /service\.(t|j)sx?$/,
              /components\//,
            ],
          },
        ],
        hardSource: false,
        locale: {
          enable: true,
          default: 'zh-CN', // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
      },
    ],
  ],
  // chainWebpack: (config, { webpack })=>{
  //   config.module
  //   .rule('svg')
  //   .test(/\.(js|jsx)?$/)
  //   .use('file-loader')
  //   .loader('file-loader')
  //   .options({
  //     name: 'img/[name].[ext]'
  //   })
  // },
  extraPostCSSPlugins: [
    pxToViewPort({
      unitToConvert: 'px',    //需要转换的单位，默认为"px"
      viewportWidth: 1920,     //设计稿的视口宽度，一般是375左右，iphone和很多安卓机等机型都差不多，ipad除外。如果是viewportWidth是375，font-size：14，那么font-size会转换为3.73333vm，计算过程：14÷375×100=3.73333
      unitPrecision: 6,       //单位转换后保留的精度
      propList: ['*'],        //能转化为vw的属性列表
      viewportUnit: 'vw',     //希望使用的视口单位
      fontViewportUnit: 'vw', //字体使用的视口单位
      selectorBlackList: [],  //需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      minPixelValue: 1,       //设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false,      //媒体查询里的单位是否需要转换单位
      replace: true,          //是否直接更换属性值，而不添加备用属性
      exclude: [],     //忽略某些文件夹下的文件或特定文件
      include: /.(less|jsx|js)/,    //如果设置了include，那将只有匹配到的文件才会被转换
      landscape: false,       //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw',    //横屏时使用的单位
      landscapeWidth: 1920     //横屏时使用的视口宽度
    }),
  ],
  proxy: {
    '/school': {
      // target:'http://192.168.142.128:80',
      // target: 'http://localhost:9889',
      target: 'http://192.168.31.21:9889',
      // target: 'http://10.240.60.70:9889',//init
      changeOrigin: true,
      secure: false
    }
  },
};
