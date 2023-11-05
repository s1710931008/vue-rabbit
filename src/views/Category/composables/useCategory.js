import { onMounted, ref } from "vue";
import { getTopCategoryAPI } from "@/apis/category";
// import { getBannerAPI } from "@/apis/home";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

export function userCategory() {
    const categoryData = ref({});
    const route = useRoute();
    const getCategory = async (id = route.params.id) => {
        //如果有傳就取id,如果不傳就取route.params.id
        // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
        // const res = await getTopCategoryAPI(route.params.id);
        const res = await getTopCategoryAPI(id);
        categoryData.value = res.result;
    };
    onMounted(() => getCategory());

    //目標路由變化，重新發送
    onBeforeRouteUpdate((to) => {
        // console.log('路由變化')
        // console.log(to)
        getCategory(to.params.id);
    })
    return {
        categoryData
    }
}
