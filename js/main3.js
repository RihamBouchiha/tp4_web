function ajouterTelephone() {
    const container = document.getElementById('telephones');
  
    const div = document.createElement('div');
    div.className = 'telephone';
  
    const label = document.createElement('label');
    label.textContent = 'Téléphone:';
  
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'telephone';
  
    const supprimer = document.createElement('a');
    supprimer.textContent = 'Supprimer';
    supprimer.onclick = function () {
      if (container.children.length > 1) {
        container.removeChild(div);
      }
    };
  
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(supprimer);
  
    container.appendChild(div);
  }
  
  document.getElementById('formulaire').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire
  
    let valide = true;
    const inputs = document.querySelectorAll('input[type="text"]');
  
    // Supprimer les anciens messages d'erreur
    document.querySelectorAll('.message-erreur').forEach(msg => msg.remove());
  
    inputs.forEach(input => {
      input.classList.remove('error', 'success');
      if (input.value.trim() === '') {
        input.classList.add('error');
  
        const message = document.createElement('span');
        message.className = 'message-erreur';
        message.textContent = 'Champ obligatoire!';
        input.insertAdjacentElement('afterend', message);
  
        valide = false;
      } else {
        input.classList.add('success');
      }
    });
  
    if (valide) {
      alert("Formulaire soumis avec succès !");
      // Ici tu peux faire un envoi réel ou traitement des données
    }
  });
  