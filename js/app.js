'use strict';
const studio = window.STUDIO;
document.body.classList.add('js');
document.querySelector('#year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu.hidden = false;
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
matchMedia('(min-width:601px)').addEventListener('change',closeMenu);
function safeUrl(value){try{const url=new URL(value,location.href);return ['http:','https:'].includes(url.protocol)?url.href:null;}catch{return null;}}
const email = document.querySelector('#email-link');
email.replaceChildren(document.createTextNode(studio.email+' '));
const arrow=document.createElement('span');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');email.append(arrow);
email.href='mailto:'+encodeURIComponent(studio.email);
document.querySelector('#email-note').hidden=!studio.emailIsPlaceholder;
const socials=studio.socials.filter(item=>safeUrl(item.url));
if(socials.length){const holder=document.querySelector('#socials');holder.replaceChildren();socials.forEach(item=>{const a=document.createElement('a');a.href=safeUrl(item.url);a.textContent=item.label+' ↗';a.target='_blank';a.rel='noopener noreferrer';holder.append(a);});}
const grid=document.querySelector('#projects');
const dialog=document.querySelector('#project-dialog');
let previousFocus;
function openProject(project){previousFocus=document.activeElement;document.querySelector('#dialog-title').textContent=project.title;document.querySelector('#dialog-category').textContent=project.category+(project.placeholder?' / Placeholder preview':'');document.querySelector('#dialog-description').textContent=project.description;const image=document.querySelector('#dialog-image');image.src=project.image;image.alt=project.alt;const credit=document.querySelector('#dialog-credit');credit.textContent=project.credit||'';if(project.creditUrl&&safeUrl(project.creditUrl)){const a=document.createElement('a');a.href=safeUrl(project.creditUrl);a.textContent=' Image license ↗';a.target='_blank';a.rel='noopener noreferrer';credit.append(a);}const link=document.querySelector('#dialog-link');const href=project.url&&safeUrl(project.url);link.hidden=!href;if(href){link.href=href;link.target='_blank';link.rel='noopener noreferrer';}document.body.classList.add('modal-open');dialog.showModal();}
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');previousFocus?.focus();});
studio.projects.forEach((project,index)=>{const article=document.createElement('article');article.className='project';article.dataset.category=project.category;const button=document.createElement('button');button.className='project-open';button.setAttribute('aria-label','View '+project.title+(project.placeholder?' — placeholder preview':''));const visual=document.createElement('div');visual.className='project-image';const img=document.createElement('img');img.src=project.image;img.alt=project.alt;img.loading='lazy';img.width=1200;img.height=900;const icon=document.createElement('span');icon.className='project-arrow';icon.textContent='↗';icon.setAttribute('aria-hidden','true');visual.append(img,icon);const meta=document.createElement('div');meta.className='project-meta';const title=document.createElement('h3');title.className='project-title';title.style.margin='0';title.textContent=project.title;const category=document.createElement('span');category.className='project-category';category.textContent=project.category;meta.append(title,category);button.append(visual,meta);button.addEventListener('click',()=>openProject(project));const summary=document.createElement('p');summary.className='project-summary';summary.textContent=project.summary;const note=document.createElement('p');note.className='project-number';note.textContent=String(index+1).padStart(2,'0')+(project.placeholder?' / Placeholder preview':'');article.append(button,summary,note);grid.append(article);});
const filters=document.querySelector('.filters');filters.hidden=false;
['All',...new Set(studio.projects.map(p=>p.category))].forEach(category=>{const button=document.createElement('button');button.textContent=category;button.setAttribute('aria-pressed',String(category==='All'));button.addEventListener('click',()=>{filters.querySelectorAll('button').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));grid.classList.toggle('filtered',category!=='All');let count=0;grid.querySelectorAll('.project').forEach(item=>{item.hidden=category!=='All'&&item.dataset.category!==category;if(!item.hidden)count++;});document.querySelector('#filter-status').textContent=`Showing ${count} ${count===1?'project':'projects'}`;});filters.append(button);});
document.querySelector('nav sup').textContent=String(studio.projects.length).padStart(2,'0');
