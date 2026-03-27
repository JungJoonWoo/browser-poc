try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="d2788ea5-e582-41a8-94c4-2d291777d797",t._sentryDebugIdIdentifier="sentry-dbid-d2788ea5-e582-41a8-94c4-2d291777d797")}catch{}(function(){const t="pplx-agent-0_0-overlay-stop-button",s=["auxclick","click","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","wheel","touchcancel","touchend","touchmove","touchstart","keydown","keyup","keypress","beforeinput","input","textInput","compositionstart","compositionend","compositionupdate","pointercancel","pointerdown","pointerenter","pointerleave","pointermove","pointerout","pointerover","pointerrawupdate","pointerup","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","selectstart","contextmenu","change","beforetoggle","submit","reset"],o=document.createElement("style");o.textContent=`
  html body *,
  html body *::before,
  html body *::after {
    cursor: progress !important;
  }

  html body #${t},
  html body #${t} * {
    cursor: pointer !important;
  }
`;let r=!1,d=!1;chrome.runtime.onMessage.addListener(e=>{if(e.type==="START_OVERLAY"){if(e.payload.simpleMode||(r=!e.payload?.isPaused,o.remove(),r&&document.body.appendChild(o),d))return;s.forEach(n=>{window.addEventListener(n,u,{capture:!0,passive:!1})}),d=!0;return}if(e.type==="STOP_OVERLAY"){r=!1,o.remove(),s.forEach(n=>{window.removeEventListener(n,u,!0)}),d=!1,a=null;return}if(e.type==="START_BLOCKING"){r=!0,o.remove(),document.body.appendChild(o);return}if(e.type==="STOP_BLOCKING"){r=!1,e.payload.isPaused&&o.remove();return}});const u=e=>{if(!r||!e.isTrusted)return;const n=i();n&&e.composedPath().includes(n)||(e.stopImmediatePropagation(),e.preventDefault())};let a=null;const i=()=>a||(a=document.getElementById(t),a)})();
