(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{8303:function(e,n,t){Promise.resolve().then(t.bind(t,2165)),Promise.resolve().then(t.bind(t,3386))},2165:function(e,n,t){"use strict";t.r(n);var l=t(7437),a=t(4795),s=t(713),i=t(4033),r=t(8823),c=t(992),d=t(901),o=t(3839),u=t(6172),x=t(5160),f=t(6212);n.default=()=>{var e,n;let{toast:t}=(0,o.pm)(),m=(0,i.useParams)(),{data:h,isLoading:p}=(0,s.ZP)(m.slug?{arg:{record_id:m.slug}}:null,x.nl,{onError:e=>{e instanceof u.Ug?t({variant:"destructive",title:"Terjadi Kesalahan",description:JSON.stringify(e.response,null,2)}):t({variant:"destructive",title:"Terjadi Kesalahan",description:"Tolong coba lagi setelah beberapa saat."})}});return(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsxs)("div",{className:(0,c.cn)("\n          flex flex-col md:flex-row\n          w-full max-w-[1000px] md:min-h-[400px]\n        "),children:[(0,l.jsx)("img",{src:(null==h?void 0:h.images.length)?f.Z.files.getUrl(h,h.images[0]):"",width:400,height:400,alt:"Picture of the author",className:(0,c.cn)("\n            flex-none object-contain\n          ")}),(0,l.jsxs)("div",{className:(0,c.cn)("\n            flex flex-col items-center gap-5\n            p-5\n            md:items-start\n          "),children:[(0,l.jsx)("h1",{className:(0,c.cn)("\n             text-2xl\n            "),children:null==h?void 0:h.title}),(0,l.jsxs)("p",{className:(0,c.cn)("\n              flex gap-2\n              w-full\n              text-md text-gray-600\n            "),children:[(0,l.jsx)(a.Z,{}),null==h?void 0:null===(n=h.expand)||void 0===n?void 0:null===(e=n.user)||void 0===e?void 0:e.fullname]}),(0,l.jsx)("h4",{className:(0,c.cn)("\n              text-md text-gray-600\n            "),children:null==h?void 0:h.abstract})]})]}),(0,l.jsx)(d.Z,{className:"w-full md:max-w-[1000px] my-2"}),(0,l.jsxs)("div",{className:(0,c.cn)("\n          w-full md:max-w-[1000px]\n          flex flex-col md:flex-row gap-4\n          my-6\n        "),children:[(0,l.jsx)("div",{className:(0,c.cn)("flex flex-col basis-9/12 px-4 md:px-0 rich-editor"),children:(0,l.jsx)(r.U,{children:null==h?void 0:h.description})}),(0,l.jsx)("div",{className:(0,c.cn)("flex flex-col items-center basis-3/12")})]})]})}},901:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var l=t(7437),a=t(2265),s=t(6823),i=t(992);let r=a.forwardRef((e,n)=>{let{className:t,orientation:a="horizontal",decorative:r=!0,...c}=e;return(0,l.jsx)(s.f,{ref:n,decorative:r,orientation:a,className:(0,i.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",t),...c})});r.displayName=s.f.displayName},5160:function(e,n,t){"use strict";t.d(n,{Gk:function(){return GetListIdeas},S$:function(){return PostCreateIdeas},V2:function(){return PostUpdateIdeas},nl:function(){return GetIdeaDetail}});var l=t(6212);let PostCreateIdeas=async(e,n)=>{let{arg:t}=n;return await l.Z.collection("ideas").create(t.data)},PostUpdateIdeas=async(e,n)=>{let{arg:t}=n;return await l.Z.collection("ideas").update(t.record_id,t.data)},GetListIdeas=e=>{let{arg:n}=e;return l.Z.collection("ideas").getList(n.page,n.perPage,n.options)},GetIdeaDetail=e=>{let{arg:n}=e;return l.Z.collection("ideas").getOne(n.record_id,{expand:"user"})}}},function(e){e.O(0,[689,804,815,336,386,971,864,744],function(){return e(e.s=8303)}),_N_E=e.O()}]);