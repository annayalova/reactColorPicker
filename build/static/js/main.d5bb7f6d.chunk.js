(this.webpackJsonpreactcolorpicker=this.webpackJsonpreactcolorpicker||[]).push([[0],{187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),a=n(7),o=n.n(a),r=n(42),l=n(9),c=n(10),p=n(13),d=n(12),u=n(11),h=n.n(u),b=n(0),x=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).change=function(){e.props.onSelect({color:e.props.color,value:e.props.value})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=h()({default:{color:{width:"20px",height:"20px",background:"".concat(this.props.value),display:"inline-block"},items:{display:"flex",justifyContent:"space-between",color:"#97989a",textTransform:"uppercase",cursor:"pointer",padding:"10px 15px",borderBottom:"1px solid #f2f2f2"}}});return Object(b.jsxs)("li",{style:e.items,color:this.props.color,value:this.props.value,onClick:this.change,children:[this.props.color," ",Object(b.jsx)("span",{style:e.color})]})}}]),n}(i.a.Component),f=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=h()({default:{row:{color:"#97989a",padding:"10px 0",display:"flex",justifyContent:"space-between"},slider:{flexGrow:"1",marginLeft:"10px"}}});return Object(b.jsxs)("div",{style:e.row,children:[Object(b.jsx)("span",{children:this.props.col}),Object(b.jsx)("input",{style:e.slider,ref:"input",value:this.props.val,type:"range",min:this.props.min,max:this.props.max,step:this.props.step,onChange:this.props.update,className:this.props.className})]})}}]),n}(i.a.Component),j="#ffcc33",O=n(180),v=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).changeColor=function(e){s.setState(Object(r.a)(Object(r.a)({},e),{},{isPaletteOpen:!s.state.isPaletteOpen}))},s.state={value:j,red:255,green:204,blue:51,isRGBOpen:!1,isPaletteOpen:!1},s}return Object(c.a)(n,[{key:"update",value:function(){var e="".concat(this.state.red," , ").concat(this.state.green," , ").concat(this.state.blue),t=O(e);this.setState({red:o.a.findDOMNode(this.refs.red.refs.input).value,green:o.a.findDOMNode(this.refs.green.refs.input).value,blue:o.a.findDOMNode(this.refs.blue.refs.input).value,value:"#".concat(t)})}},{key:"cancelRGB",value:function(){this.setState({isRGBOpen:!this.state.isRGBOpen,value:j})}},{key:"openRGB",value:function(){this.setState({isRGBOpen:!this.state.isRGBOpen})}},{key:"closeRGBbtn",value:function(){this.setState({isRGBOpen:!this.state.isRGBOpen})}},{key:"openPalette",value:function(){this.setState({isPaletteOpen:!this.state.isPaletteOpen})}},{key:"handleClickOutside",value:function(e){var t=o.a.findDOMNode(this);t&&t.contains(e.target)||this.setState({isRGBOpen:!1,isPaletteOpen:!1})}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside.bind(this))}},{key:"render",value:function(){var e=this,t=h()({default:{wrap:{position:"relative"},holder:{border:"1px solid #ccc",display:"flex",justifyContent:"space-between",background:"white"},info:{padding:"15px",color:"#97989a",textTransform:"uppercase",flexGrow:"1"},btn:{padding:"15px",height:"20px",cursor:"pointer",borderLeft:"1px solid #f2f2f2"},rgb:{width:"20px",height:"20px",background:"".concat(this.state.value),display:"inline-block"},color:{width:"0",height:"0",borderStyle:"solid",borderWidth:" 10px 10px 0 10px",borderColor:"#97989a transparent transparent transparent",cursor:"pointer",display:"inline-block",marginTop:"6px"},list:{margin:"0",padding:"0",listStyle:"none",width:"150px",position:"absolute",right:"0",top:"75px",background:"white"},panel:{padding:"15px",width:"250px",position:"absolute",right:"0",top:"75px",background:"white"},btnHolder:{display:"flex",justifyContent:"flex-end"},button1:{background:"d1d2d4",border:"1px solid #c3c3c3",color:"#999a9c",textTransform:"uppercase",fontSize:"12px",padding:"5px 10px"},button2:{background:"#6aa458",border:"1px solid #c3c3c3",color:"#fff",textTransform:"uppercase",marginLeft:"5px",fontSize:"12px",padding:"5px 10px"}}});return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"<ColorPicker />"}),Object(b.jsx)("div",{style:t.wrap,children:Object(b.jsxs)("div",{style:t.holder,children:[Object(b.jsx)("div",{style:t.info,children:this.state.value}),Object(b.jsx)("div",{style:t.btn,onMouseDown:this.openRGB.bind(this),children:Object(b.jsx)("span",{style:t.rgb})}),Object(b.jsx)("div",{style:t.btn,onMouseDown:this.openPalette.bind(this),children:Object(b.jsx)("span",{style:t.color})}),this.state.isRGBOpen?Object(b.jsx)("div",{style:t.panel,className:"panel",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{className:"rangeRed",ref:"red",min:"0",max:"255",col:"R",val:this.state.red,onChange:this.update,update:function(){return e.update()},children:this.state.red}),Object(b.jsx)(f,{className:"rangeGreen",ref:"green",min:"0",max:"255",col:"G",val:this.state.green,onChange:this.update,update:function(){return e.update()},children:this.state.green}),Object(b.jsx)(f,{className:"rangeBlue",ref:"blue",min:"0",max:"255",col:"B",val:this.state.blue,onChange:this.update,update:function(){return e.update()},children:this.state.blue}),Object(b.jsxs)("div",{style:t.btnHolder,children:[Object(b.jsx)("button",{style:t.button1,onClick:this.cancelRGB.bind(this),children:"Cancel"}),Object(b.jsx)("button",{style:t.button2,onMouseDown:this.closeRGBbtn.bind(this),children:"Ok"})]})]})}):null,this.state.isPaletteOpen?Object(b.jsxs)("ul",{style:t.list,className:"list",children:[Object(b.jsx)(x,{color:"Red",value:"#df212d",onSelect:this.changeColor}),Object(b.jsx)(x,{color:"Yellow",value:j,onSelect:this.changeColor}),Object(b.jsx)(x,{color:"Green",value:"#17a458",onSelect:this.changeColor}),Object(b.jsx)(x,{color:"Blue",value:"#1caee9",onSelect:this.changeColor})]}):null]})})]})}}]),n}(i.a.Component),g=(n(187),v);o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.d5bb7f6d.chunk.js.map