import{p as s,g as d,c as r,e as n,n as l,q as a}from"./index-a7550e58.js";const u=s({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function g(e){const t=d("useRender");t.render=e}const b=s({tag:{type:String,default:"div"}},"tag");const h=s({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function v(e){return{dimensionStyles:r(()=>({height:n(e.height),maxHeight:n(e.maxHeight),maxWidth:n(e.maxWidth),minHeight:n(e.minHeight),minWidth:n(e.minWidth),width:n(e.width)}))}}function S(e){return{aspectStyles:r(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const y=s({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...u(),...h()},"VResponsive"),f=l()({name:"VResponsive",props:y(),setup(e,t){let{slots:i}=t;const{aspectStyles:m}=S(e),{dimensionStyles:c}=v(e);return g(()=>{var o;return a("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[a("div",{class:"v-responsive__sizer",style:m.value},null),(o=i.additional)==null?void 0:o.call(i),i.default&&a("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}});export{f as V,b as a,y as b,u as m,g as u};
