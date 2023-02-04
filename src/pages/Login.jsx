import buca from "../assets/images/buca.jpg";
const Login=()=>{

  return(
    <>
      <div class="row align-items-center justify-content-center vh-100">
        <div class="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 py-6">
          <h1 class="mb-2 text-center">
            <img src={buca} className="" alt="logo" width="60" height="60" />
            Connectez-vous
          </h1>
          <p class="text-secondary text-center">
            Entrez votre adresse e-mail et votre mot de passe pour accéder au panneau d'administration
          </p>
          <form>
            <div class="row">
              <div class="col-12">
                <div class="mb-4">

                  <label class="form-label">
                    Adresse Email
                  </label>

              
                  <input type="email" class="form-control" placeholder="Votre Adresse Email"/>
                </div>
              </div>

              <div class="col-12">
                
                <div class="mb-4">

                  <div class="row">
                    <div class="col">

                      
                      <label class="form-label">
                        Mot de Passe
                      </label>
                    </div>

                    <div class="col-auto">

                     
                      <a href="#" class="form-text small text-muted link-primary">Mot de passe Oublié</a>
                    </div>
                  </div> 

                  
                  <div class="input-group input-group-merge">
                    <input type="password" class="form-control" autocomplete="off" data-toggle-password-input="" placeholder="Votre Mot de passe" />

                      <button type="button" class="input-group-text px-4 text-secondary link-primary" data-toggle-password=""></button>
                  </div>
                </div>
              </div>
            </div> 

            <div class="form-check">

              
              <input type="checkbox" class="form-check-input" id="remember"/>

                
                <label class="form-check-label" for="remember">
                  Se Souvenir de moi
                </label>
            </div>

            <div class="row align-items-center text-center">
              <div class="col-12">

               
                <button type="button" class="btn w-100 buca-color mt-6 mb-2">Connectez-vous</button>
              </div>

              <div class="col-12">

                

              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;