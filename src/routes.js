import Home from '@/components/Home';
import User from "@/components/user/User";

/*
* lazy loading component
* https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk
* On doc mention to use async component. This do not work for me.
* Just use the regular way to define components and import the lazy way.
* You will fine 0.js, 1.js, numberOfChunks.js
* Or the name of the group if used.
* */
const UserComplete = () => import("@/components/user/UserComplete.vue");
const UserDetail = () => import("@/components/user/UserDetail");
const UserEdit = () => import(/* webpackChunkName: "group-foo" */ "@/components/user/UserEdit");
const UserStart = () => import(/* webpackChunkName: "group-foo" */ "@/components/user/UserStart");

import ErrorNotFound from "@/components/shared/ErrorNotFound";

export const routes = [
    {name: 'home', path: '', component: Home},
    {name: 'user', path: '/user/:id', component: User},
    {
        name: 'user-complete', path: '/user-complete', component: UserComplete, children: [
            {name: 'user-start', path: '/', component: UserStart},
            {name: 'user-detail', path: '/:id/detail', component: UserDetail},
            {name: 'user-edit', path: '/:id/edit', component: UserEdit}
        ]
    },
    {name: 'error-page-not-found', path: '/page-not-found', component: ErrorNotFound},
    {path: '*', redirect: { name: 'error-page-not-found' } }
];
