import{_ as a,W as o,X as s,Z as e,$ as n,a0 as c,Y as r,C as l}from"./framework-b3a1bbcf.js";const i={},d=e("h1",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),u=e("figure",null,[e("img",{src:"https://s2.loli.net/2023/04/11/xeItgUp5azA7O9V.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),_=e("p",null,"React（也称为 React.js 或 ReactJS）是一个自由及开放源代码的前端 JavaScript 工具库，用于基于 UI 组件构建用户界面。",-1),p=e("p",null,"它由 Meta（前身为 Facebook）和由个人开发者和公司组成的社群维护。React 可用作开发具有 Next.js 等框架的单页、手机或服务器渲染应用程序的基础。然而，React 只专注状态管理和将状态渲染到 DOM，因此创建 React 应用程序通常需要使用额外的工具库来进行路由实现，以及某些客户端功能。",-1),h={href:"https://zh.wikipedia.org/wiki/React",target:"_blank",rel:"noopener noreferrer"};function m(f,x){const t=l("ExternalLinkIcon");return o(),s("div",null,[d,u,_,p,e("blockquote",null,[e("p",null,[e("a",h,[n("React 介绍(wikipedia)"),c(t)])])]),r(` ::: react-demo 基础 Demo

\`\`\`js
const { useState } = React;

export default () => {
  const [message, setMessage] = useState(" 强大");
  const [count, setCount] = useState(0);

  const handler = () => {
    setMessage(\`十分\${message}\`);
  };
  const countHandler = () => {
    setCount(count+1)
  };

  return (
    <div className="box">
      <code>vuepress-theme-hope</code>
      <span id="powerful" onClick={handler}>
        {message}
      </span>
      <button onClick={countHandler}>{count}</button>
    </div>
  );
};

\`\`\` `)])}const k=a(i,[["render",m],["__file","index.html.vue"]]);export{k as default};
