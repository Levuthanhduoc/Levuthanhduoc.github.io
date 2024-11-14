import{r as C,a5 as v,R as m}from"./index-DM2OrA4B.js";import{_ as D,a as O,T as N}from"./TransitionGroupContext-BcqBKjiD.js";function M(a){var s;return parseInt(C.version,10)>=19?((s=a==null?void 0:a.props)==null?void 0:s.ref)||null:(a==null?void 0:a.ref)||null}const S={disabled:!1};var R=function(s){return s.scrollTop},x="unmounted",l="exited",f="entering",h="entered",T="exiting",p=function(a){D(s,a);function s(i,e){var t;t=a.call(this,i,e)||this;var n=e,r=n&&!n.isMounting?i.enter:i.appear,u;return t.appearStatus=null,i.in?r?(u=l,t.appearStatus=f):u=h:i.unmountOnExit||i.mountOnEnter?u=x:u=l,t.state={status:u},t.nextCallback=null,t}s.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===x?{status:l}:null};var o=s.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==h&&(t=f):(n===f||n===h)&&(t=T)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e=this.props.timeout,t,n,r;return t=n=r=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,r=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:r}},o.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this);n&&R(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:x})},o.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,u=this.props.nodeRef?[r]:[v.findDOMNode(this),r],c=u[0],E=u[1],b=this.getTimeouts(),g=r?b.appear:b.enter;if(!e&&!n||S.disabled){this.safeSetState({status:h},function(){t.props.onEntered(c)});return}this.props.onEnter(c,E),this.safeSetState({status:f},function(){t.props.onEntering(c,E),t.onTransitionEnd(g,function(){t.safeSetState({status:h},function(){t.props.onEntered(c,E)})})})},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:v.findDOMNode(this);if(!t||S.disabled){this.safeSetState({status:l},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:T},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:l},function(){e.props.onExited(r)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this),r=e==null&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],c=u[0],E=u[1];this.props.addEndListener(c,E)}e!=null&&setTimeout(this.nextCallback,e)},o.render=function(){var e=this.state.status;if(e===x)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var r=O(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return m.createElement(N.Provider,{value:null},typeof n=="function"?n(e,r):m.cloneElement(m.Children.only(n),r))},s}(m.Component);p.contextType=N;p.propTypes={};function d(){}p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};p.UNMOUNTED=x;p.EXITED=l;p.ENTERING=f;p.ENTERED=h;p.EXITING=T;const I=a=>a.scrollTop;function L(a,s){const{timeout:o,easing:i,style:e={}}=a;return{duration:e.transitionDuration??(typeof o=="number"?o:o[s.mode]||0),easing:e.transitionTimingFunction??(typeof i=="object"?i[s.mode]:i),delay:e.transitionDelay}}export{p as T,L as a,R as f,M as g,I as r};
