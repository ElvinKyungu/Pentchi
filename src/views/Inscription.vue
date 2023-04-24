<template>
    <div style="font-size: 100% !important;" class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div
        class="max-w-screen-xl m-0  bg-white shadow sm:rounded-lg flex justify-center flex-1"
        >
        <div class="lg:w-1/2 xl:w-5/12 p-6 ">
            <div class="mt-12 flex flex-col items-center">
                <h1 class="text-2xl xl:text-3xl font-extrabold">
                    Inscrivez-vous
                </h1>
                <div class="w-full flex-1"><br>

                    <div class="mx-auto max-w-xs mt-3">
                        
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium
                            bg-gray-100 border border-gray-200
                             text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text"
                            placeholder="Username"
                        />
                        
                        <select name="" id="university" class="w-full px-8 py-4 rounded-lg font-medium
                        bg-gray-100 border border-gray-200 cursor-pointer 
                        mt-5 text-sm select-text focus:outline-none focus:border-gray-400 focus:bg-white">
                            <option value="" class="w-full text-gray-500" >Quelle est université ?</option>
                            <option value="" class="w-full">UNILU (université de Lubumbashi)</option>
                            <option value="" class="w-full">UNH (université nouveaux horizons)</option>
                            <option value="" class="w-full">ESIS (Salama)</option>
                        </select>
                        <select name="" id="" class="w-full px-8 py-4 rounded-lg font-medium
                        bg-gray-100 border border-gray-200cursor-pointer 
                         mt-5 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                            <option value="" >Quelle est votre filière ?</option>
                            <option value="" >Informatique</option>
                            <option value="">Economie</option>
                            <option value="">Mathématique</option>
                            <option value="">Médecine</option>
                        </select>
                        <input
                            class="w-full px-8 py-4 rounded-lg 
                            font-medium bg-gray-100 border text-sm
                            border-gray-200 
                            focus:outline-none focus:border-gray-400 
                            focus:bg-white mt-5"
                            type="email"
                            placeholder="Adresse mail"
                        />
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium
                            bg-gray-100 border border-gray-200
                            mt-5 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="password"
                            placeholder="Mot de passe"
                        />  
                        <button
                            class="mt-5 tracking-wide font-semibold
                            bg-indigo-500 text-gray-100 w-full py-4
                            rounded-lg hover:bg-indigo-700 transition-all
                            duration-300 ease-in-out flex items-center 
                            justify-center focus:shadow-outline 
                            focus:outline-none"
                        >
                            
                            <span class="ml-3 ">Inscrivez-vous</span>
                        </button>
                        <p class="mt-6 text-sm text-gray-600 text-center">
                            Vous avez un compte ?   
                            <a href="connexion.html" class="text-indigo-500">
                                connectez-vous
                            </a>
                        </p>
                        <p class="mt-6 text-sm text-gray-600 text-center">
                            J'accepte de respecter les   
                            <a href="#" class="text-indigo-500">
                                conditions d'utilisation
                            </a>
                            de Pentshi et sa 
                            <a href="#" class="text-indigo-500">
                                politique de confidentialité
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
            class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');"
            ></div>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
html {
    
    overflow-x: hidden;
}
</style>