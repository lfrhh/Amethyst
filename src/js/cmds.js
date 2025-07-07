const userLang = (navigator.language || 'en').toLowerCase();
const langFallbacks = [userLang, userLang.split('-')[0], 'en'];

function tryLoadLangFile(index = 0) {
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
    .then(data => renderCommands(data))
    .catch((err) => { 
      tryLoadLangFile(index + 1) 
      console.log(err)
    });
}

function renderCommands(data) {
  const container = document.getElementById('commands-container');
  container.innerHTML = '';

  for (const category in data) {
    const cmds = data[category];
    const categoryName = cmds.shift();
    
    const title = document.createElement('h2');
    title.textContent = categoryName;
    container.appendChild(title);

    cmds.forEach(cmd => {
      const subContainer = document.createElement('div')
      const cmdName = document.createElement('h2');
      cmdName.innerHTML = cmd.command;
      
      const cmdDesc = document.createElement('p');
      cmdDesc.innerHTML = cmd.desc;
      
      const cmdUsage = document.createElement('p');
      cmdUsage.innerHTML = `<strong>${cmd.usage}</strong>`;
      
      subContainer.appendChild(cmdName);
      subContainer.appendChild(cmdDesc);
      subContainer.appendChild(cmdUsage);
      
      container.appendChild(subContainer);
    });
  }
}

tryLoadLangFile();