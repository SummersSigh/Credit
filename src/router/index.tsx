import React,{ lazy } from "react"
// Navigate重定向组件
import {Navigate} from "react-router-dom"

import Home from  "../views/Home"
// import About from  "../views/About"
// import User from  "../views/User"
import Login from  "../views/Login"
const About = lazy(()=>import("../views/BorrowMoney"))
const User = lazy(()=>import("../views/PersonHelp"))
const Overview = lazy(()=>import("../views/Overview"))
const BorrowMoney = lazy(()=>import("../views/BorrowMoney"))
const BorrowGoods = lazy(()=>import("../views/BorrowGoods"))
const PersonHelp = lazy(()=>import("../views/PersonHelp"))

// 报错A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. 
// 懒加载的模式的组件的写法，外面需要套一层 Loading 的提示加载组件


const withLoadingComponent = (comp:JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    {comp}
  </React.Suspense>
)

const routes = [
  //  嵌套路由 开始-------------------
  {
    path:"/",
    element:<Navigate to="/overview"/>
  },
  {
    path:"/",
    element: <Home />,
    children:[
      {
        path:"/overview",
        element: withLoadingComponent(<Overview />)
      },
      {
        path:"/page2/BorrowMoney",
        element: withLoadingComponent(<BorrowMoney />)
      },
      {
        path:"/page2/BorrowGoods",
        element: withLoadingComponent(<BorrowGoods />)
      },
      {
        path:"/PersonHelp",
        element: withLoadingComponent(<PersonHelp />)
      },
    ]
  },
  // 嵌套路由 结束-------------------
  {
    path:"/login",
    element: <Login />
  },
  // 访问其余路径的时候直接跳到首页
  {
    path:"*",
    element:<Navigate to="/overview"/>
  }
  
  // {
  //   path:"/home",
  //   element: <Home />
  // },
  // {
  //   path:"/about",
  //   element: withLoadingComponent(<About />)
   
  // },
  // {
  //   path:"/user",
  //   element: withLoadingComponent(<User />)
  // }
]

export default routes