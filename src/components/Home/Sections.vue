<template>
  <div class="py-24 px-6 bg-gray-100">
    <div class="max-w-6xl mx-auto mb-12">
      <h2
        class="mx-auto text-center text-2xl md:text-5xl max-w-3xl leading-tight text-gray-800 mb-8"
      >
        Available sections:
      </h2>

      <p
        class="mb-6 text-gray-600 mx-auto max-w-lg text-center leading-relaxed"
      >
        Learn details about all the characters in the famous movie saga created
        by George Lucas, find out all about the planets that make up this
        wonderful universe and discover all about the incredible starships that
        appear in these incredible stories.
      </p>
    </div>
    <div class="max-w-5xl mx-auto flex flex-wrap items-start">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/3 p-2 mb-12">
          <router-link
            to="/people"
            class="block mb-8 bg-black hover:bg-gray-700"
          >
            <img
              src="../../assets/images/people.jpg"
              class="w-full h-64 object-cover opacity-75"
            />
          </router-link>
          <router-link
            class="block text-base text-left uppercase tracking-wider text-gray-700"
            to="/people"
            >People</router-link
          >
        </div>

        <div class="w-full md:w-1/3 p-2 mb-12">
          <router-link
            to="/planets"
            class="block mb-8 bg-black hover:bg-gray-700"
          >
            <img
              src="../../assets/images/planets.jpg"
              class="w-full h-64 object-cover opacity-75"
            />
          </router-link>
          <router-link
            to="/planets"
            class="block text-base text-left uppercase tracking-wider text-gray-700"
            >Planets</router-link
          >
        </div>

        <div class="w-full md:w-1/3 p-2 mb-12">
          <router-link
            to="/starships"
            class="block mb-8 bg-black hover:bg-gray-700"
          >
            <img
              src="../../assets/images/starships.jpg"
              class="w-full h-64 object-cover opacity-75"
            />
          </router-link>
          <router-link
            to="/starships"
            class="block text-base text-left uppercase tracking-wider text-gray-700"
            >Starships</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>