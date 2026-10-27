const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobileToggle=document.getElementById('menu-toggle');
const mobileMenu=document.getElementById('mobile-menu');
mobileToggle.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');mobileToggle.setAttribute('aria-expanded',String(open));});
mobileMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileMenu.classList.remove('open');mobileToggle.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.09,rootMargin:'0px 0px -35px 0px'});
document.querySelectorAll('.reveal').forEach(el=>{if(reduceMotion)el.classList.add('visible');else observer.observe(el)});
document.getElementById('year').textContent=new Date().getFullYear();
const copyButton=document.getElementById('copy-email');
const toast=document.getElementById('toast');
let toastTimeout;
copyButton.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('matteematics@gmail.com');toast.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>toast.classList.remove('visible'),2400);}catch{window.location.href='mailto:matteematics@gmail.com';}});
const sampleTopics=['Explore a keyword or topic','Discover rising demand','Compare emerging trends','Find the next opportunity'];
let topicIndex=0;
const placeholder=document.getElementById('search-placeholder');
if(!reduceMotion){setInterval(()=>{topicIndex=(topicIndex+1)%sampleTopics.length;placeholder.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-5px)'},{opacity:0,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:580,easing:'ease-in-out'});setTimeout(()=>{placeholder.textContent=sampleTopics[topicIndex]},270)},3900);}
document.querySelectorAll('.faq-list details').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open){document.querySelectorAll('.faq-list details').forEach(other=>{if(other!==detail)other.open=false})}}));
document.addEventListener('keydown',event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();document.getElementById('platform').scrollIntoView({behavior:reduceMotion?'instant':'smooth'});}});
