document.addEventListener('DOMContentLoaded',()=>{
  const container=document.getElementById('memoryGallery');
  fetch('data/memories.json').then(r=>r.ok? r.json(): Promise.reject('no data'))
    .then(memories=>{
      memories.forEach(m=>{
        const el=document.createElement('article');el.className='card';
        el.innerHTML = `
          <img src="${m.image}" alt="${m.quote || 'Memory image'}">
          <div class="memory-quote">${m.quote}</div>
          <div class="memory-date">${m.date || ''}</div>
        `;
        container.appendChild(el);
      })
    })
    .catch(err=>{container.innerHTML='<p style="padding:16px">No memories available.</p>';console.warn(err)})
})