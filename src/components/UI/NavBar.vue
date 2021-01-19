<template>
  <header
    class="z-10 relative mx-auto max-w-6xl px-6 py-8 flex justify-between items-center"
  >
    <a href="#" class="text-xl tracking-wider">SWAPI VUE</a>

    <ul class="hidden md:flex uppercase text-sm text-primary-100">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li class="ml-6">
        <router-link to="/people">People</router-link>
      </li>
      <li class="ml-6">
        <router-link to="/planets">Planets</router-link>
      </li>
      <li class="ml-6">
        <router-link to="/starships">Starships</router-link>
      </li>
    </ul>
  </header>
</template>

