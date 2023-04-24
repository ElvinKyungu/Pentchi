<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  	<header class="header bg-white shadow-sm">
		<router-link to="/" class="logo text-lg">Pentchi</router-link>
        <div id="menu-btn" class="fas fa-bars"></div>
        <nav class="navbar">
            <ul>
				<li><router-link to="/">Accueil</router-link></li>
				<li>
					<router-link to="/contact">Universités</router-link>
					<ul>
						<li><router-link to="/Unilu">UNILU</router-link></li>
						<li><router-link to="/Unh">UNH</router-link></li>
						<li><router-link to="/Upl">UPL</router-link></li>
						<li><router-link to="/Esis">ESIS</router-link></li>
					</ul>
            	</li>
				<li><router-link to="/contact">Contact</router-link></li>
				<li><router-link to="/Connexion">Connexion</router-link></li>
            </ul>
        </nav>
    </header> 
</template>

<style>

</style>
