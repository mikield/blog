import v from"./ArticlesListItem.b8e2a5a5.js";import k from"./ProseA.a5ad8e48.js";import w from"./ProseCodeInline.8218216f.js";import{u as A}from"./asyncData.015b055e.js";import{a as I,I as g,J as L,u as c,o as a,i as r,k as o,m as i,F as S,K as C,L as e,w as d,s as b,v as B,A as N,M as V,c as F,x as P}from"./entry.a724e635.js";import"./date.824a539b.js";const T=t=>(b("data-v-8d31ba38"),t=t(),B(),t),q={key:0,class:"articles-list"},D={class:"featured"},E={class:"layout"},J={key:1,class:"tour"},K=T(()=>o("p",null,"Seems like there are no articles yet.",-1)),M=I({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,_;const u=t,{data:m}=([s,_]=g(async()=>A("articles",async()=>await N(V(u.path)).sort({date:-1}).find())),s=await s,_(),s),n=L(()=>m.value||[]);return(Y,j)=>{var p;const l=v,f=k,h=w;return(p=c(n))!=null&&p.length?(a(),r("div",q,[o("div",D,[i(l,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",E,[(a(!0),r(S,null,C(c(n).slice(1),(y,x)=>(a(),F(l,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",J,[K,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:d(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}});const U=P(M,[["__scopeId","data-v-8d31ba38"]]);export{U as default};
