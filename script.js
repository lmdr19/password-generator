// Fonction pour génerer le mdp
function generatePassword() {
  // Récupérer les options de l'utilisateur
  let length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeDigits = document.getElementById("digits").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  //   Vérifier que la longueur est bien entre 8 et 32

  if (length < 8) {
    length = 8; //Jai forcé la longueur à 8 si elle est inférieur
    alert("La longueur minimale est de 8 caracteres.");
  } else if (length > 32) {
    length = 32;
    alert("La longueur maximale est de 32 caractères.");
  }
  // Caractères de base (lettres minuscules)
  let characters = "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeDigits) characters += "0123456789";
  if (includeSymbols) characters += "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

  //   Générer le mot de passe
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  //   Afficher le mot de passe
  document.getElementById("password").innerText = password;
}
