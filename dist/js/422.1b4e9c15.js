(self["webpackChunkcashflow"]=self["webpackChunkcashflow"]||[]).push([[422],{3321:(e,t,n)=>{var u=n(2109),a=n(9781),r=n(6048).f;u({target:"Object",stat:!0,forced:Object.defineProperties!==r,sham:!a},{defineProperties:r})},5003:(e,t,n)=>{var u=n(2109),a=n(7293),r=n(5656),o=n(1236).f,l=n(9781),i=!l||a((function(){o(1)}));u({target:"Object",stat:!0,forced:i,sham:!l},{getOwnPropertyDescriptor:function(e,t){return o(r(e),t)}})},9337:(e,t,n)=>{var u=n(2109),a=n(9781),r=n(3887),o=n(5656),l=n(1236),i=n(6135);u({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,n,u=o(e),a=l.f,c=r(u),s={},v=0;while(c.length>v)n=a(u,t=c[v++]),void 0!==n&&i(s,t,n);return s}})},9603:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>We});var u=n(3396);function a(e,t,n,a,r,o){var l=(0,u.up)("Header"),i=(0,u.up)("Graphic"),c=(0,u.up)("Action"),s=(0,u.up)("Resume"),v=(0,u.up)("Movements"),m=(0,u.up)("Layout");return(0,u.wg)(),(0,u.j4)(m,null,{header:(0,u.w5)((function(){return[(0,u.Wm)(l)]})),resume:(0,u.w5)((function(){return[(0,u.Wm)(s,{"total-label":"Total Saving",label:r.label,"total-amount":o.totalAmount,amount:r.amount},{graphic:(0,u.w5)((function(){return[(0,u.Wm)(i,{amounts:o.amounts,onSelect:o.select},null,8,["amounts","onSelect"])]})),action:(0,u.w5)((function(){return[(0,u.Wm)(c,{onCreate:o.create},null,8,["onCreate"])]})),_:1},8,["label","total-amount","amount"])]})),movements:(0,u.w5)((function(){return[(0,u.Wm)(v,{movements:r.movements,onRemove:o.remove},null,8,["movements","onRemove"])]})),_:1})}n(7941),n(2526),n(7327),n(1539),n(5003),n(7658),n(9554),n(4747),n(9337),n(3321),n(9070);var r=n(2482);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);t&&(u=u.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,u)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(1249),n(3710),n(7042),n(5827),n(9753),n(4553),n(561),n(8862);var i=n(5010),c=n(4870),s=function(e){return(0,u.dD)("data-v-ae90e716"),e=e(),(0,u.Cn)(),e},v={class:"header"},m={class:"reume"},d={class:"movements"},f=s((function(){return(0,u._)("div",{class:"grip"},null,-1)})),p=[f],_={class:"body"};const h={__name:"Layout",setup:function(e){var t=(0,c.iH)(!1);return function(e,n){return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u._)("div",v,[(0,u.WI)(e.$slots,"header")]),(0,u._)("div",m,[(0,u.WI)(e.$slots,"resume")]),(0,u._)("div",d,[(0,u._)("div",{class:"head",onClick:n[0]||(n[0]=function(e){return t.value=!t.value})},p),(0,u.wy)((0,u._)("div",_,[(0,u.WI)(e.$slots,"movements")],512),[[i.F8,t.value]])])],64)}}};var b=n(89);const y=(0,b.Z)(h,[["__scopeId","data-v-ae90e716"]]),g=y;var w=n(1),D=function(e){return(0,u.dD)("data-v-6c39f33e"),e=e(),(0,u.Cn)(),e},I=D((function(){return(0,u._)("h1",null,[(0,u._)("span",null,"Cash"),(0,u.Uk)("Flow")],-1)})),O=D((function(){return(0,u._)("span",null,null,-1)}));function C(e,t,n,a,r,o){return(0,u.wg)(),(0,u.iD)("header",null,[(0,u._)("img",{onClick:t[0]||(t[0]=function(){return o.reload&&o.reload.apply(o,arguments)}),src:w,alt:"Logo"}),I,O])}const j={methods:{reload:function(){location.reload()}}},k=(0,b.Z)(j,[["render",C],["__scopeId","data-v-6c39f33e"]]),S=k;var x=n(7139),A={class:"box"},H={class:"graphic"},M={class:"action"};function P(e,t,n,a,r,o){return(0,u.wg)(),(0,u.iD)("main",null,[(0,u._)("p",null,(0,x.zw)(o.labelVisual),1),(0,u._)("h1",null,(0,x.zw)(o.amountCurrency),1),(0,u._)("div",A,[(0,u._)("div",H,[(0,u.WI)(e.$slots,"graphic",{},void 0,!0)]),(0,u._)("div",M,[(0,u.WI)(e.$slots,"action",{},void 0,!0)])])])}n(9653);var U=new Intl.NumberFormat("en-EU",{style:"currency",currency:"EUR"});const W={props:{totalLabel:{type:String},label:{type:String,default:null},totalAmount:{type:Number},amount:{type:Number,default:null}},computed:{labelVisual:function(){return null!==this.label?this.label:this.totalLabel},amountVisual:function(){return null!==this.amount?this.amount:this.totalAmount},amountCurrency:function(){return U.format(this.amountVisual)}}},Z=(0,b.Z)(W,[["render",P],["__scopeId","data-v-69c3fa6b"]]),R=Z,F=n.p+"img/close-icon.db321b12.svg";var N=function(e){return(0,u.dD)("data-v-087812a5"),e=e(),(0,u.Cn)(),e},E={class:"modal"},V=N((function(){return(0,u._)("p",null,"New movement",-1)})),B={class:"body"};const L={__name:"Modal",emits:["close"],setup:function(e,t){var n=t.emit,a=function(){return n("close")};return function(e,t){return(0,u.wg)(),(0,u.iD)("div",E,[(0,u._)("div",{class:"head"},[V,(0,u._)("img",{onClick:a,src:F,alt:"close"})]),(0,u._)("div",B,[(0,u.WI)(e.$slots,"default")])])}}},T=(0,b.Z)(L,[["__scopeId","data-v-087812a5"]]),$=T;var z=function(e){return(0,u.dD)("data-v-f3397ff0"),e=e(),(0,u.Cn)(),e},G=["onSubmit"],K={class:"field"},Y=z((function(){return(0,u._)("label",{for:""},"Title",-1)})),J={class:"field"},Q=z((function(){return(0,u._)("label",{for:""},"Amount",-1)})),X={class:"field"},q=z((function(){return(0,u._)("label",{for:""},"Description",-1)})),ee={rows:"4"},te={class:"field"},ne={class:"radio-label"},ue=z((function(){return(0,u._)("span",null,"Income",-1)})),ae={class:"radio-label"},re=z((function(){return(0,u._)("span",null,"Expense",-1)})),oe=z((function(){return(0,u._)("div",null,[(0,u._)("button",{class:"action"},"Add transaction")],-1)}));const le={__name:"Action",emits:["create"],setup:function(e,t){var n=t.emit,a=(0,c.iH)(!1),r=(0,c.iH)(""),o=(0,c.iH)(0),l=(0,c.iH)(""),s=(0,c.iH)("Income"),v=function(){a.value=!a.value,n("create",{title:r.value,description:l.value,amount:"Income"===s.value?o.value:-o.value,time:new Date,id:new Date}),r.value="",l.value="",o.value=0,s.value="Income"};return function(e,t){var n=(0,u.Q2)("modal");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u._)("button",{onClick:t[0]||(t[0]=function(e){return a.value=!0})},"Add transaction"),((0,u.wg)(),(0,u.j4)(u.lR,{to:"#app"},[(0,u.wy)((0,u.Wm)($,{onClose:t[5]||(t[5]=function(e){return a.value=!1})},{default:(0,u.w5)((function(){return[(0,u._)("form",{onSubmit:(0,i.iM)(v,["prevent"])},[(0,u._)("div",K,[Y,(0,u.wy)((0,u._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.value=e})},null,512),[[i.nr,r.value]])]),(0,u._)("div",J,[Q,(0,u.wy)((0,u._)("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.value=e})},null,512),[[i.nr,o.value]])]),(0,u._)("div",X,[q,(0,u.wy)((0,u._)("textarea",ee,null,512),[[n,l.value]])]),(0,u._)("div",te,[(0,u._)("label",ne,[(0,u.wy)((0,u._)("input",{type:"radio","onUpdate:modelValue":t[3]||(t[3]=function(e){return s.value=e}),value:"Income"},null,512),[[i.G2,s.value]]),ue]),(0,u._)("label",ae,[(0,u.wy)((0,u._)("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=function(e){return s.value=e}),value:"Expense"},null,512),[[i.G2,s.value]]),re])]),oe],40,G)]})),_:1},512),[[i.F8,a.value]])]))],64)}}},ie=(0,b.Z)(le,[["__scopeId","data-v-f3397ff0"]]),ce=ie;n(1817);const se=n.p+"img/trash-icon.bc08e8c5.svg";var ve={class:"movement"},me={class:"content"},de={class:"action"};const fe={__name:"Movement",props:{id:{type:Number},title:{type:String},description:{type:String},amount:{type:Number}},emits:["remove"],setup:function(e,t){var n=t.emit,a=e,r=new Intl.NumberFormat("en-EU",{style:"currency",currency:"EUR"}),o=(0,c.BK)(a),l=o.id,i=o.title,s=o.description,v=o.amount,m=(0,u.Fl)((function(){return r.format(v.value)})),d=(0,u.Fl)((function(){return v.value<0})),f=function(){n("remove",l.value)};return function(e,t){return(0,u.wg)(),(0,u.iD)("div",ve,[(0,u._)("div",me,[(0,u._)("h4",null,(0,x.zw)((0,c.SU)(i)),1),(0,u._)("p",null,(0,x.zw)((0,c.SU)(s)),1)]),(0,u._)("div",de,[(0,u._)("img",{src:se,alt:"delete",onClick:f}),(0,u._)("p",{class:(0,x.C_)({red:d.value,green:!d.value})},(0,x.zw)(m.value),3)])])}}},pe=(0,b.Z)(fe,[["__scopeId","data-v-81250d8a"]]),_e=pe;var he=function(e){return(0,u.dD)("data-v-0bcb2c59"),e=e(),(0,u.Cn)(),e},be={class:"movements"},ye=he((function(){return(0,u._)("h2",{class:"title"},"Record",-1)})),ge={class:"content"};const we={__name:"Index",props:{movements:{type:Array,defoult:function(){return[]}}},emits:["remove"],setup:function(e,t){var n=t.emit,a=e,r=(0,c.BK)(a),o=r.movements,l=function(e){n("remove",e)};return function(e,t){return(0,u.wg)(),(0,u.iD)("div",be,[ye,(0,u._)("div",ge,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,c.SU)(o),(function(e){var t=e.id,n=e.title,a=e.description,r=e.amount;return(0,u.wg)(),(0,u.j4)(_e,{key:t,id:t,title:n,description:a,amount:r,onRemove:l},null,8,["id","title","description","amount"])})),128))])])}}},De=(0,b.Z)(we,[["__scopeId","data-v-0bcb2c59"]]),Ie=De;var Oe=n(9584),Ce=(n(2222),function(e){return(0,u.dD)("data-v-a8da5914"),e=e(),(0,u.Cn)(),e}),je=["y1","y2"],ke=["points"],Se=["x1","x2"],xe=Ce((function(){return(0,u._)("p",null,"The last 90 days",-1)}));const Ae={__name:"Graphic",props:{amounts:{type:Array,default:function(){return[]}}},emits:["select"],setup:function(e,t){var n=t.emit,a=e,r=(0,c.BK)(a),o=r.amounts,l=function(e){var t=Math.min.apply(Math,(0,Oe.Z)(o.value)),n=Math.max.apply(Math,(0,Oe.Z)(o.value)),u=e+Math.abs(t),a=Math.abs(n)+Math.abs(t);return 200-100*u/a*2},s=(0,u.Fl)((function(){return l(0)})),v=(0,u.Fl)((function(){var e=o.value.length;return o.value.reduce((function(t,n,u){var a=300/e*(u+1),r=l(n);return"".concat(t," ").concat(a,",").concat(r)}),"0, ".concat(l(o.value.length?o.value[0]:0)))})),m=(0,c.iH)(!1),d=(0,c.iH)(0);(0,u.YP)(d,(function(e){var t=Math.ceil(e/(300/o.value.length));t<0||t>o.value.length||n("select",o.value[t-1])}));var f=function(e){var t=e.target,n=e.touches;m.value=!0;var u=t.getBoundingClientRect().width,a=t.getBoundingClientRect().x,r=n[0].clientX;d.value=300*(r-a)/u},p=function(){m.value=!1};return function(e,t){return(0,u.wg)(),(0,u.iD)("div",null,[((0,u.wg)(),(0,u.iD)("svg",{onTouchstart:f,onTouchmove:f,onTouchend:p,viewBox:"0 0 300 200"},[(0,u._)("line",{stroke:"#c4c4c4","stroke-width":"2",x1:"0",y1:s.value,x2:"300",y2:s.value},null,8,je),(0,u._)("polyline",{fill:"none",stroke:"#0689B0","stroke-width":"2",points:v.value},null,8,ke),(0,u.wy)((0,u._)("line",{stroke:"#04b500","stroke-width":"2",x1:d.value,y1:"0",x2:d.value,y2:"200"},null,8,Se),[[i.F8,m.value]])],32)),xe])}}},He=(0,b.Z)(Ae,[["__scopeId","data-v-a8da5914"]]),Me=He,Pe={components:{Layout:g,Header:S,Resume:R,Action:ce,Movements:Ie,Graphic:Me},data:function(){return{label:null,amount:null,movements:[]}},computed:{amounts:function(){var e=this.movements.filter((function(e){var t=new Date,n=t.setDate(t.getDate()-30);return e.time>n})).map((function(e){return e.amount}));return e.map((function(t,n){var u=e.slice(0,n+1);return u.reduce((function(e,t){return e+t}),0)}))},totalAmount:function(){return this.movements.reduce((function(e,t){return e+t.amount}),0)}},mounted:function(){var e=JSON.parse(localStorage.getItem("movements"));Array.isArray(e)&&(this.movements=e.map((function(e){return l(l({},e),{},{time:new Date(e.time)})})))},methods:{create:function(e){this.movements.push(e),this.save()},remove:function(e){var t=this.movements.findIndex((function(t){return t.id===e}));this.movements.splice(t,1),this.save()},save:function(){localStorage.setItem("movements",JSON.stringify(this.movements))},select:function(e){console.log(e),this.amount=e}}},Ue=(0,b.Z)(Pe,[["render",a]]),We=Ue}}]);
//# sourceMappingURL=422.1b4e9c15.js.map