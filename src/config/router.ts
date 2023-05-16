// 定义一些路由
import Index from "../pages/Index.vue";
import Team from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";
import SearchPage from "../pages/SearchPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";


const routes = [
    { path: '/', meta: { showBottom: true }, component: Index },
    { path: '/team', title: '找车队', meta: { showBottom: true }, component: Team },
    { path: '/team/add', title: '创建车队', meta: { showBottom: true }, component: TeamAddPage },
    { path: '/team/update', title: '更新车队', meta: { showBottom: true }, component: TeamUpdatePage },
    { path: '/user', title: '个人信息', meta: { showBottom: true }, component: UserPage },
    { path: '/search', title: '找摩友', meta: { showBottom: true }, component: SearchPage },
    { path: '/user/list', title: '摩友列表', meta: { showBottom: true }, component: SearchResultPage },
    { path: '/user/edit', title: '编辑信息', meta: { showBottom: true }, component: UserEditPage },
    { path: '/user/login', title: '登录', meta: { showBottom: false }, component: UserLoginPage },
    { path: '/user/update', title: '更新信息', meta: { showBottom: true }, component: UserUpdatePage },
    { path: '/user/team/join', title: '加入的车队', meta: { showBottom: true }, component: UserTeamJoinPage },
    { path: '/user/team/create', title: '创建的车队', meta: { showBottom: true }, component: UserTeamCreatePage },
]

export default routes;
