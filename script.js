'use strict';
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const products = {
  "google-card": {
    "name": "Google Review Card",
    "category": "GOOGLE REVIEWS · NFC",
    "description": "Make it easy to share a great experience, right when it happens. Keep this blue-and-white card at checkout or offer it at the end of a visit.",
    "features": [
      "Opens your chosen Google review link",
      "Compact square format for in-person interactions",
      "No Tap In app needed on compatible NFC phones"
    ],
    "best": "A natural fit for checkout counters, appointments, and customer handoffs.",
    "destination": "Google reviews",
    "price": 50,
    "customizable": true
  },
  "acrylic-stand": {
    "name": "Clear Counter Display",
    "category": "GOOGLE REVIEWS · NFC + QR",
    "description": "Make the invitation part of your space. A clear acrylic display gives customers a visible place to tap or scan at your front desk.",
    "features": [
      "Clear acrylic display with a freestanding base",
      "NFC tap and printed QR scan options",
      "Google review destination configured for your business"
    ],
    "best": "A natural fit for reception areas, retail counters, and salon checkouts.",
    "destination": "Google reviews",
    "price": 75,
    "customizable": false
  },
  "google-tent": {
    "name": "Tabletop Review Stand",
    "category": "GOOGLE REVIEWS · NFC",
    "description": "Put a simple invitation where customers already pause. This standing display keeps your Google review connection in sight.",
    "features": [
      "Freestanding tabletop format",
      "Printed Google review invitation with NFC tap area",
      "Links to the review destination for your business"
    ],
    "best": "A natural fit for cafés, restaurant tables, and service counters.",
    "destination": "Google reviews",
    "price": 50,
    "customizable": false
  },
  "review-badge": {
    "name": "On-the-Go Review Badge",
    "category": "GOOGLE REVIEWS · NFC + QR",
    "description": "Your service travels. Your review connection can, too. A clip-on badge helps your team invite feedback wherever the job takes them.",
    "features": [
      "Clip-on format for mobile teams",
      "NFC tap and printed QR scan options",
      "A direct path to your business’s review link"
    ],
    "best": "A natural fit for home services, field teams, and face-to-face customer service.",
    "destination": "Google reviews",
    "price": 35,
    "customizable": false
  },
  "instagram-card": {
    "name": "Instagram Tap Card",
    "category": "INSTAGRAM · NFC",
    "description": "Keep the conversation going after the visit. Connect customers to your Instagram profile without asking them to type or remember your handle.",
    "features": [
      "Opens your Instagram profile link",
      "Magenta square design with a clear tap invitation",
      "Customers choose whether to follow your account"
    ],
    "best": "A natural fit for salons, boutiques, cafés, and creators.",
    "destination": "Instagram",
    "price": 50,
    "customizable": false
  },
  "menu-card": {
    "name": "Digital Menu Card",
    "category": "DIGITAL MENU · NFC",
    "description": "Bring your menu to your guests’ phones. This clean black card links to your online menu, making it easy to browse at the table.",
    "features": [
      "Opens the online menu URL you choose",
      "Black square design with a clear tap area",
      "An easy connection to your existing menu page"
    ],
    "best": "A natural fit for restaurants, bars, cafés, and hospitality.",
    "destination": "Digital menu",
    "price": 50,
    "customizable": false
  },
  "yelp-sign": {
    "name": "Yelp Tap Sign",
    "category": "YELP · NFC",
    "description": "Give visitors a simple way to find your business on Yelp. This red-and-white sign opens your chosen Yelp business profile with a tap.",
    "features": [
      "Opens your Yelp business profile link",
      "Red-and-white design with a visible NFC tap area",
      "No Tap In app needed on compatible NFC phones"
    ],
    "best": "A natural fit for reception areas, local businesses, and customer service desks.",
    "destination": "Yelp profile",
    "price": 50,
    "customizable": false
  },
  "tripadvisor-sign": {
    "name": "Tripadvisor Review Sign",
    "category": "TRIPADVISOR · NFC",
    "description": "Connect a memorable visit to your Tripadvisor page. This green-and-white sign makes it easy for guests to open your chosen Tripadvisor link.",
    "features": [
      "Opens your chosen Tripadvisor destination",
      "Green-and-white design with a clear NFC tap area",
      "Guests choose their own rating and feedback"
    ],
    "best": "A natural fit for hotels, restaurants, attractions, and guest reception areas.",
    "destination": "Tripadvisor",
    "price": 50,
    "customizable": false
  },
  "tiktok-sign": {
    "name": "TikTok Follow Sign",
    "category": "TIKTOK · NFC",
    "description": "Bring customers from your space to your latest videos. This black TikTok sign opens your profile without asking visitors to search for your handle.",
    "features": [
      "Opens your TikTok profile link",
      "Black design with a visible tap-to-follow invitation",
      "Visitors choose whether to follow your account"
    ],
    "best": "A natural fit for creators, salons, cafés, and retail counters.",
    "destination": "TikTok",
    "price": 50,
    "customizable": false
  },
  "snapchat-sign": {
    "name": "Snapchat Tap Sign",
    "category": "SNAPCHAT · NFC",
    "description": "Keep your Snapchat easy to find after the visit. This bright yellow sign takes customers to your chosen Snapchat profile link.",
    "features": [
      "Opens your Snapchat profile link",
      "Yellow design with a clear tap-to-add invitation",
      "Visitors choose whether to add or follow your profile"
    ],
    "best": "A natural fit for creators, events, boutiques, and social spaces.",
    "destination": "Snapchat",
    "price": 50,
    "customizable": false
  },
  "facebook-sign": {
    "name": "Facebook Follow Sign",
    "category": "FACEBOOK · NFC",
    "description": "Help customers find your updates, events, and business news. This blue Facebook sign opens your chosen page with a tap.",
    "features": [
      "Opens your Facebook page link",
      "Blue-and-white design with a visible NFC tap area",
      "Customers choose whether to follow your page"
    ],
    "best": "A natural fit for shops, community businesses, cafés, and event spaces.",
    "destination": "Facebook",
    "price": 50,
    "customizable": false
  },
  "instagram-sign": {
    "name": "Instagram Follow Sign",
    "category": "INSTAGRAM · NFC",
    "description": "Make your profile part of the customer experience. This colorful Instagram sign opens your profile so visitors can explore your work and choose to follow.",
    "features": [
      "Opens your Instagram profile link",
      "Purple-to-orange design with a tap-to-follow invitation",
      "An additional sign design alongside the Instagram Tap Card"
    ],
    "best": "A natural fit for salons, studios, boutiques, and hospitality spaces.",
    "destination": "Instagram",
    "price": 50,
    "customizable": false
  }
};
const money = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
const reviewLink = id => `https://search.google.com/local/writereview?placeid=${encodeURIComponent(id)}`;
const validPlaceId = id => /^[A-Za-z0-9_-]+$/.test(id);
let selectedProduct = 'google-card';
let lastDialogTrigger = null;
let brief = '';
let generatedPlaceId = '';
function showDialog(dialog, trigger) {
 lastDialogTrigger = trigger || document.activeElement;
 dialog.showModal(); dialog.scrollTop = 0;
}
function productDetails(key, trigger) {
 const p = products[key]; if (!p) return; selectedProduct = key;
 $('#dialog-title').textContent = p.name;
 $('#dialog-category').textContent = p.category;
 $('#dialog-description').textContent = p.description;
 $('#dialog-best').textContent = p.best;
 $('#dialog-price').textContent = `${money(p.price)} USD / each`;
 $('#dialog-design').textContent = p.customizable ? 'Standard blue design or custom printed design.' : 'Standard design · supplied as pictured.';
 $('#select-product').textContent = p.customizable ? 'Choose design & quantity' : 'Select this product';
 $('#dialog-image').src = `assets/${key}.webp${['review-badge','acrylic-stand'].includes(key) ? '?v=clean-credits-1' : ''}`;
 $('#dialog-image').alt = p.name;
 $('#dialog-features').replaceChildren(...p.features.map(feature => { const li = document.createElement('li'); li.textContent = feature; return li; }));
 showDialog($('#product-dialog'), trigger);
}
function updateSetupPrice() {
 const p = products[$('#setup-product').value];
 const quantity = Number($('#setup-quantity').value);
 $('#setup-price').textContent = Number.isInteger(quantity) && quantity >= 1 && quantity <= 10000
   ? `${quantity} × ${money(p.price)} = ${money(p.price * quantity)} USD`
   : `${money(p.price)} USD / each`;
}
function updateDesignFields() {
 const p = products[$('#setup-product').value];
 const custom = p.customizable && $('#setup-design').value === 'custom';
 $('#setup-notes-label').hidden = !custom;
 $('#setup-design-notes').disabled = !custom;
}
function syncSetupProduct() {
 const p = products[$('#setup-product').value];
 $('#setup-destination').value = p.destination;
 $('#setup-customization').hidden = !p.customizable;
 $('#setup-design').disabled = !p.customizable;
 $('#setup-design').value = 'standard';
 $('#setup-design-notes').value = '';
 $('#setup-design-status').textContent = p.customizable ? 'Custom printed design is available for this blue Google card.' : 'Standard design · your business link is configured for this product.';
 const google = p.destination === 'Google reviews';
 $('#setup-google-fields').hidden = !google;
 $('#setup-place-id').disabled = !google;
 $('#setup-place-id').value = '';
 $('#setup-place-id').setCustomValidity('');
 $('#setup-url').value = '';
 $('#setup-url').readOnly = false;
 $('#setup-place-status').textContent = '';
 updateDesignFields(); updateSetupPrice();
}
function openSetup(key, trigger) {
 if (!products[key]) return;
 $('#product-dialog').close();
 $('#setup-product').value = key;
 syncSetupProduct();
 $('#setup-form').hidden = false; $('#setup-result').hidden = true;
 showDialog($('#setup-dialog'), trigger);
}
document.addEventListener('click', e => {
 const product = e.target.closest('[data-product]'); if (product) productDetails(product.dataset.product, product);
 const config = e.target.closest('[data-configure]'); if (config) openSetup(config.dataset.configure, config);
 const close = e.target.closest('[data-close]'); if (close) close.closest('dialog').close();
});
$$('dialog').forEach(dialog => {
 dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
 dialog.addEventListener('close', () => { if (!document.querySelector('dialog[open]') && lastDialogTrigger?.isConnected) lastDialogTrigger.focus({ preventScroll: true }); });
});
$('#select-product').addEventListener('click', () => openSetup(selectedProduct, $(`[data-product="${selectedProduct}"]`)));
$('#privacy-button').addEventListener('click', e => showDialog($('#privacy-dialog'), e.currentTarget));
$('#setup-product').addEventListener('change', syncSetupProduct);
$('#setup-quantity').addEventListener('input', updateSetupPrice);
$('#setup-design').addEventListener('change', updateDesignFields);
$('#setup-place-id').addEventListener('input', () => {
 const field = $('#setup-place-id'), id = field.value.trim();
 field.setCustomValidity('');
 $('#setup-place-status').textContent = '';
 $('#setup-url').readOnly = false;
 if (!id) { $('#setup-url').value = ''; return; }
 if (!validPlaceId(id)) {
  field.setCustomValidity('Paste the Place ID code only, using letters, numbers, underscores, or hyphens.');
  $('#setup-url').value = '';
  $('#setup-place-status').textContent = 'Paste the full Place ID code, without a URL or extra words.';
  return;
 }
 $('#setup-url').value = reviewLink(id);
 $('#setup-url').readOnly = true;
 $('#setup-place-status').textContent = 'Your Google review link has been added below.';
});
$('#setup-find-place').addEventListener('click', () => {
 $('#setup-dialog').close();
 // Wait for the dialog close handler to restore focus before focusing the helper.
 requestAnimationFrame(() => {
  $('#place-id').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  $('#place-id-input').focus({ preventScroll: true });
 });
});
$('#setup-form').addEventListener('submit', e => {
 e.preventDefault();
 if (!e.currentTarget.reportValidity()) return;
 const business = $('#setup-business').value.trim();
 if (!business) { $('#setup-business').setCustomValidity('Please enter your business name.'); $('#setup-business').reportValidity(); return; }
 const p = products[$('#setup-product').value], quantity = Number($('#setup-quantity').value);
 const custom = p.customizable && $('#setup-design').value === 'custom';
 const id = p.destination === 'Google reviews' ? $('#setup-place-id').value.trim() : '';
 const destinationUrl = id ? reviewLink(id) : $('#setup-url').value.trim();
 brief = `TAP IN — MY SETUP BRIEF\n\nBusiness: ${business}\nProduct: ${p.name}\nQuantity: ${quantity}\nUnit price: ${money(p.price)} USD\nProduct subtotal: ${money(p.price * quantity)} USD\nDesign: ${custom ? 'Custom design requested' : 'Standard design as pictured'}${custom && $('#setup-design-notes').value.trim() ? '\nDesign notes: ' + $('#setup-design-notes').value.trim() : ''}\nDestination: ${p.destination}${id ? '\nGoogle Place ID: ' + id : ''}\nLink: ${destinationUrl || 'To be confirmed'}\n\nShipping, tax, availability${custom ? ', and final artwork' : ''} are confirmed before ordering.\nThis brief is not an order or a payment confirmation.`;
 $('#setup-summary').textContent = brief;
 $('#setup-form').hidden = true; $('#setup-result').hidden = false;
 $('#copy-status').textContent = 'Save these details to arrange your order. No order has been submitted.';
 $('#setup-dialog').scrollTop = 0; $('#download-brief').focus({ preventScroll: true });
});
$('#setup-business').addEventListener('input', e => e.target.setCustomValidity(''));
$('#download-brief').addEventListener('click', () => {
 const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
 const a = document.createElement('a'); a.href = url; a.download = 'Tap-In-Setup-Brief.txt'; document.body.append(a); a.click(); a.remove();
 setTimeout(() => URL.revokeObjectURL(url), 1000);
 $('#copy-status').textContent = 'Your setup brief was downloaded. No order has been submitted.';
});
$('#copy-brief').addEventListener('click', async () => {
 try { await navigator.clipboard.writeText(brief); $('#copy-status').textContent = 'Copied. Your setup details are ready to share.'; }
 catch { $('#copy-status').textContent = 'Clipboard access is unavailable. Use Save brief to download your details.'; }
});
$('#edit-brief').addEventListener('click', () => { $('#setup-form').hidden = false; $('#setup-result').hidden = true; $('#setup-business').focus(); });
function clearPlaceResult() {
 generatedPlaceId = '';
 $('#place-id-result').hidden = true;
 $('#place-id-code').value = '';
 $('#place-review-link').value = '';
 $('#preview-review-link').removeAttribute('href');
 $('#place-id-status').textContent = '';
 $('#place-id-input').setCustomValidity('');
}
$('#place-id-input').addEventListener('input', clearPlaceResult);
$('#place-id-form').addEventListener('submit', e => {
 e.preventDefault();
 const field = $('#place-id-input'), id = field.value.trim();
 clearPlaceResult();
 if (!validPlaceId(id)) {
  field.setCustomValidity('Paste the Place ID code only, without spaces, a URL, or extra words.'); field.reportValidity();
  $('#place-id-status').textContent = 'Copy the full Place ID from Google’s finder and paste the code here.';
  return;
 }
 generatedPlaceId = id;
 $('#place-id-code').value = id;
 $('#place-review-link').value = reviewLink(id);
 $('#preview-review-link').href = reviewLink(id);
 $('#place-id-result').hidden = false;
 $('#place-id-status').textContent = 'Your link is ready. Preview it to confirm the business, then copy it for your NFC setup.';
});
async function copyPlaceField(selector, label) {
 if (!generatedPlaceId) return;
 const field = $(selector);
 try { await navigator.clipboard.writeText(field.value); $('#place-id-status').textContent = `${label} copied.`; }
 catch { field.focus(); field.select(); $('#place-id-status').textContent = 'Copy is unavailable here. The text is selected so you can copy it manually.'; }
}
$('#copy-place-id').addEventListener('click', () => copyPlaceField('#place-id-code', 'Place ID'));
$('#copy-review-link').addEventListener('click', () => copyPlaceField('#place-review-link', 'Review link'));
$('#use-review-link').addEventListener('click', e => {
 if (!generatedPlaceId) return;
 openSetup('google-card', e.currentTarget);
 $('#setup-place-id').value = generatedPlaceId;
 $('#setup-url').value = reviewLink(generatedPlaceId);
 $('#setup-url').readOnly = true;
});

