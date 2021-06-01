//https://github.com/jahdaic/Glitch-Text
//$('.glitch').glitch({ speed: 280, duration: 5000 });

var typed = new Typed('#subtitle', {
  strings: ['Deine Augen werden Augen machen. Einfach faszinierend.', 'Fast zu schnell, um wahr zu sein.', 'Liebe auf den ersten, zweiten, dritten, vierten, fünften Klick.'],
  typeSpeed: 80,
  startDelay: 150,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
  onComplete: (self) => {
    self.cursor.hidden = true;
  },
});
