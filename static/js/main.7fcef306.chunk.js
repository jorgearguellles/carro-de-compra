(this["webpackJsonpcarro-de-compras"]=this["webpackJsonpcarro-de-compras"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(8),c=r.n(o),i=(r(13),r(6)),s=r(2),u=r(3),l=r(5),p=r(4),b=r(0),d={btn:{border:"none",backgroundColor:"#211953",color:"white",padding:"15px 20px",borderRadius:"6px",cursor:"pointer",fontSize:"18px"}},j=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(b.jsx)("button",Object(i.a)({style:d.btn},this.props))}}]),r}(n.Component),h={producto:{border:"solid 1px #eee",borderRadius:"10px",boxShadow:"0 5px 5px rgb(0,0,0,0.1)",width:"30%",padding:"10px 15px",textAlign:"center"},img:{width:"100%"}},O=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.producto,r=e.agregarAlCarro;return Object(b.jsxs)("div",{style:h.producto,children:[Object(b.jsx)("img",{style:h.img,alt:t.name,src:t.img}),Object(b.jsx)("h3",{children:t.name}),Object(b.jsx)("p",{children:t.price}),Object(b.jsx)(j,{onClick:function(){return r(t)},children:"Agregar al carro"})]})}}]),r}(n.Component),f={productos:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},x=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.productos,r=e.agregarAlCarro;return Object(b.jsx)("div",{style:f.productos,children:t.map((function(e){return Object(b.jsx)(O,{agregarAlCarro:r,producto:e},e.name)}))})}}]),r}(n.Component),g={layout:{backgroundColor:"#fff",color:"#0A283E",display:"flex",flexDirection:"column",alignItems:"center"},container:{width:"1200px"}},m=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(b.jsxs)("div",{style:g.layout,children:[" ",Object(b.jsxs)("div",{style:g.container,children:[" ",this.props.children]})]})}}]),r}(n.Component),v={title:{marginBottom:"30px"}},y=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(b.jsx)("h1",{style:v.title,children:"Tienda"})}}]),r}(n.Component),C={logo:{fontWeight:"700",fontSize:"2rem"}},k=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(b.jsx)("div",{style:C.logo,children:"Shop"})}}]),r}(n.Component),w={bubbleAlert:{backgroundColor:"#E9725A",color:"#fff",borderRadius:"15px",padding:"2px 10px",fontSize:"0.9rem",width:"20px"}},A=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"getNumber",value:function(e){return e?e>9?"9+":e:" "}},{key:"render",value:function(){var e=this.props.value;return Object(b.jsx)("span",{style:w.bubbleAlert,children:this.getNumber(e)})}}]),r}(n.Component),S={detallesCarro:{backgroundColor:"#fff",position:"absolute",marginTop:"30px",boxShadow:"1px 5px 5px rgb(0,0,0,0.3)",borderRadius:"5px",width:"300px",right:50},ul:{margin:"0",padding:"0"},producto:{listStyleType:"none",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"25px 20px",borderBottom:"solid 1px #EEE"}},V=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props.carro;return console.log(e),Object(b.jsx)("div",{style:S.detallesCarro,children:Object(b.jsx)("ul",{style:S.ul,children:e.map((function(e){return Object(b.jsxs)("li",{style:S.producto,children:[Object(b.jsx)("img",{alt:e.name,src:e.img,width:"50",height:"32"}),e.name," ",Object(b.jsx)("span",{children:e.cantidad})]},e.name)}))})})}}]),r}(n.Component),E={carro:{backgroundColor:"#359A2C",color:"#fff",border:"none",borderRadius:"10px",padding:"15px",cursor:"pointer"},bubble:{position:"relative",left:"14px",top:"20px"}},T=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.carro,r=e.esCarroVisible,n=e.mostrarCarro,a=t.reduce((function(e,t){return e+t.cantidad}),0);return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{style:E.bubble,children:0!==a?Object(b.jsx)(A,{value:a}):null}),Object(b.jsx)("button",{style:E.carro,onClick:n,children:"Carro"}),r?Object(b.jsx)(V,{carro:t}):null]})}}]),r}(n.Component),I={navbar:{display:"flex",flexDirection:"row",alignItems:"center",height:"100px",justifyContent:"space-between",position:"relative",padding:"0 50px",boxShadow:"0 2px 3px rgb(0,0,0,0.1)"}},R=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.carro,r=e.esCarroVisible,n=e.mostrarCarro;return Object(b.jsxs)("nav",{style:I.navbar,children:[Object(b.jsx)(k,{children:"Logo"}),Object(b.jsx)(T,{carro:t,esCarroVisible:r,mostrarCarro:n})]})}}]),r}(n.Component),B=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={productos:[{name:"Tomate",price:1500,img:"/productos/tomate.jpg"},{name:"Arbejas",price:2500,img:"/productos/arbejas.jpg"},{name:"Lechuga",price:500,img:"/productos/lechuga.jpg"}],carro:[],esCarroVisible:!1},e.agregarAlCarro=function(t){var r=e.state.carro;if(r.find((function(e){return e.name===t.name}))){var n=r.map((function(e){return e.name===t.name?Object(i.a)(Object(i.a)({},e),{},{cantidad:e.cantidad+1}):e}));return e.setState({carro:n})}return e.setState({carro:e.state.carro.concat(Object(i.a)(Object(i.a)({},t),{},{cantidad:1}))})},e.mostrarCarro=function(){e.state.carro.length&&e.setState({esCarroVisible:!e.state.esCarroVisible})},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this.state.esCarroVisible;return Object(b.jsxs)("div",{children:[Object(b.jsx)(R,{carro:this.state.carro,esCarroVisible:e,mostrarCarro:this.mostrarCarro}),Object(b.jsxs)(m,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(x,{agregarAlCarro:this.agregarAlCarro,productos:this.state.productos})]})]})}}]),r}(n.Component),D=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),o(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),D()}},[[15,1,2]]]);
//# sourceMappingURL=main.7fcef306.chunk.js.map