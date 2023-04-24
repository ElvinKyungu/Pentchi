<script setup>
import Header from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import CardData from '../components/Card.vue'
import CardDataSkelton from '../components/CardDataSkelton.vue'

</script>
<template>
    <div id="app">
        <Header />
        <section class="">
            <div class="pt-32 md:py-12 xl:container m-auto px-6 relative">
                <div class="absolute inset-0 my-auto w-1/3 h-1/3 rounded-full rotate-45 bg-gradient-to-r from-indigo-500  to-green-200 blur-3xl opacity-50 z-20"></div>
                <div class="relative lg:flex lg:items-center lg:gap-12">
                    <div class="text-center lg:text-left md:mt-12 lg:mt-0  sm:mx-auto lg:mr-auto ">
                        <h1 class="text-gray-900 font-bold text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-center">Accédez à des copies d'épreuves antérieures et téléchargez-les<span class="text-indigo-500"> gratuitement.</span></h1>
                        <p class="mt-8 text-gray-600 text-center"><br>
                            Obtenez un avantage compétitif sur vos pairs en accédant à cette ressource essentielle pour réussir vos examens. Ne manquez pas cette opportunité de maximiser votre potentiel académique et de briller dans vos études. Téléchargez nos copies d'épreuves maintenant !
                        </p><br><br>
                        <div class="absolute top-1 right-0 w-1/2 h-1/2 rounded-full  bg-gradient-to-r from-green-200  to-indigo-300 -rotate-45 blur-3xl opacity-50 "></div>
                    </div>
                    
                </div>
            </div> 
        </section>  
        <section class="-mt-36">
            <div class=" xl:container m-auto px-6 md:px-12">
                <div class="relative lg:flex lg:items-center lg:gap-12 mb-12 ">
                    <div class="text-center lg:text-left  lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-[70%] ">
                        <div>
                            <form action="" class="w-full">
                                <div class="relative flex items-center px-2 p-1 lg:py-1 rounded-full shadow-md md:p-1 lg:pr-3 " style="border: .1px solid rgb(218, 218, 218);">
                                    <div class="pl-6 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                        </svg>
                                    </div>
                                    <input autocomplete="search" placeholder="Entrer le nom de l'épreuve" class="w-full p-4 rounded-full placeholder-gray-600    bg-transparent" type="text">
                                    <div class="md:pr-1.5 lg:pr-0 flex gap-4">
                                        <button type="button" title="Start buying" class="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute rounded-full before:inset-0  bg-black/5">
                                            <span class="relative hidden w-max text-black   md:block">
                                                Chercher
                                            </span>
                                        </button>
                                        <button type="button" title="Start buying" class="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute rounded-full before:inset-0  bg-black/5">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> <br>
            <div class="grid grid-mobile xs:grid-cols-2 grid-cols-5 gap-4 xl:grid-cols-5 md:4 sm:grid-cols-3 ">  
                <Suspense>
                    <template #default>
                        <!-- Async component  -->
                        <CardData/>
                    </template>
                    <template #fallback>
                        <!-- Fallback component -->
                        <CardDataSkelton/>
                    </template>
                </Suspense>
            </div>
        </section>
        <Footer />
    </div>
</template>
<style>

</style>
