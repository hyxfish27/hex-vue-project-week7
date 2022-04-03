"use strict";(self["webpackChunkhex_vue_project_week7"]=self["webpackChunkhex_vue_project_week7"]||[]).push([[912],{2912:function(t,a,e){e.r(a),e.d(a,{default:function(){return z}});var s=e(3396);const n={class:"container-fluid mt-3 position-relative"};function o(t,a,e,o,l,r){const i=(0,s.up)("DashboardNav"),c=(0,s.up)("ToastMessage"),u=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i),(0,s._)("div",n,[(0,s.Wm)(c),l.adminStatus?((0,s.wg)(),(0,s.j4)(u,{key:0})):(0,s.kq)("",!0)])],64)}const l={class:"navbar navbar-expand-lg navbar-dark bg-dark"},r={class:"container-fluid"},i=(0,s.Uk)("後台首頁"),c=(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},d={class:"navbar-nav"},v=(0,s.Uk)(" 產品列表 "),p=(0,s.Uk)(" 訂單管理 "),h={class:"navbar-nav ms-auto"},m=(0,s.Uk)(" 前台商品 "),k=(0,s.Uk)(" 購物車 ");function g(t,a,e,n,o,g){const b=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("nav",l,[(0,s._)("div",r,[(0,s.Wm)(b,{class:"navbar-brand",to:"/admin"},{default:(0,s.w5)((()=>[i])),_:1}),c,(0,s._)("div",u,[(0,s._)("div",d,[(0,s.Wm)(b,{class:"nav-link",to:"/admin/products"},{default:(0,s.w5)((()=>[v])),_:1}),(0,s.Wm)(b,{class:"nav-link",to:"/admin/orders"},{default:(0,s.w5)((()=>[p])),_:1})]),(0,s._)("div",h,[(0,s.Wm)(b,{class:"nav-link",to:"/user/products"},{default:(0,s.w5)((()=>[m])),_:1}),(0,s.Wm)(b,{class:"nav-link",to:"/user/cart"},{default:(0,s.w5)((()=>[k])),_:1}),(0,s._)("button",{class:"btn btn-danger nav-link",type:"button",onClick:a[0]||(a[0]=(...t)=>g.logout&&g.logout(...t))}," 登出 ")])])])])])}var b={methods:{logout(){const t="https://vue3-course-api.hexschool.io/v2/logout";this.$http.post(t).then((t=>{t.data.success&&(document.cookie="myToken=;expires=;",alert("已成功登出"),this.$router.replace("/"))}))}}},_=e(89);const w=(0,_.Z)(b,[["render",g]]);var f=w,y=e(5011),$=e(7139);const x={class:"toast-container position-fixed pe-3 top-0 end-0",style:{"z-index":"1500"}},C={class:"toast-header"},D={class:"me-auto"},T=["onClick"],W={key:0,class:"toast-body"};function A(t,a,e,n,o,l){return(0,s.wg)(),(0,s.iD)("div",x,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.messages,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{key:a,class:(0,$.C_)(["toast show",`toast${a}`]),role:"alert"},[(0,s._)("div",C,[(0,s._)("span",{class:(0,$.C_)([`bg-${t.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,s._)("strong",D,(0,$.zw)(t.title),1),(0,s._)("button",{type:"button",class:"btn-close",onClick:t=>l.clearToast(a),"aria-label":"Close"},null,8,T)]),t.content?((0,s.wg)(),(0,s.iD)("div",W,(0,$.zw)(t.content),1)):(0,s.kq)("",!0)],2)))),128))])}var M={data(){return{messages:[]}},inject:["emitter"],methods:{toastShow(){setTimeout((()=>{this.messages.shift()}),4e3)},clearToast(t){this.messages.splice(t,1)}},mounted(){this.emitter.on("push-message",(t=>{const{style:a="success",title:e,content:s}=t;this.messages.push({style:a,title:e,content:s}),this.toastShow()}))}};const N=(0,_.Z)(M,[["render",A]]);var S=N,U={data(){return{adminStatus:!1}},components:{DashboardNav:f,ToastMessage:S},provide(){return{emitter:y.Z}},methods:{checkAdmin(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(t){this.$http.defaults.headers.common.Authorization=`${t}`;const a="https://vue3-course-api.hexschool.io/v2/api/user/check";this.$http.post(a).then((()=>{this.adminStatus=!0})).catch((t=>{alert(t.data.message),this.$router.replace("/login")}))}else alert("請重新登入 > <"),this.$router.push("/login")}},mounted(){this.checkAdmin()}};const j=(0,_.Z)(U,[["render",o]]);var z=j}}]);
//# sourceMappingURL=912.0b9a3acb.js.map