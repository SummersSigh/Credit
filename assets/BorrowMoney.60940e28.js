import{r as i,j as r,a as t,B as s,m as l}from"./index.26cf2acf.js";import{T as m,M as f,F as h,b as C}from"./contract.42b31440.js";import"./index.e98f1fcc.js";import"./debounce.72f5c7df.js";import"./Dropdown.31975144.js";const E=[{key:"1",contractName:"\u5408\u540C1",uploadTime:"2024-01-01 10:00",uploader:"\u5F20\u4E09",reviewStatus:"\u5DF2\u5BA1\u6838"},{key:"2",contractName:"\u5408\u540C2",uploadTime:"2024-01-02 11:00",uploader:"\u674E\u56DB",reviewStatus:"\u5F85\u5BA1\u6838"}],g=[{title:"\u5408\u540C\u540D\u79F0",dataIndex:"contractName",key:"contractName"},{title:"\u4E0A\u4F20\u65F6\u95F4",dataIndex:"uploadTime",key:"uploadTime"},{title:"\u4E0A\u4F20\u4EBA",dataIndex:"uploader",key:"uploader"},{title:"\u5BA1\u6838\u72B6\u6001",dataIndex:"reviewStatus",key:"reviewStatus"},{title:"\u64CD\u4F5C",key:"action",render:(d,o)=>r("span",{children:[t(s,{type:"link",children:"\u8BE6\u60C5"}),t(s,{type:"link",children:"\u4F5C\u5E9F"})]})}],M=()=>{const[d,o]=i.exports.useState(!1),p=i.exports.useRef(null),[n,F]=i.exports.useState(E);return r("div",{className:"home",children:[r("div",{style:{marginBottom:16},children:[t(s,{type:"primary",style:{marginRight:8},onClick:()=>{o(!0)},children:"\u4E0A\u4F20\u5408\u540C"}),t(s,{onClick:()=>{h.exports.saveAs(C,"contract_template.pdf")},children:"\u4E0B\u8F7D\u5408\u540C\u6A21\u677F"})]}),t(m,{columns:g,dataSource:n}),t(f,{title:"\u4E0A\u4F20\u5408\u540C",visible:d,onCancel:()=>{o(!1)},footer:null,children:r("div",{style:{backgroundColor:"#f0f0f0",padding:"20px",textAlign:"center",border:"1px dashed #ccc",cursor:"pointer"},onDragOver:e=>{e.preventDefault(),e.stopPropagation()},onDrop:e=>{e.preventDefault(),e.stopPropagation();const u=e.dataTransfer.files;if(u&&u.length>0){const a=u[0];if(a.type==="application/pdf"){console.log("\u4E0A\u4F20\u6587\u4EF6:",a),l.success("\u6587\u4EF6\u4E0A\u4F20\u6210\u529F"),o(!1);const c={key:String(n.length+1),contractName:a.name,uploadTime:new Date().toLocaleString(),uploader:"\u672A\u77E5",reviewStatus:"\u672A\u5BA1\u6838"};F([...n,c])}else l.error("\u4EC5\u652F\u6301\u4E0A\u4F20 PDF \u683C\u5F0F\u7684\u6587\u4EF6")}},children:[t("input",{type:"file",accept:".pdf",style:{display:"none"},onChange:e=>{const u=e.target.files;if(u&&u.length>0){const a=u[0];if(a.type==="application/pdf"){console.log("\u4E0A\u4F20\u6587\u4EF6:",a),l.success("\u6587\u4EF6\u4E0A\u4F20\u6210\u529F"),o(!1);const c={key:String(n.length+1),contractName:a.name,uploadTime:new Date().toLocaleString(),uploader:"\u672A\u77E5",reviewStatus:"\u672A\u5BA1\u6838"};F([...n,c])}else l.error("\u4EC5\u652F\u6301\u4E0A\u4F20 PDF \u683C\u5F0F\u7684\u6587\u4EF6")}},ref:p}),t("p",{onClick:()=>{var e;return(e=p.current)==null?void 0:e.click()},children:"\u652F\u6301\u62D6\u62FD\u6216\u70B9\u51FB\u4E0A\u4F20"})]})})]})};export{M as default};
