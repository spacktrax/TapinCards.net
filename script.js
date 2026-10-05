'use strict';
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const products = {
 'google-card': { name:'Google Review Card', category:'GOOGLE REVIEWS · NFC', description:'Make it easy to share a great experience, right when it happens. Keep this blue-and-white card at checkout or offer it at the end of a visit.', features:['Opens your chosen Google review link','Compact square format for in-person interactions','No Tap In app needed on compatible NFC phones'], best:'A natural fit for checkout counters, appointments, and customer handoffs.', destination:'Google reviews' },
 'acrylic-stand': { name:'Clear Counter Display', category:'GOOGLE REVIEWS · NFC + QR', description:'Make the invitation part of your space. A clear acrylic display gives customers a visible place to tap or scan at your front desk.', features:['Clear acrylic display with a freestanding base','NFC tap and printed QR scan options','Google review destination configured for your business'], best:'A natural fit for reception areas, retail counters, and salon checkouts.', destination:'Google reviews' },
 'google-tent': { name:'Tabletop Review Stand', category:'GOOGLE REVIEWS · NFC', description:'Put a simple invitation where customers already pause. This standing display keeps your Google review connection in sight.', features:['Freestanding tabletop format','Printed Google review invitation with NFC tap area','Links to the review destination for your business'], best:'A natural fit for cafés, restaurant tables, and service counters.', destination:'Google reviews' },
 'review-badge': { name:'On-the-Go Review Badge', category:'GOOGLE REVIEWS · NFC + QR', description:'Your service travels. Your review connection can, too. A clip-on badge helps your team invite feedback wherever the job takes them.', features:['Clip-on format for mobile teams','NFC tap and printed QR scan options','A direct path to your business’s review link'], best:'A natural fit for home services, field teams, and face-to-face customer service.', destination:'Google reviews' },
 'instagram-card': { name:'Instagram Tap Card', category:'INSTAGRAM · NFC', description:'Keep the conversation going after the visit. Connect customers to your Instagram profile without asking them to type or remember your handle.', features:['Opens your Instagram profile link','Magenta square design with a clear tap invitation','Customers choose whether to follow your account'], best:'A natural fit for salons, boutiques, cafés, and creators.', destination:'Instagram' },
 'menu-card': { name:'Digital Menu Card', category:'DIGITAL MENU · NFC', description:'Bring your menu to your guests’ phones. This clean black card links to your online menu, making it easy to browse at the table.', features:['Opens the online menu URL you choose','Black square design with a clear tap area','An easy connection to your existing menu page'], best:'A natural fit for restaurants, bars, cafés, and hospitality.', destination:'Digital menu' }
};
let selectedProduct = 'google-card';
let lastDialogTrigger = null;
function showDialog(dialog, trigger) {lastDialogTrigger = trigger || document.activeElement;dialog.showModal();dialog.scrollTop=0;}
function productDetails(key, trigger) {
 const p = products[key]; if (!p) return; selectedProduct=key;
 $('#dialog-title').textContent=p.name; $('#dialog-category').textContent=p.category;
 $('#dialog-description').textContent=p.description; $('#dialog-best').textContent=p.best;
 $('#dialog-image').src=`assets/${key}.webp`; $('#dialog-image').alt=p.name;
 $('#dialog-features').replaceChildren(...p.features.map(feature=>{const li=document.createElement('li');li.textContent=feature;return li;}));
 showDialog($('#product-dialog'),trigger);
}
function openSetup(key, trigger) {
 $('#product-dialog').close(); $('#setup-product').value=products[key]?key:'custom';
 $('#setup-destination').value=products[key]?.destination || 'Website / other link';
 $('#setup-form').hidden=false; $('#setup-result').hidden=true;
 showDialog($('#setup-dialog'),trigger);
}
document.addEventListener('click', e=>{
 const product=e.target.closest('[data-product]');if(product) productDetails(product.dataset.product,product);
 const config=e.target.closest('[data-configure]');if(config) openSetup(config.dataset.configure,config);
 const close=e.target.closest('[data-close]');if(close) close.closest('dialog').close();
});
$$('dialog').forEach(dialog=>{
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]')&&lastDialogTrigger?.isConnected)lastDialogTrigger.focus({preventScroll:true});});
});
$('#select-product').addEventListener('click',()=>openSetup(selectedProduct,$(`[data-product="${selectedProduct}"]`)));
$('#privacy-button').addEventListener('click',e=>showDialog($('#privacy-dialog'),e.currentTarget));
$('#setup-product').addEventListener('change',e=>{$('#setup-destination').value=products[e.target.value]?.destination||'Website / other link';});
let brief='';
$('#setup-form').addEventListener('submit',e=>{
 e.preventDefault(); if(!e.currentTarget.reportValidity())return;
 const business=$('#setup-business').value.trim();
 if(!business){$('#setup-business').setCustomValidity('Please enter your business name.');$('#setup-business').reportValidity();return;}
 const name=products[$('#setup-product').value]?.name||'Custom connection';
 brief=`TAP IN — MY SETUP BRIEF\n\nBusiness: ${business}\nProduct: ${name}\nQuantity: ${$('#setup-quantity').value}\nDestination: ${$('#setup-destination').value}\nLink: ${$('#setup-url').value.trim()||'To be confirmed'}\n\nPlease confirm pricing, availability, and destination setup.\nThis brief is not an order or a payment confirmation.`;
 $('#setup-summary').textContent=brief;$('#setup-form').hidden=true;$('#setup-result').hidden=false;
 $('#copy-status').textContent='Saved briefs are not orders. Pricing and availability need confirmation.';
 $('#setup-dialog').scrollTop=0;$('#download-brief').focus({preventScroll:true});
});
$('#setup-business').addEventListener('input',e=>e.target.setCustomValidity(''));
$('#download-brief').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([brief],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='Tap-In-Setup-Brief.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);$('#copy-status').textContent='Your setup brief was downloaded. No order has been submitted.';});
$('#copy-brief').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(brief);$('#copy-status').textContent='Copied. Your setup details are ready to share.';}catch{$('#copy-status').textContent='Clipboard access is unavailable. Use Save brief to download your details.';}});
$('#edit-brief').addEventListener('click',()=>{$('#setup-form').hidden=false;$('#setup-result').hidden=true;$('#setup-business').focus();});
function setGroupActive(buttons, target){buttons.forEach(b=>{const active=b===target;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});}
$$('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 setGroupActive($$('[data-filter]'),button);
 const update=()=>{let count=0;$$('.product').forEach(p=>{p.hidden=button.dataset.filter!=='all'&&p.dataset.category!==button.dataset.filter;if(!p.hidden)count++;});$('.collection-count').textContent=`${count} ways to Tap In`;};
 if(document.startViewTransition&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.startViewTransition(update);else update();
}));
const destinations={google:{mark:'G',name:'Google review',label:'GOOGLE REVIEW EXAMPLE'},instagram:{mark:'◎',name:'Instagram profile',label:'INSTAGRAM PROFILE EXAMPLE'},linkedin:{mark:'in',name:'LinkedIn profile',label:'LINKEDIN PROFILE EXAMPLE'},menu:{mark:'≡',name:'digital menu',label:'DIGITAL MENU EXAMPLE'}};
let destination='google',stage=0,rating=0;
function renderDemo(){
 const d=destinations[destination];const screen=$('#demo-screen');const mark=$('#demo-mark');mark.textContent=d.mark;mark.className=`demo-mark ${destination}`;
 $('.demo-stage').classList.toggle('connected',stage>0);$('#reset-demo').hidden=stage===0;$('#demo-tap').hidden=stage===2;$('#demo-tap').style.display=stage===2?'none':'';
 $('#demo-stage-label').textContent=stage===0?'READY TO CONNECT':stage===1?'CONNECTION OPENED':'DEMO COMPLETE';
 if(stage===0){screen.innerHTML=`<span class="mini-label">YOUR BUSINESS, ONE TAP AWAY</span><h3>Good things<br>start here.</h3><p>Tap below to open an example ${d.name} experience.</p>`;$('#demo-button-text').textContent='Try a tap';}
 else if(stage===1){
  if(destination==='google'){screen.innerHTML=`<span class="mini-label">${d.label}</span><h3>Your experience.<br>Your own words.</h3><p>Choose a rating to try the next step.</p><div class="demo-stars" role="group" aria-label="Choose a demo rating">${[1,2,3,4,5].map(n=>`<button class="demo-star${n<=rating?' selected':''}" data-rating="${n}" aria-label="${n} ${n===1?'star':'stars'}" aria-pressed="${rating===n}">★</button>`).join('')}</div><p class="demo-feedback" id="rating-feedback">${rating?`${rating} ${rating===1?'star':'stars'} selected for this demo.`:'Your rating is always your choice.'}</p>`;$('#demo-button-text').textContent='Finish the demo';}
  else if(destination==='instagram'){screen.innerHTML=`<span class="mini-label">${d.label}</span><h3>The visit ends.<br>The connection stays.</h3><p>Your customer lands on your profile, ready to explore your posts and choose whether to follow.</p>`;$('#demo-button-text').textContent='Try a follow';}
  else if(destination==='linkedin'){screen.innerHTML=`<span class="mini-label">${d.label}</span><h3>A handshake.<br>Then a connection.</h3><p>Take someone directly to your professional profile so they can get to know your work.</p>`;$('#demo-button-text').textContent='Try connecting';}
  else{screen.innerHTML=`<span class="mini-label">${d.label}</span><h3>Something good<br>is on the menu.</h3><p>Your existing menu opens on their phone.</p><div class="demo-menu-list"><span>Drinks & coffee</span><span>Something to eat</span><span>Today’s specials</span></div>`;$('#demo-button-text').textContent='Finish the demo';}
 }else{const end={google:['That’s the connection.','In real life, customers add their feedback and post it on Google. Nothing was posted in this demo.'],instagram:['Keep the good going.','In real life, customers can follow from Instagram. This demo did not follow an account.'],linkedin:['Make the introduction last.','In real life, your customer chooses how to connect on LinkedIn. This demo did not send a request.'],menu:['Less searching. More enjoying.','A direct link puts your existing menu in reach. This example didn’t place an order.']}[destination];screen.innerHTML=`<span class="mini-label">A SIMPLE NEXT STEP</span><h3>${end[0]}</h3><p>${end[1]}</p>`;}
 screen.classList.remove('demo-screen-arrive');void screen.offsetWidth;screen.classList.add('demo-screen-arrive');
}
$$('[data-destination]').forEach(b=>b.addEventListener('click',()=>{destination=b.dataset.destination;stage=0;rating=0;setGroupActive($$('[data-destination]'),b);renderDemo();}));
$('#demo-tap').addEventListener('click',()=>{if(destination==='google'&&stage===1&&!rating){$('#rating-feedback').textContent='Choose any star rating to continue this demo.';$('.demo-star').focus();return;}stage=Math.min(stage+1,2);renderDemo();if(stage===2)$('#reset-demo').focus({preventScroll:true});});
$('#demo-screen').addEventListener('click',e=>{const star=e.target.closest('[data-rating]');if(!star)return;rating=Number(star.dataset.rating);$$('[data-rating]').forEach(b=>{const n=Number(b.dataset.rating);b.classList.toggle('selected',n<=rating);b.setAttribute('aria-pressed',String(n===rating));});$('#rating-feedback').textContent=`${rating} ${rating===1?'star':'stars'} selected for this demo.`;});
$('#reset-demo').addEventListener('click',()=>{stage=0;rating=0;renderDemo();$('#demo-tap').focus({preventScroll:true});});
const useCases={hospitality:['FROM THE FIRST SIP TO THE LAST BITE','A menu at the table.<br>A review at the counter.','Help guests open your menu and invite honest feedback as they finish their visit. Keep your Instagram within reach so they can find you again.','google-tent'],beauty:['GREAT RESULTS. A LASTING CONNECTION.','Let the fresh-cut feeling<br>live beyond the chair.','Invite a review after an appointment and make your Instagram easy to find. Give new clients a window into the care and creativity behind your work.','instagram-card'],services:['A JOB WELL DONE DESERVES TO TRAVEL.','Finish the work.<br>Make the connection.','Bring your review invitation to the doorstep. A clip-on badge helps technicians and service teams offer a simple next step at the end of every job.','review-badge'],retail:['THE COUNTER IS A CONNECTION POINT.','Make the last moment<br>count for the next visit.','Place a review display where customers pause. A tap or scan helps them share their experience while your service is still fresh in mind.','acrylic-stand']};
$$('[data-use]').forEach(b=>b.addEventListener('click',()=>{setGroupActive($$('[data-use]'),b);const c=useCases[b.dataset.use];$('#use-kicker').textContent=c[0];$('#use-title').innerHTML=c[1];$('#use-copy').textContent=c[2];$('#use-product').dataset.product=c[3];$('#use-product').textContent=`Explore the ${products[c[3]].name}  +`;const detail=$('.use-detail');detail.classList.remove('demo-screen-arrive');void detail.offsetWidth;detail.classList.add('demo-screen-arrive');}));
const menu=$('.menu-button');function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');$('#main-nav').classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');$('#main-nav').classList.toggle('open',open);});
$$('#main-nav a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window&&!reduced.matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.08,rootMargin:'0px 0px -20px 0px'});$$('.reveal').forEach(el=>observer.observe(el));document.body.classList.add('motion-ready');}
let scheduled=false;function onScroll(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{const distance=document.documentElement.scrollHeight-innerHeight;$('.scroll-progress').style.transform=`scaleX(${distance>0?scrollY/distance:0})`;$('.site-header').classList.toggle('scrolled',scrollY>20);scheduled=false;});}addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();
if(matchMedia('(pointer:fine)').matches&&!reduced.matches){const hero=$('[data-tilt]');hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--tilt-x',`${((e.clientX-r.left)/r.width-.5)*17}px`);hero.style.setProperty('--tilt-y',`${((e.clientY-r.top)/r.height-.5)*17}px`);});hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--tilt-x','0px');hero.style.setProperty('--tilt-y','0px');});}
$('#year').textContent=new Date().getFullYear();
