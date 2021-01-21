<template>
  <div class="w-full text-primary-100 bg-black">
    <div class="w-full h-full relative flex items-center justify-center py-36">
      <img
        v-if="image"
        :src="image"
        class="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      />

      <div class="px-6 max-w-4xl relative z-10 text-center font-bold">
        <h1
          class="text-4xl md:text-5xl font-black leading-tight mb-2 uppercase"
        >
          {{ title }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
  },
};
</script>

<style scoped>
h1 {
  text-shadow: 2px 2px #000000;
}
</style>