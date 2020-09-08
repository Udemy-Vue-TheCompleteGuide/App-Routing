import Home from '@/components/Home';
import User from "@/components/user/User";
import UserComplete from "@/components/user/UserComplete";
import UserDetail from "@/components/user/UserDetail";
import UserEdit from "@/components/user/UserEdit";
import UserStart from "@/components/user/UserStart";
import ErrorNotFound from "@/components/shared/ErrorNotFound";

export const routes = [
    {name: 'home', path: '', component: Home},
    {name: 'user', path: '/user/:id', component: User},
    {
        name: 'user-complete', path: '/user', component: UserComplete, children: [
            {name: 'user-start', path: '/', component: UserStart},
            {name: 'user-detail', path: '/:id/detail', component: UserDetail},
            {name: 'user-edit', path: '/:id/edit', component: UserEdit}
        ]
    },
    {name: 'error-page-not-found', path: '/page-not-found', component: ErrorNotFound},
    {path: '*', redirect: { name: 'error-page-not-found' } }
];
