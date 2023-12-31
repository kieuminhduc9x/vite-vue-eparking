const adminRouter = [
    {
        path: '/admin',
        component: () => import('../layouts/admin.vue'),
        children: [
            {
                path: 'users',
                name: 'admin-users',
                component: () => import("../views/users/index.vue")
            }
        ]
    }
]
export default adminRouter
