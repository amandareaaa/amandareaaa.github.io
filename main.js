let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #285158;">Programadora de Front-End just for fun</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
