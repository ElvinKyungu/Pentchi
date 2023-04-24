<script>
import {ref} from 'vue'

const loaderCardData = async()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                categorie: "Informatique",
                name: "Examen de programmation",
                user: "Elvin Kyungu",
                download: 5556,
                date: "02 Oct 2022"
            })
        }, 9000)
    })
}
export default {
    name: 'Card',
    async setup(){
        const cardData = ref(await loaderCardData());
        return{
            cardData
        }
    },
}
</script>

<template>         
    <div class="course">
        <div class="icon-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
        <span class="text-xs">{{ cardData.categorie }}</span>
        <img src="../assets/images/Capture.png" class=" w-full h-1/3 object-cover"  alt="">
        <div class="absolute w-full left-0" style="border-bottom: 1px solid rgb(218, 218, 218);"></div>
        <h2 class="product-title">{{ cardData.name }}</h2>
        <div class="flex items-center gap-4 -mt-4">
            <img src="../assets/images/unilu.jpg" class="w-4 h-4" alt="">
            <span class="text-xs font-semibold">{{ cardData.date }}</span>
        </div>
        <div class="flex  justify-between items-center my-4 gap-2">
            <span class="badge flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>  
                <span class="overflow-ellipsis text-xs overflow-hidden
                        whitespace-nowrap ">{{ cardData.user }}</span>                            
            </span>
            <span class="badge flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span class="overflow-ellipsis overflow-hidden whitespace-nowrap text-xs">{{ cardData.download }}</span>                              
            </span>
        </div>
        <div class="btn-primary">
            <span class="text-xs">Download</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </div>
    </div>
    <div class="course">
        <div class="icon-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
        <span class="text-xs">{{ cardData.categorie }}</span>
        <img src="../assets/images/Capture.png" class=" w-full h-1/3 object-cover"  alt="">
        <div class="absolute w-full left-0" style="border-bottom: 1px solid rgb(218, 218, 218);"></div>
        <h2 class="product-title">{{ cardData.name }}</h2>
        <div class="flex items-center gap-4 -mt-4">
            <img src="../assets/images/unilu.jpg" class="w-4 h-4" alt="">
            <span class="text-xs font-semibold">{{ cardData.date }}</span>
        </div>
        <div class="flex  justify-between items-center my-4 gap-2">
            <span class="badge flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>  
                <span class="overflow-ellipsis text-xs overflow-hidden
                        whitespace-nowrap ">{{ cardData.user }}</span>                            
            </span>
            <span class="badge flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span class="overflow-ellipsis overflow-hidden whitespace-nowrap text-xs">{{ cardData.download }}</span>                              
            </span>
        </div>
        <div class="btn-primary">
            <span class="text-xs">Download</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </div>
    </div>
    <div class="course">
        <div class="icon-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
        <span class="text-xs">{{ cardData.categorie }}</span>
        <img src="../assets/images/Capture.png" class=" w-full h-1/3 object-cover"  alt="">
        <div class="absolute w-full left-0" style="border-bottom: 1px solid rgb(218, 218, 218);"></div>
        <h2 class="product-title">{{ cardData.name }}</h2>
        <div class="flex items-center gap-4 -mt-4">
            <img src="../assets/images/unilu.jpg" class="w-4 h-4" alt="">
            <span class="text-xs font-semibold">{{ cardData.date }}</span>
        </div>
        <div class="flex  justify-between items-center my-4 gap-2">
            <span class="badge flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>  
                <span class="overflow-ellipsis text-xs overflow-hidden
                        whitespace-nowrap ">{{ cardData.user }}</span>                            
            </span>
            <span class="badge flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span class="overflow-ellipsis overflow-hidden whitespace-nowrap text-xs">{{ cardData.download }}</span>                              
            </span>
        </div>
        <div class="btn-primary">
            <span class="text-xs">Download</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </div>
    </div>
    <div class="course">
        <div class="icon-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
        <span class="text-xs">{{ cardData.categorie }}</span>
        <img src="../assets/images/Capture.png" class=" w-full h-1/3 object-cover"  alt="">
        <div class="absolute w-full left-0" style="border-bottom: 1px solid rgb(218, 218, 218);"></div>
        <h2 class="product-title">{{ cardData.name }}</h2>
        <div class="flex items-center gap-4 -mt-4">
            <img src="../assets/images/unilu.jpg" class="w-4 h-4" alt="">
            <span class="text-xs font-semibold">{{ cardData.date }}</span>
        </div>
        <div class="flex  justify-between items-center my-4 gap-2">
            <span class="badge flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>  
                <span class="overflow-ellipsis text-xs overflow-hidden
                        whitespace-nowrap ">{{ cardData.user }}</span>                            
            </span>
            <span class="badge flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span class="overflow-ellipsis overflow-hidden whitespace-nowrap text-xs">{{ cardData.download }}</span>                              
            </span>
        </div>
        <div class="btn-primary">
            <span class="text-xs">Download</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </div>
    </div>
    <div class="course">
        <div class="icon-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
        <span class="text-xs">{{ cardData.categorie }}</span>
        <img src="../assets/images/Capture.png" class=" w-full h-1/3 object-cover"  alt="">
        <div class="absolute w-full left-0" style="border-bottom: 1px solid rgb(218, 218, 218);"></div>
        <h2 class="product-title">{{ cardData.name }}</h2>
        <div class="flex items-center gap-4 -mt-4">
            <img src="../assets/images/unilu.jpg" class="w-4 h-4" alt="">
            <span class="text-xs font-semibold">{{ cardData.date }}</span>
        </div>
        <div class="flex  justify-between items-center my-4 gap-2">
            <span class="badge flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>  
                <span class="overflow-ellipsis text-xs overflow-hidden
                        whitespace-nowrap ">{{ cardData.user }}</span>                            
            </span>
            <span class="badge flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span class="overflow-ellipsis overflow-hidden whitespace-nowrap text-xs">{{ cardData.download }}</span>                              
            </span>
        </div>
        <div class="btn-primary">
            <span class="text-xs">Download</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </div>
    </div>
</template>

<style>

</style>