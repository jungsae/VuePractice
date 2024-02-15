import { createRouter, createWebHistory } from 'vue-router';

import EnrolClasses from '../components/EnrolClasses.vue'
import MemberShip from '../components/MemberShip.vue'
import UserInfo from '../components/UserInfo.vue'
import AppNotice from '../components/AppNotice.vue'

const VueRouter = () => createRouter({ // 변수명을 VueRouter로 수정
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: MemberShip
        },
        {
            path: '/enrolClasses',
            name: 'enrolClasses',
            component: EnrolClasses
        },
        {
            path: '/userInfo',
            name: 'userInfo',
            component: UserInfo

        },
        {
            path: '/notice',
            name: 'notice',
            component: AppNotice
        }

    ]
})

const router = VueRouter() // createRouter 대신 VueRouter로 호출

export function resetRouter() {
    const newRouter = VueRouter() // createRouter 대신 VueRouter로 호출
    router.matcher = newRouter.matcher // reset router
}

export default router
