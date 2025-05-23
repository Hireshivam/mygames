function loadGame(url) {
  const frame = document.getElementById('gameFrame');
  const container = document.getElementById('iframeContainer');
  frame.src = url;
  container.style.display = 'flex';
  window.scrollTo(0, container.offsetTop);
}

function closeGame() {
  const frame = document.getElementById('gameFrame');
  const container = document.getElementById('iframeContainer');
  frame.src = '';
  container.style.display = 'none';
}

function handleUpload() {
  const input = document.getElementById('uploadInput');
  const files = input.files;

  if (files.length === 0) {
    alert("Please select a Unity WebGL build folder.");
    return;
  }

  // Just show names for demo, real upload needs server
  let gameName = prompt("Enter a name for this game:", "My Uploaded Game");
  if (!gameName) return;

  const gallery = document.getElementById('gallery');
  const card = document.createElement('div');
  card.className = 'game-card';

  // Fake thumbnail and warning
  card.innerHTML = `
    <img src="https://via.placeholder.com/200x120?text=Local+Upload" alt="${gameName}" />
    <div class="title">${gameName} (local)</div>
  `;
  card.onclick = () => {
    alert("Local Unity WebGL games cannot be loaded directly in browser.\nPlease upload to a host like itch.io or Netlify and use the link.");
  };

  gallery.appendChild(card);
}