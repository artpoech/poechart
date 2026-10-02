(function(){
  var nav=document.getElementById('nav');
  if(nav){var btn=nav.querySelector('.menu-btn');
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
    nav.querySelectorAll('ul a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded',false)})});}
  // forms: send to Formspree in the background and show a thank-you message
  document.querySelectorAll('form[data-ajax]').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var box=f.parentNode, b=f.querySelector('button[type=submit]'); b.disabled=true; b.textContent='Sending…';
      fetch(f.action,{method:'POST',body:new FormData(f),headers:{'Accept':'application/json'}})
        .then(function(r){if(!r.ok)throw 0;box.classList.add('sent')})
        .catch(function(){b.disabled=false;b.textContent='Send message';alert('The message could not be sent. Please try again.')});
    });
  });
  // dialogs
  document.querySelectorAll('[data-open]').forEach(function(t){
    var o=function(){document.getElementById(t.getAttribute('data-open')).showModal()};t.addEventListener('click',o);t.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();o()}});
  });
  document.querySelectorAll('dialog').forEach(function(d){
    d.addEventListener('click',function(e){if(e.target===d)d.close()});
    d.querySelectorAll('.close').forEach(function(c){c.addEventListener('click',function(){d.close()})});
  });
  var lb=document.getElementById('lightbox');
  if(lb){lb.querySelector('img').addEventListener('click',function(e){e.stopPropagation();lb.classList.toggle('full')});
    lb.addEventListener('close',function(){lb.classList.remove('full')});}
})();
