const tabs=Array.from(document.querySelectorAll('[role="tab"]'));
function selectTab(tab){tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!active;});}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();selectTab(tabs[next]);tabs[next].focus();}});});

/* LINEボタンのアイコン（吹き出し）を描画する */
const LINE_PATH="M12 3C6.48 3 2 6.63 2 11.1c0 4 3.55 7.36 8.35 8 .32.07.77.21.88.5.1.26.07.66.03.92l-.14.85c-.04.26-.2 1 .88.55 1.08-.46 5.82-3.43 7.94-5.87C21.4 14.44 22 12.84 22 11.1 22 6.63 17.52 3 12 3z";
document.querySelectorAll('[data-line-ico]').forEach(svg=>{svg.setAttribute('viewBox','0 0 24 24');const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('fill','currentColor');path.setAttribute('d',LINE_PATH);svg.appendChild(path);});

/* 固定ボトムバー：ヒーローを過ぎたら出す */
const bar=document.getElementById('cta-bar'),hero=document.querySelector('.hero');
if(bar&&hero){const show=v=>bar.classList.toggle('is-visible',v);if('IntersectionObserver'in window){new IntersectionObserver(([e])=>show(!e.isIntersecting),{threshold:0}).observe(hero);}else{show(true);}}