function setGroupActive(buttons, target){buttons.forEach(b=>{const active=b===target;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});}
$$('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 setGroupActive($$('[data-filter]'),button);
 const update=()=>{let count=0;$$('.product').forEach(p=>{p.hidden=button.dataset.filter!=='all'&&p.dataset.category!==button.dataset.filter;if(!p.hidden)count++;});$('.collection-count').textContent=`${count} ways to Tap In`;};
 if(document.startViewTransition&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.startViewTransition(update);else update();
}));
const destinations={google:{mark:'G',name:'Google review',label:'GOOGLE REVIEW EXAMPLE'},instagram:{mark:'◎',name:'Instagram profile',label:'INSTAGRAM PROFILE EXAMPLE'},linkedin:{mark:'in',name:'LinkedIn profile',label:'LINKEDIN PROFILE EXAMPLE'},menu:{mark:'≡',name:'digital menu',label:'DIGITAL MENU EXAMPLE'}};
const socialProfiles={
 instagram:{name:'Tap In',identity:'@tapin_social',initials:'',url:'https://www.instagram.com/tapin_social?stkn=ZTFjdnFpMHhva3k3',platform:'Instagram',intro:'Meet Tap In.<br> On Instagram.',description:'Preview our profile here to see where an Instagram card can take your customers.',next:'A real tap opens our Instagram profile, where customers can explore and choose to follow.'},
 linkedin:{name:'Hayden Dewey',identity:'Owner · Tap In',initials:'HD',url:'https://www.linkedin.com/in/hayden-dewey-a72630441?utm_source=share_via&utm_content=profile&utm_medium=member_ios',platform:'LinkedIn',intro:'Meet the person<br> behind Tap In.',description:'Preview Hayden’s profile here to see where a networking card can take your customers.',next:'A real tap opens Hayden’s LinkedIn profile, where customers can learn more and choose to connect.'}
};
function profilePreview(profile){
 const avatar=profile.initials?profile.initials:'<img src="assets/logo.png" alt="" width="38" height="40">';
 return `<article class="inline-profile ${destination}" aria-label="${profile.platform} profile preview"><div class="profile-cover"><span>${profile.platform}</span><span class="profile-preview-label">PROFILE PREVIEW</span></div><div class="profile-body"><div class="profile-avatar" aria-hidden="true">${avatar}</div><h3 tabindex="-1" id="profile-preview-title">${profile.name}</h3><p class="profile-identity">${profile.identity}</p><p class="profile-next">${profile.next}</p><div class="profile-link-row"><a class="profile-full-link" href="${profile.url}" target="_self">View full profile on ${profile.platform} <span aria-hidden="true">→</span></a><p class="profile-link-note">Opens ${profile.platform} in this tab.</p></div></div></article><p class="inline-preview-note">On-site preview · not a live ${profile.platform} page.</p>`;
}
const cafeMenu={
 coffee:{label:'Coffee',heading:'SOMETHING TO SIP',items:[
  ['Honey oat latte','$6','Espresso, oat milk & a touch of honey. Hot or iced.','HOUSE FAVORITE'],
  ['Slow-steeped cold brew','$5','Rich, smooth coffee, served over ice.'],
  ['Vanilla matcha','$6.50','Stone-ground matcha, vanilla & your choice of milk.']
 ]},
 breakfast:{label:'Breakfast',heading:'A GOOD MORNING',items:[
  ['Avocado sourdough','$12','Smashed avocado, lemon, chili flakes & extra crunch.','FRESH FROM THE KITCHEN'],
  ['Sunrise egg sandwich','$10','Soft egg, cheddar & tomato on a toasted brioche bun.'],
  ['Berry yogurt bowl','$9','Greek yogurt, seasonal berries, granola & honey.']
 ]},
 lunch:{label:'Lunch',heading:'STAY A LITTLE LONGER',items:[
  ['Garden pesto sandwich','$14','Roasted vegetables, basil pesto & mozzarella on sourdough.','THE LUNCH PICK'],
  ['Harvest grain bowl','$13','Warm grains, roasted squash, greens & lemon dressing.'],
  ['Soup of the day','$8','A comforting seasonal bowl, with toasted bread.']
 ]},
 treats:{label:'Treats',heading:'A LITTLE SOMETHING SWEET',items:[
  ['Butter croissant','$4.50','Golden layers, baked until crisp & wonderfully flaky.','FRESHLY BAKED'],
  ['Chocolate brownie','$5','Dark chocolate, a soft center & a pinch of sea salt.'],
  ['Lemon drizzle cake','$5','A bright slice with lemon glaze & a tender crumb.']
 ]}
};
let destination='google',stage=0,rating=0,menuCategory='coffee';
function renderCafeMenu(){
 const category=cafeMenu[menuCategory];
 return `<div class="menu-preview" aria-label="Sample café menu">
  <header class="menu-masthead"><img class="menu-decals" src="assets/cafe-decals.webp" width="700" height="350" alt="" loading="lazy"><span class="menu-overline">A LITTLE PAUSE IN YOUR DAY</span><h3>The Corner</h3><span class="menu-subtitle">COFFEE &amp; KITCHEN</span></header>
  <div class="menu-category-tabs" role="group" aria-label="Sample menu categories">${Object.entries(cafeMenu).map(([key,value])=>`<button type="button" data-menu-category="${key}" class="${key===menuCategory?'active':''}" aria-pressed="${key===menuCategory}" aria-controls="menu-items">${value.label}</button>`).join('')}</div>
  <div class="menu-section-label"><strong>${category.heading}</strong><span>12 tastes to explore</span></div>
  <div class="menu-items" id="menu-items" aria-label="${category.label} items">${category.items.map(([name,price,description,badge])=>`<div class="menu-item${badge?' menu-feature':''}">${badge?`<span class="menu-category">${badge}</span>`:''}<div class="menu-item-heading"><span>${name}</span><span>${price}</span></div><p>${description}</p></div>`).join('')}</div>
  <p class="menu-footnote">SAMPLE MENU · ILLUSTRATIVE ITEMS &amp; PRICES<br> Your card opens your business’s own menu.</p>
 </div>`;
}
function renderDemo(){
 const d=destinations[destination];const screen=$('#demo-screen');const mark=$('#demo-mark');mark.textContent=d.mark;mark.className=`demo-mark ${destination}`;
 const profile=socialProfiles[destination],profileOpen=Boolean(profile&&stage>0);
 $('.demo-stage').classList.toggle('connected',stage>0);$('.demo-stage').classList.toggle('profile-open',profileOpen);$('.demo-stage').classList.toggle('menu-active',destination==='menu');mark.hidden=profileOpen||(destination==='menu'&&stage===1);
 $('#reset-demo').hidden=stage===0;$('#reset-demo').textContent=profileOpen?'Back to preview':'Restart preview';$('#demo-tap').hidden=profileOpen||stage===2;
 $('#demo-kind').textContent='ON-SCREEN PREVIEW';
 $('#demo-stage-label').textContent=profileOpen?`${profile.platform.toUpperCase()} PREVIEW`:stage===0?'PREVIEW READY':stage===1?'EXAMPLE SCREEN':'PREVIEW COMPLETE';
 if(profile){
  if(profileOpen){screen.innerHTML=profilePreview(profile);}
  else{screen.innerHTML=`<span class="mini-label">${profile.identity}</span><h3>${profile.intro}</h3><p>${profile.description}</p>`;$('#demo-button-text').textContent='Preview profile';}
 }
 else if(stage===0){screen.innerHTML=`<span class="mini-label">${d.label}</span><h3>See what your<br> customer sees.</h3><p>Click Start preview to explore an example ${d.name} experience right here.</p>`;$('#demo-button-text').textContent='Start preview';}
 else if(stage===1){
  if(destination==='google'){screen.innerHTML=`<span class="mini-label">${d.label}</span><h3>Your experience.<br> Your own words.</h3><p>Choose a sample rating. It stays in this preview.</p><div class="demo-stars" role="group" aria-label="Choose a sample rating">${[1,2,3,4,5].map(n=>`<button class="demo-star${n<=rating?' selected':''}" data-rating="${n}" aria-label="${n} ${n===1?'star':'stars'}" aria-pressed="${rating===n}">★</button>`).join('')}</div><p class="demo-feedback" id="rating-feedback">${rating?`${rating} ${rating===1?'star':'stars'} selected for this preview.`:'Customers choose their own rating.'}</p>`;$('#demo-button-text').textContent='Finish preview';}
  else{screen.innerHTML=renderCafeMenu();$('#demo-button-text').textContent='Finish preview';}
 }else{const end={google:['That’s the connection.','In real life, customers add their feedback and post it on Google. Nothing was posted in this demo.'],instagram:['Keep the good going.','In real life, customers can follow from Instagram. This demo did not follow an account.'],linkedin:['Make the introduction last.','In real life, your customer chooses how to connect on LinkedIn. This demo did not send a request.'],menu:['Less searching. More enjoying.','A direct link puts your existing menu in reach. This example didn’t place an order.']}[destination];screen.innerHTML=`<span class="mini-label">A SIMPLE NEXT STEP</span><h3>${end[0]}</h3><p>${end[1]}</p>`;}
 screen.classList.remove('demo-screen-arrive');void screen.offsetWidth;screen.classList.add('demo-screen-arrive');
}
$$('[data-destination]').forEach(b=>b.addEventListener('click',()=>{destination=b.dataset.destination;stage=0;rating=0;menuCategory='coffee';setGroupActive($$('[data-destination]'),b);renderDemo();}));
$('#demo-tap').addEventListener('click',()=>{if(destination==='google'&&stage===1&&!rating){$('#rating-feedback').textContent='Choose any sample rating to continue the preview.';$('.demo-star').focus();return;}stage=Math.min(stage+1,2);renderDemo();if(socialProfiles[destination])$('#profile-preview-title').focus({preventScroll:true});else if(stage===2)$('#reset-demo').focus({preventScroll:true});});
$('#demo-screen').addEventListener('click',e=>{
 const category=e.target.closest('[data-menu-category]');
 if(category&&destination==='menu'&&stage===1&&cafeMenu[category.dataset.menuCategory]){
  menuCategory=category.dataset.menuCategory;renderDemo();$(`[data-menu-category="${menuCategory}"]`).focus({preventScroll:true});return;
 }
 const star=e.target.closest('[data-rating]');if(!star)return;rating=Number(star.dataset.rating);$$('[data-rating]').forEach(b=>{const n=Number(b.dataset.rating);b.classList.toggle('selected',n<=rating);b.setAttribute('aria-pressed',String(n===rating));});$('#rating-feedback').textContent=`${rating} ${rating===1?'star':'stars'} selected for this preview.`;
});
$('#reset-demo').addEventListener('click',()=>{stage=0;rating=0;menuCategory='coffee';renderDemo();$('#demo-tap').focus({preventScroll:true});});
renderDemo();
const useCases={hospitality:['FROM THE FIRST SIP TO THE LAST BITE','A menu at the table.<br> A review at the counter.','Help guests open your menu and invite honest feedback as they finish their visit. Keep your Instagram within reach so they can find you again.','google-tent'],beauty:['GREAT RESULTS. A LASTING CONNECTION.','Let the fresh-cut feeling<br> live beyond the chair.','Invite a review after an appointment and make your Instagram easy to find. Give new clients a window into the care and creativity behind your work.','instagram-card'],services:['A JOB WELL DONE DESERVES TO TRAVEL.','Finish the work.<br> Make the connection.','Bring your review invitation to the doorstep. A clip-on badge helps technicians and service teams offer a simple next step at the end of every job.','review-badge'],retail:['THE COUNTER IS A CONNECTION POINT.','Make the last moment<br> count for the next visit.','Place a review display where customers pause. A tap or scan helps them share their experience while your service is still fresh in mind.','acrylic-stand']};
$$('[data-use]').forEach(b=>b.addEventListener('click',()=>{setGroupActive($$('[data-use]'),b);const c=useCases[b.dataset.use];$('#use-kicker').textContent=c[0];$('#use-title').innerHTML=c[1];$('#use-copy').textContent=c[2];$('#use-product').dataset.product=c[3];$('#use-product').textContent=`Explore the ${products[c[3]].name}  +`;const detail=$('.use-detail');detail.classList.remove('demo-screen-arrive');void detail.offsetWidth;detail.classList.add('demo-screen-arrive');}));
const menu=$('.menu-button');function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');$('#main-nav').classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');$('#main-nav').classList.toggle('open',open);});
$$('#main-nav a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window&&!reduced.matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.08,rootMargin:'0px 0px -20px 0px'});$$('.reveal').forEach(el=>observer.observe(el));document.body.classList.add('motion-ready');}
let scheduled=false;function onScroll(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{const distance=document.documentElement.scrollHeight-innerHeight;$('.scroll-progress').style.transform=`scaleX(${distance>0?scrollY/distance:0})`;$('.site-header').classList.toggle('scrolled',scrollY>20);scheduled=false;});}addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();
if(matchMedia('(pointer:fine)').matches&&!reduced.matches){const hero=$('[data-tilt]');hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--tilt-x',`${((e.clientX-r.left)/r.width-.5)*17}px`);hero.style.setProperty('--tilt-y',`${((e.clientY-r.top)/r.height-.5)*17}px`);});hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--tilt-x','0px');hero.style.setProperty('--tilt-y','0px');});}
$('#year').textContent=new Date().getFullYear();
