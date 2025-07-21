const userLang = (navigator.language || 'en').toLowerCase();
const langFallbacks = [userLang, userLang.split('-')[0], 'en'];
const mark = document.querySelector('.mark');
const btns = document.querySelectorAll('.btns-category');

function tryLoadLangFile(index = 0, id) {
  if (index >= langFallbacks.length) {
    document.getElementById('commands-container').textContent = 'Commands not available in this language.';
    return;
  }
  const lang = langFallbacks[index];
  const file = `src/commands_${lang}.json`;
  
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then(data => renderCommands(data, id))
    .catch((err) => { 
      tryLoadLangFile(index + 1, id)
    });
}

function renderCommands(data, category) {
  const container = document.getElementById('commands-container');
  container.innerHTML = '';
  
  const cmds = data[category];
  const categoryName = cmds.shift();
  
  const title = document.createElement('h2');
  title.className = "text-red-300 font-bold text-3xl"
  title.textContent = `${categoryName.replace('(+18)', '⑱')}`;
  container.appendChild(title);
    
  cmds.forEach(cmd => {
    const subContainer = document.createElement('div');
    subContainer.className = "categories-content commands";
      
    const cmdName = document.createElement('h2');
    cmdName.className = "text-red-200 font-bold";
    cmdName.innerHTML = cmd.command;
      
    const cmdDesc = document.createElement('p');
    cmdDesc.className = "desc text-white";
    cmdDesc.innerHTML = cmd.desc;
      
    const cmdUsage = document.createElement('p');
    cmdUsage.className = "usage text-white";
    cmdUsage.innerHTML = `<strong>${cmd.usage}</strong>`;
      
    subContainer.appendChild(cmdName);
    subContainer.appendChild(cmdDesc);
    subContainer.appendChild(cmdUsage);
      
    container.appendChild(subContainer);
  });
}

btns.forEach(x => {
  x.addEventListener('click', () => {
    const { offsetLeft, offsetWidth } = x;
    mark.style.left = offsetLeft + 'px';
    mark.style.width = offsetWidth + 'px';
    
    tryLoadLangFile(0, x.id);
  })
})

window.addEventListener('DOMContentLoaded', () => {
  const first = document.querySelector('.btns-category');
  const { offsetLeft, offsetWidth } = first;
  mark.style.left = offsetLeft + 'px';
  mark.style.width = offsetWidth + 'px';
  
  tryLoadLangFile(0, first.id);
});