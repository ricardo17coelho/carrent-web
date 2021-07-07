export const publicRoute = [
    {
        path: '*',
        component: () => import('@/views/error/NotFound.vue')
    },
    {
        path: "/",
        name: "Home",
        component: () => import('@/views/Home.vue')
    },
    {
        path: "/about",
        name: "About",
        component: () => import('@/views/About.vue'),
    },

    {
        path: '/404',
        name: '404',
        meta: {
            title: 'Not Found'
        },
        component: () => import('@/views/error/NotFound.vue')
    },

    {
        path: '/500',
        name: '500',
        meta: {
            title: 'Server Error'
        },
        component: () => import('@/views/error/Error.vue')
    }

];

export const protectedRoute = [
];
