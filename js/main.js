// 公共交互逻辑

// 下滑按钮滚动到主内容
function scrollToContent() {
  const section = document.getElementById('mainContent');
  section.scrollIntoView({ behavior: 'smooth' });
}

// 标签页切换
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.style.display = 'none');
      btn.classList.add('active');
      const panel = document.getElementById(btn.dataset.target);
      if (panel) panel.style.display = 'block';
    });
  });
});

// 自动补全
function setupAutocomplete() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.addEventListener('input', () => {
    const query = input.value.trim();
    if (!query) {
      hideSuggestions();
      return;
    }
    fetch(`/search/autocomplete?query=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(list => showSuggestions(list))
      .catch(err => console.error('Autocomplete error', err));
  });
}

document.addEventListener('DOMContentLoaded', setupAutocomplete);

function showSuggestions(list) {
  let box = document.getElementById('autocomplete');
  if (!box) {
    box = document.createElement('ul');
    box.id = 'autocomplete';
    box.style.position = 'absolute';
    box.style.background = '#fff';
    box.style.border = '1px solid #ccc';
    box.style.width = '100%';
    box.style.listStyle = 'none';
    box.style.zIndex = '10';
    document.querySelector('.search-box').appendChild(box);
  }
  box.innerHTML = '';
  list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.style.padding = '0.4rem';
    li.style.cursor = 'pointer';
    li.addEventListener('click', () => {
      document.getElementById('searchInput').value = item;
      hideSuggestions();
    });
    box.appendChild(li);
  });
}

function hideSuggestions() {
  const box = document.getElementById('autocomplete');
  if (box) box.remove();
}
