import{options as n}from"https://cdnjs.cloudflare.com/ajax/libs/preact/10.4.8/preact.module.min.js";var t,u,r,o=0,i=[],c=n.__r,f=n.diffed,e=n.__c,a=n.unmount;function v(_,t){n.__h&&n.__h(u,_,o||t),o=0;var e=u.__H||(u.__H={__:[],__h:[]});return _>=e.__.length&&e.__.push({}),e.__[_]}function m(_){return o=1,p(k,_)}function p(_,n,e){var o=v(t++,2);return o.t=_,o.__c||(o.__c=u,o.__=[e?e(n):k(void 0,n),function(_){var n=o.t(o.__[0],_);o.__[0]!==n&&(o.__=[n,o.__[1]],o.__c.setState({}))}]),o.__}function y(_,e){var o=v(t++,3);!n.__s&&j(o.__H,e)&&(o.__=_,o.__H=e,u.__H.__h.push(o))}function l(_,e){var o=v(t++,4);!n.__s&&j(o.__H,e)&&(o.__=_,o.__H=e,u.__h.push(o))}function h(n){return o=5,_(function(){return{current:n}},[])}function s(_,n,t){o=6,l(function(){"function"==typeof _?_(n()):_&&(_.current=n())},null==t?t:t.concat(_))}function _(_,n){var u=v(t++,7);return j(u.__H,n)?(u.__H=n,u.__h=_,u.__=_()):u.__}function A(n,t){return o=8,_(function(){return n},t)}function F(_){var n=u.context[_.__c],e=v(t++,9);return e.__c=_,n?(null==e.__&&(e.__=!0,n.sub(u)),n.props.value):_.__}function T(_,t){n.useDebugValue&&n.useDebugValue(t?t(_):_)}function d(_){var n=v(t++,10),e=m();return n.__=_,u.componentDidCatch||(u.componentDidCatch=function(_){n.__&&n.__(_),e[1](_)}),[e[0],function(){e[1](void 0)}]}function q(){i.some(function(_){if(_.__P)try{_.__H.__h.forEach(b),_.__H.__h.forEach(g),_.__H.__h=[]}catch(t){return _.__H.__h=[],n.__e(t,_.__v),!0}}),i=[]}n.__r=function(_){c&&c(_),t=0;var n=(u=_.__c).__H;n&&(n.__h.forEach(b),n.__h.forEach(g),n.__h=[])},n.diffed=function(_){f&&f(_);var t=_.__c;t&&t.__H&&t.__H.__h.length&&(1!==i.push(t)&&r===n.requestAnimationFrame||((r=n.requestAnimationFrame)||function(_){var n,t=function(){clearTimeout(u),x&&cancelAnimationFrame(n),setTimeout(_)},u=setTimeout(t,100);x&&(n=requestAnimationFrame(t))})(q))},n.__c=function(_,t){t.some(function(_){try{_.__h.forEach(b),_.__h=_.__h.filter(function(_){return!_.__||g(_)})}catch(u){t.some(function(_){_.__h&&(_.__h=[])}),t=[],n.__e(u,_.__v)}}),e&&e(_,t)},n.unmount=function(_){a&&a(_);var t=_.__c;if(t&&t.__H)try{t.__H.__.forEach(b)}catch(_){n.__e(_,t.__v)}};var x="function"==typeof requestAnimationFrame;function b(_){"function"==typeof _.u&&_.u()}function g(_){_.u=_.__()}function j(_,n){return!_||n.some(function(n,t){return n!==_[t]})}function k(_,n){return"function"==typeof n?n(_):n}export{m as useState,p as useReducer,y as useEffect,l as useLayoutEffect,h as useRef,s as useImperativeHandle,_ as useMemo,A as useCallback,F as useContext,T as useDebugValue,d as useErrorBoundary};