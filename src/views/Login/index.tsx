import { ChangeEvent, useEffect, useState } from "react"
import { Input,Space,Button,message } from 'antd';
import styles from "./login.module.scss"
import initLoginBg from "./init"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './login.less'
import { useNavigate } from "react-router-dom"
// import {CaptchaAPI,LoginAPI} from "@/request/api"
const view = ()=>{
  let navigateTo = useNavigate();
  // 加载完这个组件之后，加载背景
  useEffect(()=>{
    initLoginBg();
    window.onresize = function(){initLoginBg()};
    
    getCaptchaImg();
  },[]);
  // 获取用户输入的信息
  const [usernameVal,setUsernameVal] = useState(""); // 定义用户输入用户名这个变量
  const [passwordVal,setPasswordVal] = useState(""); // 定义用户输入密码这个变量
  const [captchaVal,setCaptchaVal] = useState(""); // 定义用户输入验证码这个变量
  // 定义一个变量保存验证码图片信息
  const [captchaImg,setCaptchaImg] = useState(""); 

  const usernameChange = (e:ChangeEvent<HTMLInputElement>)=>{
    // 获取用户输入的用户名
    // console.log(e.target.value);
    // 修改usernameVal这个变量为用户输入的那个值。 以后拿到usernameVal这个变量就相当于拿到用户输入的信息。
    setUsernameVal(e.target.value);
  }
  const passwordChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setPasswordVal(e.target.value);
  }
  const captchaChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setCaptchaVal(e.target.value);
  }
  // 点击登录按钮的事件函数
  const gotoLogin = async ()=>{
    // console.log("用户输入的用户名，密码，验证码分别是：",usernameVal,passwordVal,captchaVal);
    // // 验证是否有空值
    // if(!usernameVal.trim() || !passwordVal.trim()|| !captchaVal.trim()){
    //   message.warning("请完整输入信息！")
    //   return
    // }
    // // 发起登录请求
    // let loginAPIRes = await LoginAPI({
    //   username:usernameVal,
    //   password:passwordVal,
    //   code:captchaVal,   
    //   uuid:localStorage.getItem("uuid") as string    
    // })

    // console.log(loginAPIRes);
    // if(loginAPIRes.code===200){
    //   // 1、提示登录成功
    //   message.success("登录成功！")
    //   // 2、保存token
    //   localStorage.setItem("lege-react-management-token",loginAPIRes.token)
    //   // 3、跳转到/page1
    //   navigateTo("/page1")
    //   // 4、删除本地保存中的uuid
    //   localStorage.removeItem("uuid")
    // }

    console.log("用户输入的用户名，密码，验证码分别是：", usernameVal, passwordVal, captchaVal);
    // 验证是否有空值
    if (!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()) {
        message.warning("请完整输入信息！");
        return;
    }

    // 本地模拟验证逻辑
    const validUsername = "admin";
    const validPassword = "123456";
    const storedCaptcha = localStorage.getItem("captcha");
    
    if (usernameVal === validUsername && passwordVal === validPassword && captchaVal === storedCaptcha) {
      // 1、提示登录成功
      message.success("登录成功！");
      // 2、保存token
      localStorage.setItem("lege-react-management-token", "mock-token");
      // 3、跳转到/page1
      navigateTo("/page1");
      // 4、删除本地保存中的uuid和验证码
      localStorage.removeItem("uuid");
      localStorage.removeItem("captcha");
  } else {
      message.warning("用户名、密码或验证码错误！");
  }

  }

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    const length = 4; // 验证码长度
    for (let i = 0; i < length; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
};
  // 点击验证码图片盒子的事件函数
  const getCaptchaImg = async ()=>{
    // // 做验证码的请求
    // // CaptchaAPI().then((res)=>{
    // //   console.log(res);
    // // })
    // let captchaAPIRes = await CaptchaAPI();
    // console.log(captchaAPIRes);
    // if(captchaAPIRes.code===200){
    //   // 1、把图片数据显示在img上面
    //   setCaptchaImg("data:image/gif;base64,"+captchaAPIRes.img)
    //   // 2、本地保存uuid，给登录的时候用
    //   localStorage.setItem("uuid",captchaAPIRes.uuid)
    // }
    
    const captcha = generateCaptcha();
    // 保存验证码到本地，用于后续验证
    localStorage.setItem("captcha", captcha);
    // 这里可以根据需要生成一个简单的图片，例如将验证码文本绘制到一个 canvas 上
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
        canvas.width = 100;
        canvas.height = 38;
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = '24px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(captcha, 10, 25);
        const dataURL = canvas.toDataURL();
        setCaptchaImg(dataURL);
    }
    
  }


  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{display:"block"}}></canvas>
      {/* 登录盒子 */}
      <div className={styles.loginBox+ " loginbox"}>
          {/* 标题部分 */}
          <div className={styles.title}>
              <h1>Rwanda信用体系平台</h1>
          </div>
          {/* 表单部分 */}
          <div className="form">
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
              <Input placeholder="用户名" onChange={usernameChange}/>
              <Input.Password placeholder="密码" onChange={passwordChange}/>
              {/* 验证码盒子 */}
              <div className="captchaBox">
                <Input placeholder="验证码" onChange={captchaChange}/>
                <div className="captchaImg" onClick={getCaptchaImg}>
                  <img height="38" src={captchaImg} alt="" />
                </div>
              </div>
              <Button type="primary" className="loginBtn" block onClick={gotoLogin}>登录</Button>
            </Space>
          </div>
      </div>
    </div>
  )
}
export default view