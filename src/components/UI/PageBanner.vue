<template>
  <div class="w-full text-primary-100 bg-gray-900">
    <div class="w-full h-full relative flex items-center justify-center py-36">
      <img
        src="https://images.unsplash.com/photo-1579566346927-c68383817a25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        class="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      />

      <div class="px-6 max-w-4xl relative z-10 text-center font-bold">
        <h1 class="text-3xl md:text-5xl font-black leading-tight mb-2">
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
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h1 {
  text-shadow: 2px 2px #000000;
}
</style>