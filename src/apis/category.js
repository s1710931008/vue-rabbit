import httpInstance from '@/utils/http'

/**
 * @description: 获取分类数据
 * @param {*} id 分类id 
 * @return {*}
 */
 export const getTopCategoryAPI = (id) => {
    return httpInstance({
      url:'/category',
      params:{
        id
      }
    })
  }
  
// 获取banner
export function getBannerAPI(params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return httpInstance({
      url: '/home/banner',
      params: {
          distributionSite
      }
  })
}