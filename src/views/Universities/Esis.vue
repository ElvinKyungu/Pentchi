<script>
import Header from '../../components/NavBar.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<template>
    <div id="app">
        <Header />
        <section class="mt-24">
            <div class="pt-32 md:py-12 xl:container m-auto px-6 relative">
                <div class="absolute inset-0 my-auto w-1/3 h-1/3 rounded-full rotate-45 bg-gradient-to-r from-indigo-500  to-green-200 blur-3xl opacity-50 z-20"></div>
                <div class="relative lg:flex lg:items-center lg:gap-12">
                    <div class="text-center lg:text-left md:mt-12 lg:mt-0  sm:mx-auto lg:mr-auto ">
                        <h1 class="text-gray-900 font-bold text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-center">Bienvenue à l'<span class="text-indigo-500">Ecole supérieure d'informatique SALAMA.</span></h1>
                        
                    </div>
                    
                </div>
            </div> 
        </section>  
        <Footer />
    </div>
</template>

<style>

</style>
