const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

document.addEventListener('keyup', (e)=> {
  console.log(e.key);
  console.log(e.code);

  if (e.code == 'Digit1') {
    navPerfil.style.display = 'block'
  } else if (e.code == 'Escape') {
    navPerfil.style.display = 'none'
  }
})
