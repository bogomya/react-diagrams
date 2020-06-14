!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["projectstorm/react-diagrams-defaults"]=t():e["projectstorm/react-diagrams-defaults"]=t()}(window,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=15)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@projectstorm/react-diagrams-core")},function(e,t){e.exports=require("@emotion/styled")},function(e,t){e.exports=require("@projectstorm/react-canvas-core")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultLabelModel=void 0;const n=o(1);class r extends n.LabelModel{constructor(e={}){super(Object.assign({offsetY:null==e.offsetY?-23:e.offsetY,type:"default"},e))}setLabel(e){this.options.label=e}deserialize(e){super.deserialize(e),this.options.label=e.data.label}serialize(){return Object.assign(Object.assign({},super.serialize()),{label:this.options.label})}}t.DefaultLabelModel=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultLinkModel=void 0;const n=o(1),r=o(4),s=o(18);class i extends n.LinkModel{constructor(e={}){super(Object.assign({type:"default",width:e.width||3,color:e.color||"gray",selectedColor:e.selectedColor||"rgb(0,192,255)",curvyness:50},e))}calculateControlOffset(e){return e.getOptions().alignment===n.PortModelAlignment.RIGHT?[this.options.curvyness,0]:e.getOptions().alignment===n.PortModelAlignment.LEFT?[-this.options.curvyness,0]:e.getOptions().alignment===n.PortModelAlignment.TOP?[0,-this.options.curvyness]:[0,this.options.curvyness]}getSVGPath(){if(2==this.points.length){const e=new s.BezierCurve;return e.setSource(this.getFirstPoint().getPosition()),e.setTarget(this.getLastPoint().getPosition()),e.setSourceControl(this.getFirstPoint().getPosition().clone()),e.setTargetControl(this.getLastPoint().getPosition().clone()),this.sourcePort&&e.getSourceControl().translate(...this.calculateControlOffset(this.getSourcePort())),this.targetPort&&e.getTargetControl().translate(...this.calculateControlOffset(this.getTargetPort())),e.getSVGCurve()}}serialize(){return Object.assign(Object.assign({},super.serialize()),{width:this.options.width,color:this.options.color,curvyness:this.options.curvyness,selectedColor:this.options.selectedColor})}deserialize(e){super.deserialize(e),this.options.color=e.data.color,this.options.width=e.data.width,this.options.curvyness=e.data.curvyness,this.options.selectedColor=e.data.selectedColor}addLabel(e){if(e instanceof n.LabelModel)return super.addLabel(e);let t=new r.DefaultLabelModel;return t.setLabel(e),super.addLabel(t)}setWidth(e){this.options.width=e,this.fireEvent({width:e},"widthChanged")}setColor(e){this.options.color=e,this.fireEvent({color:e},"colorChanged")}}t.DefaultLinkModel=i},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultPortModel=void 0;const n=o(1),r=o(5);class s extends n.PortModel{constructor(e,t,o){t&&(e={in:!!e,name:t,label:o}),e=e,super(Object.assign({label:e.label||e.name,alignment:e.in?n.PortModelAlignment.LEFT:n.PortModelAlignment.RIGHT,type:"default"},e))}deserialize(e){super.deserialize(e),this.options.in=e.data.in,this.options.label=e.data.label}serialize(){return Object.assign(Object.assign({},super.serialize()),{in:this.options.in,label:this.options.label})}link(e,t){let o=this.createLinkModel(t);return o.setSourcePort(this),o.setTargetPort(e),o}canLinkToPort(e){return!(e instanceof s)||this.options.in!==e.getOptions().in}createLinkModel(e){let t=super.createLinkModel();return!t&&e?e.generateModel({}):t||new r.DefaultLinkModel}}t.DefaultPortModel=s},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultLabelWidget=void 0;const n=o(0),r=o(2);var s;!function(e){e.Label=r.default.div`
		background: rgba(0, 0, 0, 0.8);
		border-radius: 5px;
		color: white;
		font-size: 12px;
		padding: 4px 8px;
		font-family: sans-serif;
		user-select: none;
	`}(s||(s={}));class i extends n.Component{render(){return n.createElement(s.Label,null,this.props.model.getOptions().label)}}t.DefaultLabelWidget=i},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultLinkWidget=void 0;const n=o(0),r=o(1),s=o(9),i=o(10);class l extends n.Component{constructor(e){super(e),this.refPaths=[],this.state={selected:!1}}componentDidUpdate(){this.props.link.setRenderedPaths(this.refPaths.map(e=>e.current))}componentDidMount(){this.props.link.setRenderedPaths(this.refPaths.map(e=>e.current))}componentWillUnmount(){this.props.link.setRenderedPaths([])}addPointToLink(e,t){if(!e.shiftKey&&!this.props.link.isLocked()&&this.props.link.getPoints().length-1<=this.props.diagramEngine.getMaxNumberPointsPerLink()){const o=new r.PointModel({link:this.props.link,position:this.props.diagramEngine.getRelativeMousePoint(e)});this.props.link.addPoint(o,t),e.persist(),e.stopPropagation(),this.forceUpdate(()=>{this.props.diagramEngine.getActionEventBus().fireAction({event:e,model:o})})}}generatePoint(e){return n.createElement(s.DefaultLinkPointWidget,{key:e.getID(),point:e,colorSelected:this.props.link.getOptions().selectedColor,color:this.props.link.getOptions().color})}generateLink(e,t,o){const r=n.createRef();return this.refPaths.push(r),n.createElement(i.DefaultLinkSegmentWidget,{key:"link-"+o,path:e,selected:this.state.selected,diagramEngine:this.props.diagramEngine,factory:this.props.diagramEngine.getFactoryForLink(this.props.link),link:this.props.link,forwardRef:r,onSelection:e=>{this.setState({selected:e})},extras:t})}render(){var e=this.props.link.getPoints(),t=[];if(this.refPaths=[],2===e.length)t.push(this.generateLink(this.props.link.getSVGPath(),{onMouseDown:e=>{this.addPointToLink(e,1)}},"0")),null==this.props.link.getTargetPort()&&t.push(this.generatePoint(e[1]));else{for(let o=0;o<e.length-1;o++)t.push(this.generateLink(r.LinkWidget.generateLinePath(e[o],e[o+1]),{"data-linkid":this.props.link.getID(),"data-point":o,onMouseDown:e=>{this.addPointToLink(e,o+1)}},o));for(let o=1;o<e.length-1;o++)t.push(this.generatePoint(e[o]));null==this.props.link.getTargetPort()&&t.push(this.generatePoint(e[e.length-1]))}return n.createElement("g",{"data-default-link-test":this.props.link.getOptions().testName},t)}}t.DefaultLinkWidget=l},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultLinkPointWidget=void 0;const n=o(0),r=o(2);var s;!function(e){e.PointTop=r.default.circle`
		pointer-events: all;
	`}(s||(s={}));class i extends n.Component{constructor(e){super(e),this.state={selected:!1}}render(){const{point:e}=this.props;return n.createElement("g",null,n.createElement("circle",{cx:e.getPosition().x,cy:e.getPosition().y,r:5,fill:this.state.selected||this.props.point.isSelected()?this.props.colorSelected:this.props.color}),n.createElement(s.PointTop,{className:"point",onMouseLeave:()=>{this.setState({selected:!1})},onMouseEnter:()=>{this.setState({selected:!0})},"data-id":e.getID(),"data-linkid":e.getLink().getID(),cx:e.getPosition().x,cy:e.getPosition().y,r:15,opacity:0}))}}t.DefaultLinkPointWidget=i},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultLinkSegmentWidget=void 0;const n=o(0);class r extends n.Component{render(){const e=n.cloneElement(this.props.factory.generateLinkSegment(this.props.link,this.props.selected||this.props.link.isSelected(),this.props.path),{ref:this.props.forwardRef}),t=n.cloneElement(e,Object.assign(Object.assign({strokeLinecap:"round",onMouseLeave:()=>{this.props.onSelection(!1)},onMouseEnter:()=>{this.props.onSelection(!0)}},this.props.extras),{ref:null,"data-linkid":this.props.link.getID(),strokeOpacity:this.props.selected?.1:0,strokeWidth:20,fill:"none",onContextMenu:()=>{this.props.link.isLocked()||(event.preventDefault(),this.props.link.remove())}}));return n.createElement("g",null,e,t)}}t.DefaultLinkSegmentWidget=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultNodeModel=void 0;const n=o(12),r=o(1),s=o(6);class i extends r.NodeModel{constructor(e={},t){"string"==typeof e&&(e={name:e,color:t}),super(Object.assign({type:"default",name:"Untitled",color:"rgb(0,192,255)"},e)),this.portsOut=[],this.portsIn=[]}doClone(e,t){t.portsIn=[],t.portsOut=[],super.doClone(e,t)}removePort(e){super.removePort(e),e.getOptions().in?this.portsIn.splice(this.portsIn.indexOf(e),1):this.portsOut.splice(this.portsOut.indexOf(e),1)}addPort(e){return super.addPort(e),e.getOptions().in?-1===this.portsIn.indexOf(e)&&this.portsIn.push(e):-1===this.portsOut.indexOf(e)&&this.portsOut.push(e),e}addInPort(e,t=!0){const o=new s.DefaultPortModel({in:!0,name:e,label:e,alignment:r.PortModelAlignment.LEFT});return t||this.portsIn.splice(0,0,o),this.addPort(o)}addOutPort(e,t=!0){const o=new s.DefaultPortModel({in:!1,name:e,label:e,alignment:r.PortModelAlignment.RIGHT});return t||this.portsOut.splice(0,0,o),this.addPort(o)}deserialize(e){super.deserialize(e),this.options.name=e.data.name,this.options.color=e.data.color,this.portsIn=n.map(e.data.portsInOrder,e=>this.getPortFromID(e)),this.portsOut=n.map(e.data.portsOutOrder,e=>this.getPortFromID(e))}serialize(){return Object.assign(Object.assign({},super.serialize()),{name:this.options.name,color:this.options.color,portsInOrder:n.map(this.portsIn,e=>e.getID()),portsOutOrder:n.map(this.portsOut,e=>e.getID())})}getInPorts(){return this.portsIn}getOutPorts(){return this.portsOut}}t.DefaultNodeModel=i},function(e,t){e.exports=require("lodash")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultNodeWidget=void 0;const n=o(0),r=o(12),s=o(14),i=o(2);var l;!function(e){e.Node=i.default.div`
		background-color: ${e=>e.background};
		border-radius: 5px;
		font-family: sans-serif;
		color: white;
		border: solid 2px black;
		overflow: visible;
		font-size: 11px;
		border: solid 2px ${e=>e.selected?"rgb(0,192,255)":"black"};
	`,e.Title=i.default.div`
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		white-space: nowrap;
		justify-items: center;
	`,e.TitleName=i.default.div`
		flex-grow: 1;
		padding: 5px 5px;
	`,e.Ports=i.default.div`
		display: flex;
		background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
	`,e.PortsContainer=i.default.div`
		flex-grow: 1;
		display: flex;
		flex-direction: column;

		&:first-of-type {
			margin-right: 10px;
		}

		&:only-child {
			margin-right: 0px;
		}
	`}(l||(l={}));class a extends n.Component{constructor(){super(...arguments),this.generatePort=e=>n.createElement(s.DefaultPortLabel,{engine:this.props.engine,port:e,key:e.getID()})}render(){return n.createElement(l.Node,{"data-default-node-name":this.props.node.getOptions().name,selected:this.props.node.isSelected(),background:this.props.node.getOptions().color},n.createElement(l.Title,null,n.createElement(l.TitleName,null,this.props.node.getOptions().name)),n.createElement(l.Ports,null,n.createElement(l.PortsContainer,null,r.map(this.props.node.getInPorts(),this.generatePort)),n.createElement(l.PortsContainer,null,r.map(this.props.node.getOutPorts(),this.generatePort))))}}t.DefaultNodeWidget=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultPortLabel=void 0;const n=o(0),r=o(1),s=o(2);var i;!function(e){e.PortLabel=s.default.div`
		display: flex;
		margin-top: 1px;
		align-items: center;
	`,e.Label=s.default.div`
		padding: 0 5px;
		flex-grow: 1;
	`,e.Port=s.default.div`
		width: 15px;
		height: 15px;
		background: rgba(white, 0.1);

		&:hover {
			background: rgb(192, 255, 0);
		}
	`}(i||(i={}));class l extends n.Component{render(){const e=n.createElement(r.PortWidget,{engine:this.props.engine,port:this.props.port},n.createElement(i.Port,null)),t=n.createElement(i.Label,null,this.props.port.getOptions().label);return n.createElement(i.PortLabel,null,this.props.port.getOptions().in?e:t,this.props.port.getOptions().in?t:e)}}t.DefaultPortLabel=l},function(e,t,o){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),r=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||t.hasOwnProperty(o)||n(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),r(o(16),t),r(o(4),t),r(o(7),t),r(o(17),t),r(o(5),t),r(o(8),t),r(o(10),t),r(o(9),t),r(o(20),t),r(o(11),t),r(o(13),t),r(o(21),t),r(o(14),t),r(o(6),t)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultLabelFactory=void 0;const n=o(0),r=o(4),s=o(7),i=o(3);class l extends i.AbstractReactFactory{constructor(){super("default")}generateReactWidget(e){return n.createElement(s.DefaultLabelWidget,{model:e.model})}generateModel(e){return new r.DefaultLabelModel}}t.DefaultLabelFactory=l},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultLinkFactory=void 0;const n=o(0),r=o(5),s=o(8),i=o(2),l=o(19),a=o(3);var d;!function(e){e.Keyframes=l.keyframes`
		from {
			stroke-dashoffset: 24;
		}
		to {
			stroke-dashoffset: 0;
		}
	`;const t=l.css`
		stroke-dasharray: 10, 2;
		animation: ${e.Keyframes} 1s linear infinite;
	`;e.Path=i.default.path`
		${e=>e.selected&&t};
		fill: none;
		pointer-events: all;
	`}(d||(d={}));class c extends a.AbstractReactFactory{constructor(e="default"){super(e)}generateReactWidget(e){return n.createElement(s.DefaultLinkWidget,{link:e.model,diagramEngine:this.engine})}generateModel(e){return new r.DefaultLinkModel}generateLinkSegment(e,t,o){return n.createElement(d.Path,{selected:t,stroke:t?e.getOptions().selectedColor:e.getOptions().color,strokeWidth:e.getOptions().width,d:o})}}t.DefaultLinkFactory=c},function(e,t){e.exports=require("@projectstorm/geometry")},function(e,t){e.exports=require("@emotion/core")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultNodeFactory=void 0;const n=o(0),r=o(11),s=o(13),i=o(3);class l extends i.AbstractReactFactory{constructor(){super("default")}generateReactWidget(e){return n.createElement(s.DefaultNodeWidget,{engine:this.engine,node:e.model})}generateModel(e){return new r.DefaultNodeModel}}t.DefaultNodeFactory=l},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultPortFactory=void 0;const n=o(6),r=o(3);class s extends r.AbstractModelFactory{constructor(){super("default")}generateModel(){return new n.DefaultPortModel({name:"unknown"})}}t.DefaultPortFactory=s}])}));
//# sourceMappingURL=index.js.map