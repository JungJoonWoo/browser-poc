(function(){const o={double_click:"Double clicking",find:"Finding elements",finished:"Done",form_input:"Filling form",get_page_text:"Getting page text",key:"Pressing key",left_click:"Clicking",left_click_drag:"Dragging",navigate:"Navigating",read_page:"Reading page",reasoning:"Reasoning",right_click:"Right clicking",screenshot:"Reading page",scroll:"Scrolling",search_web:"Searching",tabs_create:"Creating tab","thinking ":"Thinking",triple_click:"Triple clicking",type:"Typing",wait:"Waiting",working:"Working"},n="samsung-agent-",s=`${n}0_0-overlay`,c=`${n}0_0-overlay-status-bar-text`,r=`${n}0_0-overlay-status-bar-stop`,a=document.getElementById(c),i=new URLSearchParams(window.location.search),l=async()=>{if(!i)return;const e=JSON.parse(decodeURIComponent(i).replace("params=","")),t={tabId:e.tabId,taskId:e.taskId};await chrome.runtime.sendMessage({type:"OVERLAY_TASK_STOP",payload:t})};document.getElementById(r).addEventListener("click",l);async function g(){console.log("startOverlayForVisibleAgent");const e=document.getElementById(s),t=document.createElement("style");t.textContent=`
        @property --a {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes a {
          to { --a: 1turn }
        }
      `,e.appendChild(t),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.opacity="0.95",setTimeout(()=>{e.style.animation="a 10250ms linear infinite"},400)})})}g();const _=e=>{a&&(a.textContent=o[e])},d=(e,t)=>{},A=e=>{switch(e.type){case"OVERLAY_TASK_STATUS_UPDATE":_(e.payload.status);break;case"OVERLAY_CLICK_FEEDBACK":document.hidden||d(e.payload.x,e.payload.y);break}};chrome.runtime.onMessage.addListener(A)})();
