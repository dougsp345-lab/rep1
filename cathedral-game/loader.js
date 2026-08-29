(() => {
  const files = ['data.js', 'game.js'];
  const load = (index) => {
    if (index >= files.length) return;
    const script = document.createElement('script');
    script.src = files[index];
    script.defer = true;
    script.onload = () => load(index + 1);
    script.onerror = () => {
      document.getElementById('screen').innerHTML = '<section class="panel"><h1>Unable to open the game</h1><p>Please refresh the page. If the problem remains, the game files may still be publishing.</p></section>';
    };
    document.head.appendChild(script);
  };
  load(0);
})();
