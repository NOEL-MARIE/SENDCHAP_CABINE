<template>
  <div class="max-w-md mx-auto border-0 shadow-none shadow-slate-400/20">
    <nav class="flex py-12 ml-8 home">
      <div class="flex items-center justify-between gap-8">
        <!-- Partie gauche: Avatar + infos -->
        <div class="flex items-center">
          <img
            src="../assets/image/micah-1752165580512.svg"
            alt="avatar"
            class="w-16 h-16 mr-6 bg-pink-200 border-4 border-white rounded-full shadow rotate-animation"
          />
          <div>
            <div class="flex items-center mb-1 text-lg text-neutral-500">
              <span>Salut,</span>
              <span class="ml-2">👋</span>
            </div>
            <h2 class="font-bold text-md text-slate-800">De Gonzague Noël-Marie François</h2>
          </div>
        </div>
        <!-- Partie droite: Points + bouton -->
        <div class="flex items-center">
          <div class="flex items-center px-6 py-2 rounded-full shadow-sm bg-neutral-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4 text-white lucide lucide-plus"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <span class="text-xl font-semibold text-cyan-800">0</span>
          </div>
          <button
            class="ml-[-18px] w-8 h-8 bg-cyan-800 text-white rounded-full flex items-center justify-center text-2xl shadow transition hover:bg-cyan-900"
          >
            +
          </button>
        </div>
      </div>
    </nav>
    <!-- Pour éviter que le contenu soit caché sous la navbar -->
    <div class="">
      <ImageCarousel />
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageCarousel from '@/components/ImageCarousel.vue'
</script>

<style scoped>
@keyframes rotateBounce {
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(0deg); /* rebond retour */
  }

  100% {
    transform: rotate(360deg);
  }
}

.rotate-animation {
  animation: rotateBounce 6s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}
</style>
