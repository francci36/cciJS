function verifForm(){
    let nom =document.getElementById('nom');
    let prenom =document.getElementById('prenom');
    let email =document.getElementById('email');
    if(nom.value != "" && prenom.value != "" && email.value != ""){
        // si la personne a plus de 18 ans
        if(verifAge()){
            // on verifie si les mots de passes font plus de 8 caracteres et s'ils sont identiques
            if(verifPassword()){
                return true;
            }else{
                // si les mot de passes ne sont pas identiques
                return false;
            }
        }else{
            //si la personne est mineur
            return false;
        }
    }else{
        // si un des champs n'est pas saisie
        if(nom.value == ""){
            document.getElementById('message').innerText = "veuillez renseigner votre nom"
        }
        else if(prenom.value == ""){
            document.getElementById('message').innerText = "veuillez renseigner votre prenom"
        }
        else if(email.value == ""){
            document.getElementById('message').innerText = "veuillez renseigner votre email"
        }
        return false;
    }
}