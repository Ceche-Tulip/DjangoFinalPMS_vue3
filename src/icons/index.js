import SvgIcon from '@/components/SvgIcon'

const svgRequired = require.context('./svg', false, /\.svg$/)  // 导入\svg文件
svgRequired.keys().forEach((item) => svgRequired(item))

export default (app) => {  // 注册svg组件到全局
    app.component('svg-icon', SvgIcon)
}