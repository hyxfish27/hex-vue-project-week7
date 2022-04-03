"use strict";(self["webpackChunkhex_vue_project_week7"]=self["webpackChunkhex_vue_project_week7"]||[]).push([[526],{1339:function(e,t,l){var s=l(7972),a=l.n(s);t["Z"]={methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(a())(this.$refs.modal)}}},2576:function(e,t,l){l.d(t,{Z:function(){return w}});var s=l(3396),a=l(7139);const d={id:"delProductModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},i={class:"modal-dialog"},o={class:"modal-content border-0"},r=(0,s._)("div",{class:"modal-header bg-danger text-white"},[(0,s._)("h5",{id:"delProductModalLabel",class:"modal-title"},[(0,s._)("span",null,"刪除產品")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),n={class:"modal-body"},u=(0,s.Uk)(" 是否刪除 "),c={class:"text-danger"},_=(0,s.Uk)(" 商品(刪除後將無法恢復)。 "),p={class:"modal-footer"},h=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function m(e,t,l,m,b,g){return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",i,[(0,s._)("div",o,[r,(0,s._)("div",n,[u,(0,s._)("strong",c,(0,a.zw)(e.delItem.title),1),_]),(0,s._)("div",p,[h,(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=t=>e.$emit("remove-item",e.delItem.id))}," 確認刪除 ")])])])],512)}var b=l(1339),g={props:["del-item"],mixins:[b.Z]},y=l(89);const v=(0,y.Z)(g,[["render",m]]);var w=v},7480:function(e,t,l){l.r(t),l.d(t,{default:function(){return Oe}});var s=l(3396),a=l(7139),d=l(9242);const i={class:"container"},o=(0,s._)("h3",{class:"h3 text-center my-4"},"訂單管理",-1),r={class:"table align-middle bg-white rounded-3"},n=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"購買時間"),(0,s._)("th",null,"Email"),(0,s._)("th",null,"購買款項"),(0,s._)("th",null,"應付金額"),(0,s._)("th",null,"是否付款"),(0,s._)("th",null,"操作")])],-1),u={style:{width:"200px"}},c={class:"row"},_={class:"col-12 col-md-6"},p={class:"form-check form-switch"},h=["id","onUpdate:modelValue","onChange"],m=["for"],b={class:"col-12 col-md-6"},g={key:0,class:"text-primary"},y={key:1,class:"text-light"},v={class:"btn-group btn-group-sm"},w=["onClick","disabled"],f=["onClick","disabled"],E={class:"fas fa-spinner fa-pulse"},x=(0,s.Uk)(" 刪除 ");function P(e,t,l,P,O,k){const A=(0,s.up)("Loading"),S=(0,s.up)("Pagination"),M=(0,s.up)("OrderModal"),U=(0,s.up)("DelModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(A,{"is-ready":O.isReady},null,8,["is-ready"]),(0,s._)("div",i,[o,(0,s._)("table",r,[n,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(O.orders,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",u,(0,a.zw)(e.$filters.timeConvert(t.create_at)),1),(0,s._)("td",null,(0,a.zw)(t.user.email),1),(0,s._)("td",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.products,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id+e.id},(0,a.zw)(e.product.title)+" "+(0,a.zw)(e.qty)+" / "+(0,a.zw)(e.product.unit),1)))),128))]),(0,s._)("td",null,(0,a.zw)(e.$filters.currency(t.total)),1),(0,s._)("td",null,[(0,s._)("div",c,[(0,s._)("div",_,[(0,s._)("div",p,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox",id:`enableSwitch${t.id}`,"onUpdate:modelValue":e=>t.is_paid=e,"true-value":!0,"false-value":!1,onChange:e=>k.updateEnableStatus(t)},null,40,h),[[d.e8,t.is_paid]]),(0,s._)("label",{class:"form-check-label",for:`enableSwitch${t.id}}`},null,8,m)])]),(0,s._)("div",b,[t.is_paid?((0,s.wg)(),(0,s.iD)("span",g,"已付款")):((0,s.wg)(),(0,s.iD)("span",y,"未付款"))])])]),(0,s._)("td",null,[(0,s._)("div",v,[(0,s._)("button",{type:"button",class:"btn btn-outline-primary",onClick:e=>k.openModal(t),disabled:O.isLoading===t.id}," 檢視 ",8,w),(0,s._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>k.openDelModal(t),disabled:O.isLoading===t.id},[(0,s.wy)((0,s._)("i",E,null,512),[[d.F8,O.isLoading===t.id]]),x],8,f)])])])))),128))])]),(0,s.Wm)(S,{pages:O.pagination,onEmitPages:k.getOrders},null,8,["pages","onEmitPages"]),(0,s.Wm)(M,{"temp-order":O.tempOrder,onGetOrders:k.getOrders,onEnableStatus:k.updateEnableStatus,ref:"adminOrder"},null,8,["temp-order","onGetOrders","onEnableStatus"]),(0,s.Wm)(U,{"del-item":O.tempOrder,onRemoveItem:k.removeOrder,ref:"delModal"},null,8,["del-item","onRemoveItem"])])],64)}const O={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},k={class:"modal-dialog modal-xl",role:"document"},A={class:"modal-content border-0"},S=(0,s._)("div",{class:"modal-header bg-dark text-white"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,s._)("span",null,"訂單細節")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},U={class:"row"},$={class:"col-12"},D=(0,s._)("h3",null,"用戶資料",-1),V={class:"table"},z={key:0},C=(0,s._)("th",{style:{width:"100px"}},"姓名",-1),L=(0,s._)("th",null,"Email",-1),R=(0,s._)("th",null,"電話",-1),j=(0,s._)("th",null,"地址",-1),I={class:"col-12"},N=(0,s._)("h3",null,"訂單細節",-1),Z={class:"table"},H=(0,s._)("th",{style:{width:"100px"}},"訂單編號",-1),G=(0,s._)("th",null,"下單時間",-1),B=(0,s._)("th",null,"付款時間",-1),T={key:0},F={key:1},W=(0,s._)("th",null,"付款狀態",-1),Y={key:0,class:"text-success"},q={key:1,class:"text-muted"},K=(0,s._)("th",null,"總金額",-1),J={class:"col-12"},Q=(0,s._)("h3",null,"選購商品",-1),X={class:"table"},ee=(0,s._)("thead",null,[(0,s._)("tr")],-1),te={class:"text-end"},le={class:"col-12"},se={class:"d-flex justify-content-end"},ae={class:"row"},de={class:"col-12 col-md-6"},ie={class:"form-check form-switch"},oe=["id"],re=["for"],ne={class:"col-12 col-md-6"},ue={key:0,class:"text-primary"},ce={key:1,class:"text-muted"},_e={class:"modal-footer"},pe=(0,s._)("button",{type:"button",class:"btn btn-secondary text-white","data-bs-dismiss":"modal"}," 取消 ",-1);function he(e,t,l,i,o,r){return(0,s.wg)(),(0,s.iD)("div",O,[(0,s._)("div",k,[(0,s._)("div",A,[S,(0,s._)("div",M,[(0,s._)("div",U,[(0,s._)("div",$,[D,(0,s._)("table",V,[e.tempOrder.user?((0,s.wg)(),(0,s.iD)("tbody",z,[(0,s._)("tr",null,[C,(0,s._)("td",null,(0,a.zw)(e.tempOrder.user.name),1)]),(0,s._)("tr",null,[L,(0,s._)("td",null,(0,a.zw)(e.tempOrder.user.email),1)]),(0,s._)("tr",null,[R,(0,s._)("td",null,(0,a.zw)(e.tempOrder.user.tel),1)]),(0,s._)("tr",null,[j,(0,s._)("td",null,(0,a.zw)(e.tempOrder.user.address),1)])])):(0,s.kq)("",!0)])]),(0,s._)("div",I,[N,(0,s._)("table",Z,[(0,s._)("tbody",null,[(0,s._)("tr",null,[H,(0,s._)("td",null,(0,a.zw)(e.tempOrder.id),1)]),(0,s._)("tr",null,[G,(0,s._)("td",null,(0,a.zw)(e.$filters.timeConvert(e.tempOrder.create_at)),1)]),(0,s._)("tr",null,[B,(0,s._)("td",null,[e.tempOrder.paid_date?((0,s.wg)(),(0,s.iD)("span",T,(0,a.zw)(e.$filters.timeConvert(e.tempOrder.paid_date)),1)):((0,s.wg)(),(0,s.iD)("span",F,"時間不正確"))])]),(0,s._)("tr",null,[W,(0,s._)("td",null,[e.tempOrder.is_paid?((0,s.wg)(),(0,s.iD)("strong",Y,"已付款")):((0,s.wg)(),(0,s.iD)("span",q,"尚未付款"))])]),(0,s._)("tr",null,[K,(0,s._)("td",null,(0,a.zw)(e.$filters.currency(e.tempOrder.total)),1)])])])]),(0,s._)("div",J,[Q,(0,s._)("table",X,[ee,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.tempOrder.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("th",null,(0,a.zw)(t.product.title),1),(0,s._)("td",null,(0,a.zw)(t.qty)+" / "+(0,a.zw)(t.product.unit),1),(0,s._)("td",te,(0,a.zw)(e.$filters.currency(t.product.price)),1)])))),128))])])]),(0,s._)("div",le,[(0,s._)("div",se,[(0,s._)("div",ae,[(0,s._)("div",de,[(0,s._)("div",ie,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox",id:`enableSwitch${e.tempOrder.id}`,"onUpdate:modelValue":t[0]||(t[0]=t=>e.tempOrder.is_paid=t),"true-value":!0,"false-value":!1},null,8,oe),[[d.e8,e.tempOrder.is_paid]]),(0,s._)("label",{class:"form-check-label",for:`enableSwitch${e.tempOrder.id}}`},null,8,re)])]),(0,s._)("div",ne,[e.tempOrder.is_paid?((0,s.wg)(),(0,s.iD)("span",ue,"已付款")):((0,s.wg)(),(0,s.iD)("span",ce,"未付款"))])])])])])]),(0,s._)("div",_e,[pe,(0,s._)("button",{type:"button",class:"btn btn-primary text-white",onClick:t[1]||(t[1]=t=>e.$emit("enable-status",e.tempOrder))}," 修改付款狀態 ")])])])],512)}var me=l(1339),be={props:["temp-order"],mixins:[me.Z]},ge=l(89);const ye=(0,ge.Z)(be,[["render",he]]);var ve=ye,we=l(2576),fe=l(535),Ee=l(7738),xe={data(){return{orders:[],tempOrder:{},pagination:{},isReady:!1,isLoading:"",OrderModal:""}},inject:["emitter"],components:{OrderModal:ve,DelModal:we.Z,Pagination:fe.Z,Loading:Ee.Z},methods:{getOrders(e=1){this.isReady=!1;const t=`https://vue3-course-api.hexschool.io/v2/api/hyxfish27/admin/orders?page=${e}`;this.$http.get(t).then((e=>{this.orders=e.data.orders,this.pagination=e.data.pagination,this.isReady=!0})).catch((e=>{this.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:`${{NODE_ENV:"production",VUE_APP_API:"https://vue3-course-api.hexschool.io/v2",VUE_APP_PATH:"hyxfish27",BASE_URL:"/hex-vue-project-week7/"}.VUE_APP_MESSAGE_FAIL}`})}))},removeOrder(e){this.isReady=!1;const t=`https://vue3-course-api.hexschool.io/v2/api/hyxfish27/admin/order/${e}`;this.$http.delete(t).then((e=>{this.emitter.emit("push-message",{style:"success",title:e.data.message,emoji:`${{NODE_ENV:"production",VUE_APP_API:"https://vue3-course-api.hexschool.io/v2",VUE_APP_PATH:"hyxfish27",BASE_URL:"/hex-vue-project-week7/"}.VUE_APP_MESSAGE_SUCCESS}`}),this.getOrders(),this.isReady=!0})).catch((e=>{this.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:`${{NODE_ENV:"production",VUE_APP_API:"https://vue3-course-api.hexschool.io/v2",VUE_APP_PATH:"hyxfish27",BASE_URL:"/hex-vue-project-week7/"}.VUE_APP_MESSAGE_FAIL}`}),this.isReady=!0})),this.$refs.delModal.hideModal()},updateEnableStatus(e){this.isReady=!1;const t=`https://vue3-course-api.hexschool.io/v2/api/hyxfish27/admin/order/${e.id}`,l={is_paid:e.is_paid};this.$http.put(t,{data:l}).then((e=>{this.emitter.emit("push-message",{style:"success",title:e.data.message,emoji:`${{NODE_ENV:"production",VUE_APP_API:"https://vue3-course-api.hexschool.io/v2",VUE_APP_PATH:"hyxfish27",BASE_URL:"/hex-vue-project-week7/"}.VUE_APP_MESSAGE_SUCCESS}`}),this.getOrders(this.pagination.current_page),this.isReady=!0})).catch((e=>{this.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:`${{NODE_ENV:"production",VUE_APP_API:"https://vue3-course-api.hexschool.io/v2",VUE_APP_PATH:"hyxfish27",BASE_URL:"/hex-vue-project-week7/"}.VUE_APP_MESSAGE_FAIL}`}),this.isReady=!0})),this.$refs.adminOrder.hideModal()},openModal(e){this.tempOrder={...e},this.$refs.adminOrder.openModal()},openDelModal(e){this.tempOrder={...e},this.$refs.delModal.openModal()}},mounted(){this.getOrders()}};const Pe=(0,ge.Z)(xe,[["render",P]]);var Oe=Pe}}]);
//# sourceMappingURL=526.03fa581f.js.map