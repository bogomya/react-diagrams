!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["projectstorm/react-diagrams"]=t():e["projectstorm/react-diagrams"]=t()}(window,(function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=require("@projectstorm/react-diagrams-core")},function(e,t){e.exports=require("@projectstorm/react-diagrams-defaults")},function(e,t){e.exports=require("@projectstorm/react-diagrams-routing")},function(e,t,r){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0});const a=r(0),i=r(1),c=r(2),u=r(4);n(r(0),t),n(r(1),t),n(r(2),t),t.default=(e={})=>{const t=new a.DiagramEngine(e);return t.getLayerFactories().registerFactory(new a.NodeLayerFactory),t.getLayerFactories().registerFactory(new a.LinkLayerFactory),t.getLayerFactories().registerFactory(new u.SelectionBoxLayerFactory),t.getLabelFactories().registerFactory(new i.DefaultLabelFactory),t.getNodeFactories().registerFactory(new i.DefaultNodeFactory),t.getLinkFactories().registerFactory(new i.DefaultLinkFactory),t.getLinkFactories().registerFactory(new c.PathFindingLinkFactory),t.getPortFactories().registerFactory(new i.DefaultPortFactory),t.getStateMachine().pushState(new a.DefaultDiagramState),t}},function(e,t){e.exports=require("@projectstorm/react-canvas-core")}])}));
//# sourceMappingURL=index.js.map