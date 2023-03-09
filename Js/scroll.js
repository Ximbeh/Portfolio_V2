

// Quando a página é carregada

window.onload = function() {
    
    // Quando o usuário rola a página
    window.onscroll = function() {
      var btnTopo = document.getElementById("btnTopo");
      // Se o usuário estiver abaixo do segundo ID da página
      if (window.pageYOffset > document.getElementById("main_id").offsetTop) {
        // Mostra o botão
        btnTopo.style.display = "block";
      } else {
        // Esconde o botão
        btnTopo.style.display = "none";
      }
    }
    
    // Quando o usuário clica no botão
    document.getElementById("btnTopo").onclick = function() {
      // Volta ao topo da página com animação suave
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    
  }


  

   

