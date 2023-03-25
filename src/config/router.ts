import Index from "../pages/Index.vue";
import Team from "../pages/TeamPage.vue";
import User from "../pages/UserPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";

const routes = [
    { path: '/', name: 'Index', component: Index },
    { path: '/team', name: 'Team', component: Team },
    { path: '/user', name: 'User', component: User },
    { path: '/search', name: 'Search', component: SearchPage },
    { path: '/user/edit', name: 'UserEdit', component: UserEditPage },
    { path: '/user/list', name: 'SearchResult', component: SearchResultPage },
    { path: '/user/login', name: 'UserLogin', component: UserLoginPage },
]

export default routes;
