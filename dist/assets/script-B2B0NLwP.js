const d=document.getElementById("dynamic-text"),i=["Full Stack Developer","Software Engineer"];let c=0,g=100,u=50;function m(e,n,s){let t=0,l=!1;function o(){l?(e.textContent=n.slice(0,t),t--,t<0?(l=!1,setTimeout(s,500)):setTimeout(o,u)):(e.textContent=n.slice(0,t+1),t++,t<n.length?setTimeout(o,g):setTimeout(()=>{l=!0,o()},1e3))}o()}function r(){const e=i[c];c=(c+1)%i.length,m(d,e,()=>{setTimeout(r,500)})}r();const a=document.getElementById("scroll-progress");window.addEventListener("scroll",()=>{const e=window.scrollY,n=document.documentElement.scrollHeight-window.innerHeight,s=e/n*100;a.style.height=`${s}vh`});
