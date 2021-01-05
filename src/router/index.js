import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Films from '@/views/Films/Index'
// import NowPlaying from '@/views/Films/NowPlaying'
// import ComingSoon from '@/views/Films/ComingSoon'
// import Detail from '@/views/Films/Detail'
// import Cinemas from '@/views/Cinemas/Index'
// import Center from '@/views/Center/Index'

import filmRouter from "./routes/films";
import cinemaRouter from "./routes/cinema";
import centerRouter from "./routes/center";


const routes = [
    // 重定向
    {
        path: "/",
        redirect: "/films/nowPlaying",
    },

    ...filmRouter,
    ...cinemaRouter,
    ...centerRouter,

    // {
    //     path: "/films",
    //     component: Films,
    //     children: [
    //         { path: "nowPlaying", component: NowPlaying },
    //         { path: "comingSoon", component: ComingSoon },
    //     ],
    // },
    // {
    //     path: "/film/:filmId",
    //     component: Detail,
    // },
    // {
    //     path: "/cinemas",
    //     component: Cinemas,
    // },
    // {
    //     path: "/center",
    //     component: Center,
    // },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router