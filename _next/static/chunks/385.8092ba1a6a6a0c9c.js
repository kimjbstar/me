"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[385],{47385:function(e,t,r){let a;r.r(t),r.d(t,{diagram:function(){return S}});var o=r(55275),l=r(59373),i=r(43349);r(11941),r(17967),r(27856),r(70277),r(45625),r(39354),r(91518);let n=(e,t,r)=>{let{parentById:a}=r,o=new Set,l=e;for(;l;){if(o.add(l),l===t)return l;l=a[l]}for(l=t;l;){if(o.has(l))return l;l=a[l]}return"root"},s={},d={},c={},h=function(e,t,r,a,l,n,s){let d=r.select(`[id="${t}"]`),h=d.insert("g").attr("class","nodes"),p=Object.keys(e);return p.forEach(function(t){let r,s,p;let u=e[t],b="default";u.classes.length>0&&(b=u.classes.join(" "));let g=(0,o.a)(u.styles),y=void 0!==u.text?u.text:u.id,w={width:0,height:0};if((0,o.e)((0,o.g)().flowchart.htmlLabels)){let e={label:y.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)};r=(0,i.a)(d,e).node();let t=r.getBBox();w.width=t.width,w.height=t.height,w.labelNode=r,r.parentNode.removeChild(r)}else{let e=a.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",g.labelStyle.replace("color:","fill:"));let t=y.split(o.c.lineBreakRegex);for(let r of t){let t=a.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}r=e;let l=r.getBBox();w.width=l.width,w.height=l.height,w.labelNode=r}let f=[{id:u.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:u.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:u.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:u.id+"-north",layoutOptions:{"port.side":"NORTH"}}],k=0,x="",m={};switch(u.type){case"round":k=5,x="rect";break;case"square":case"group":default:x="rect";break;case"diamond":x="question",m={portConstraints:"FIXED_SIDE"};break;case"hexagon":x="hexagon";break;case"odd":case"odd_right":x="rect_left_inv_arrow";break;case"lean_right":x="lean_right";break;case"lean_left":x="lean_left";break;case"trapezoid":x="trapezoid";break;case"inv_trapezoid":x="inv_trapezoid";break;case"circle":x="circle";break;case"ellipse":x="ellipse";break;case"stadium":x="stadium";break;case"subroutine":x="subroutine";break;case"cylinder":x="cylinder";break;case"doublecircle":x="doublecircle"}let v={labelStyle:g.labelStyle,shape:x,labelText:y,rx:k,ry:k,class:b,style:g.style,id:u.id,link:u.link,linkTarget:u.linkTarget,tooltip:l.db.getTooltip(u.id)||"",domId:l.db.lookUpDomId(u.id),haveCallback:u.haveCallback,width:"group"===u.type?500:void 0,dir:u.dir,type:u.type,props:u.props,padding:(0,o.g)().flowchart.padding};"group"!==v.type&&(s=(p=(0,o.b)(h,v,u.dir)).node().getBBox());let _={id:u.id,ports:"diamond"===u.type?f:[],layoutOptions:m,labelText:y,labelData:w,domId:l.db.lookUpDomId(u.id),width:null==s?void 0:s.width,height:null==s?void 0:s.height,type:u.type,el:p,parent:n.parentById[u.id]};c[v.id]=_}),s},p=(e,t,r)=>{let a={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return a.TD=a.TB,o.l.info("abc88",r,t,e),a[r][t][e]},u=(e,t,r)=>{if(o.l.info("getNextPort abc88",{node:e,edgeDirection:t,graphDirection:r}),!s[e])switch(r){case"TB":case"TD":s[e]={inPosition:"north",outPosition:"south"};break;case"BT":s[e]={inPosition:"south",outPosition:"north"};break;case"RL":s[e]={inPosition:"east",outPosition:"west"};break;case"LR":s[e]={inPosition:"west",outPosition:"east"}}let a="in"===t?s[e].inPosition:s[e].outPosition;return"in"===t?s[e].inPosition=p(s[e].inPosition,t,r):s[e].outPosition=p(s[e].outPosition,t,r),a},b=(e,t)=>{let r=e.start,a=e.end,o=c[r],l=c[a];return o&&l&&("diamond"===o.type&&(r=`${r}-${u(r,"out",t)}`),"diamond"===l.type&&(a=`${a}-${u(a,"in",t)}`)),{source:r,target:a}},g=function(e,t,r,a){let i,n;o.l.info("abc78 edges = ",e);let s=a.insert("g").attr("class","edgeLabels"),c={},h=t.db.getDirection();if(void 0!==e.defaultStyle){let t=(0,o.a)(e.defaultStyle);i=t.style,n=t.labelStyle}return e.forEach(function(t){var a="L-"+t.start+"-"+t.end;void 0===c[a]?(c[a]=0,o.l.info("abc78 new entry",a,c[a])):(c[a]++,o.l.info("abc78 new entry",a,c[a]));let p=a+"-"+c[a];o.l.info("abc78 new link id to be used is",a,p,c[a]);var u="LS-"+t.start,g="LE-"+t.end;let y={style:"",labelStyle:""};switch(y.minlen=t.length||1,"arrow_open"===t.type?y.arrowhead="none":y.arrowhead="normal",y.arrowTypeStart="arrow_open",y.arrowTypeEnd="arrow_open",t.type){case"double_arrow_cross":y.arrowTypeStart="arrow_cross";case"arrow_cross":y.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":y.arrowTypeStart="arrow_point";case"arrow_point":y.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":y.arrowTypeStart="arrow_circle";case"arrow_circle":y.arrowTypeEnd="arrow_circle"}let w="",f="";switch(t.stroke){case"normal":w="fill:none;",void 0!==i&&(w=i),void 0!==n&&(f=n),y.thickness="normal",y.pattern="solid";break;case"dotted":y.thickness="normal",y.pattern="dotted",y.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":y.thickness="thick",y.pattern="solid",y.style="stroke-width: 3.5px;fill:none;"}if(void 0!==t.style){let e=(0,o.a)(t.style);w=e.style,f=e.labelStyle}y.style=y.style+=w,y.labelStyle=y.labelStyle+=f,void 0!==t.interpolate?y.curve=(0,o.d)(t.interpolate,l.c_6):void 0!==e.defaultInterpolate?y.curve=(0,o.d)(e.defaultInterpolate,l.c_6):y.curve=(0,o.d)(d.curve,l.c_6),void 0===t.text?void 0!==t.style&&(y.arrowheadStyle="fill: #333"):(y.arrowheadStyle="fill: #333",y.labelpos="c"),y.labelType="text",y.label=t.text.replace(o.c.lineBreakRegex,"\n"),void 0===t.style&&(y.style=y.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),y.labelStyle=y.labelStyle.replace("color:","fill:"),y.id=p,y.classes="flowchart-link "+u+" "+g;let k=(0,o.f)(s,y),{source:x,target:m}=b(t,h);o.l.debug("abc78 source and target",x,m),r.edges.push({id:"e"+t.start+t.end,sources:[x],targets:[m],labelEl:k,labels:[{width:y.width,height:y.height,orgWidth:y.width,orgHeight:y.height,text:y.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData:y})}),r},y=function(e,t,r,a){let o="";switch(a&&(o=(o=(o=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),t.arrowTypeStart){case"arrow_cross":e.attr("marker-start","url("+o+"#"+r+"-crossStart)");break;case"arrow_point":e.attr("marker-start","url("+o+"#"+r+"-pointStart)");break;case"arrow_barb":e.attr("marker-start","url("+o+"#"+r+"-barbStart)");break;case"arrow_circle":e.attr("marker-start","url("+o+"#"+r+"-circleStart)");break;case"aggregation":e.attr("marker-start","url("+o+"#"+r+"-aggregationStart)");break;case"extension":e.attr("marker-start","url("+o+"#"+r+"-extensionStart)");break;case"composition":e.attr("marker-start","url("+o+"#"+r+"-compositionStart)");break;case"dependency":e.attr("marker-start","url("+o+"#"+r+"-dependencyStart)");break;case"lollipop":e.attr("marker-start","url("+o+"#"+r+"-lollipopStart)")}switch(t.arrowTypeEnd){case"arrow_cross":e.attr("marker-end","url("+o+"#"+r+"-crossEnd)");break;case"arrow_point":e.attr("marker-end","url("+o+"#"+r+"-pointEnd)");break;case"arrow_barb":e.attr("marker-end","url("+o+"#"+r+"-barbEnd)");break;case"arrow_circle":e.attr("marker-end","url("+o+"#"+r+"-circleEnd)");break;case"aggregation":e.attr("marker-end","url("+o+"#"+r+"-aggregationEnd)");break;case"extension":e.attr("marker-end","url("+o+"#"+r+"-extensionEnd)");break;case"composition":e.attr("marker-end","url("+o+"#"+r+"-compositionEnd)");break;case"dependency":e.attr("marker-end","url("+o+"#"+r+"-dependencyEnd)");break;case"lollipop":e.attr("marker-end","url("+o+"#"+r+"-lollipopEnd)")}},w=function(e){let t={parentById:{},childrenById:{}},r=e.getSubGraphs();return o.l.info("Subgraphs - ",r),r.forEach(function(e){e.nodes.forEach(function(r){t.parentById[r]=e.id,void 0===t.childrenById[e.id]&&(t.childrenById[e.id]=[]),t.childrenById[e.id].push(r)})}),r.forEach(function(e){e.id,void 0!==t.parentById[e.id]&&t.parentById[e.id]}),t},f=function(e,t,r){let a=n(e,t,r);if(void 0===a||"root"===a)return{x:0,y:0};let o=c[a].offset;return{x:o.posX,y:o.posY}},k=function(e,t,r,a,o){let i=f(t.sources[0],t.targets[0],o),n=t.sections[0].startPoint,s=t.sections[0].endPoint,d=t.sections[0].bendPoints?t.sections[0].bendPoints:[],c=d.map(e=>[e.x+i.x,e.y+i.y]),h=[[n.x+i.x,n.y+i.y],...c,[s.x+i.x,s.y+i.y]],p=(0,l.jvg)().curve(l.c_6),u=e.insert("path").attr("d",p(h)).attr("class","path").attr("fill","none"),b=e.insert("g").attr("class","edgeLabel"),g=(0,l.Ys)(b.node().appendChild(t.labelEl)),w=g.node().firstChild.getBoundingClientRect();g.attr("width",w.width),g.attr("height",w.height),b.attr("transform",`translate(${t.labels[0].x+i.x}, ${t.labels[0].y+i.y})`),y(u,r,a.type,a.arrowMarkerAbsolute)},x=(e,t)=>{e.forEach(e=>{e.children||(e.children=[]);let r=t.childrenById[e.id];r&&r.forEach(t=>{e.children.push(c[t])}),x(e.children,t)})},m=async function(e,t,i,n){var s;let d,p;if(!a){let e=(await r.e(987).then(r.t.bind(r,17295,19))).default;a=new e}n.db.clear(),c={},n.db.setGen("gen-2"),n.parser.parse(e);let u=(0,l.Ys)("body").append("div").attr("style","height:400px").attr("id","cy"),b={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch(o.l.info("Drawing flowchart using v3 renderer",a),n.db.getDirection()){case"BT":b.layoutOptions["elk.direction"]="UP";break;case"TB":b.layoutOptions["elk.direction"]="DOWN";break;case"LR":b.layoutOptions["elk.direction"]="RIGHT";break;case"RL":b.layoutOptions["elk.direction"]="LEFT"}let{securityLevel:y,flowchart:f}=(0,o.g)();"sandbox"===y&&(d=(0,l.Ys)("#i"+t));let m="sandbox"===y?(0,l.Ys)(d.nodes()[0].contentDocument.body):(0,l.Ys)("body"),_="sandbox"===y?d.nodes()[0].contentDocument:document,E=m.select(`[id="${t}"]`);(0,o.i)(E,["point","circle","cross"],n.type,n.arrowMarkerAbsolute);let S=n.db.getVertices(),$=n.db.getSubGraphs();o.l.info("Subgraphs - ",$);for(let e=$.length-1;e>=0;e--)p=$[e],n.db.addVertex(p.id,p.title,"group",void 0,p.classes,p.dir);let T=E.insert("g").attr("class","subgraphs"),B=w(n.db);b=h(S,t,m,_,n,B,b);let C=E.insert("g").attr("class","edges edgePath"),I=n.db.getEdges();b=g(I,n,b,E);let P=Object.keys(c);P.forEach(e=>{let t=c[e];t.parent||b.children.push(t),void 0!==B.childrenById[e]&&(t.labels=[{text:t.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:t.labelData.width,height:t.labelData.height}],delete t.x,delete t.y,delete t.width,delete t.height)}),x(b.children,B),o.l.info("after layout",JSON.stringify(b,null,2));let L=await a.layout(b);v(0,0,L.children,E,T,n,0),o.l.info("after layout",L),null==(s=L.edges)||s.map(e=>{k(C,e,e.edgeData,n,B)}),(0,o.s)({},E,f.diagramPadding,f.useMaxWidth),u.remove()},v=(e,t,r,a,l,i,n)=>{r.forEach(function(r){if(r){if(c[r.id].offset={posX:r.x+e,posY:r.y+t,x:e,y:t,depth:n,width:r.width,height:r.height},"group"===r.type){let a=l.insert("g").attr("class","subgraph");a.insert("rect").attr("class","subgraph subgraph-lvl-"+n%5+" node").attr("x",r.x+e).attr("y",r.y+t).attr("width",r.width).attr("height",r.height);let i=a.insert("g").attr("class","label");i.attr("transform",`translate(${r.labels[0].x+e+r.x}, ${r.labels[0].y+t+r.y})`),i.node().appendChild(r.labelData.labelNode),o.l.info("Id (UGH)= ",r.type,r.labels)}else o.l.info("Id (UGH)= ",r.id),r.el.attr("transform",`translate(${r.x+e+r.width/2}, ${r.y+t+r.height/2})`)}}),r.forEach(function(r){r&&"group"===r.type&&v(e+r.x,t+r.y,r.children,a,l,i,n+1)})},_=e=>{let t="";for(let r=0;r<5;r++)t+=`
      .subgraph-lvl-${r} {
        fill: ${e[`surface${r}`]};
        stroke: ${e[`surfacePeer${r}`]};
      }
    `;return t},E=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }

  .label text,span {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  .subgraph {
    stroke-width:2;
    rx:3;
  }
  // .subgraph-lvl-1 {
  //   fill:#ccc;
  //   // stroke:black;
  // }
  ${_(e)}
`,S={db:o.h,renderer:{getClasses:function(e,t){o.l.info("Extracting classes"),t.db.clear("ver-2");try{return t.parse(e),t.db.getClasses()}catch(e){return{}}},draw:m},parser:o.p,styles:E}}}]);