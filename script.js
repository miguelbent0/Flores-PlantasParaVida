const menuBtn=document.getElementById('menuBtn');
const menu=document.getElementById('menu');
menuBtn.addEventListener('click',()=>menu.classList.toggle('aberto'));
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('aberto')));

const filtros=document.querySelectorAll('.filtro');
const cards=document.querySelectorAll('.planta-card');
filtros.forEach(filtro=>{
  filtro.addEventListener('click',()=>{
    filtros.forEach(f=>f.classList.remove('ativo'));
    filtro.classList.add('ativo');
    const valor=filtro.dataset.filtro;
    cards.forEach(card=>{
      const tags=card.dataset.tags;
      card.classList.toggle('esconder',valor!=='todos'&&!tags.includes(valor));
    });
  });
});

const modal=document.getElementById('modal');
const modalTitulo=document.getElementById('modalTitulo');
const modalTexto=document.getElementById('modalTexto');
const dados={
  bananeira:['Bananeira ornamental','Tem folhas grandes e um visual tropical. Fica muito bonita em espaços amplos e iluminados. O vaso também pode fazer parte da composição, especialmente quando combinado com madeira e tons terrosos.'],
  monstera:['Monstera','A Monstera é famosa pelas folhas recortadas e pelo visual moderno. Ela combina muito bem com salas, quartos e cantinhos próximos de boa claridade.'],
  vaso:['Flores no vaso','Um vaso com flores é uma forma simples de mudar a atmosfera de um ambiente. Use flores claras para uma sensação delicada ou cores mais fortes para criar um ponto de destaque.']
};
document.querySelectorAll('.saiba').forEach(btn=>btn.addEventListener('click',()=>{
  const item=dados[btn.dataset.modal];
  modalTitulo.textContent=item[0]; modalTexto.textContent=item[1]; modal.classList.add('aberto'); modal.setAttribute('aria-hidden','false');
}));
function fecharModal(){modal.classList.remove('aberto');modal.setAttribute('aria-hidden','true')}
document.getElementById('fechar').addEventListener('click',fecharModal);
modal.addEventListener('click',e=>{if(e.target===modal)fecharModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')fecharModal()});

const toast=document.getElementById('toast');
document.querySelectorAll('.favorito').forEach(btn=>btn.addEventListener('click',()=>{
  btn.classList.toggle('ativo');btn.textContent=btn.classList.contains('ativo')?'♥':'♡';
  toast.textContent=btn.classList.contains('ativo')?'♥ Adicionado aos favoritos!':'♡ Removido dos favoritos';
  toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800);
}));

document.getElementById('surpresa').addEventListener('click',()=>{
  modalTitulo.textContent='Para você ♡';
  modalTexto.textContent='Se esse site pudesse virar um lugar de verdade, eu escolheria um jardim bonito, cheio de lírios, plantas e luz suave só para lembrar que as coisas mais bonitas também precisam de cuidado, Como você, a mulher mais linda e incrivel de todos os tempos.';
  modal.classList.add('aberto');modal.setAttribute('aria-hidden','false');
});

const glow=document.querySelector('.cursor-glow');
window.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
