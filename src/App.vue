<script setup></script>

<template>
  <div class="bg-sky-100 min-h-full md:pt-8">
    <div class="mx-4 md:mx-auto max-w-4xl">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style>
.step-info {
  font-size: 20px;
}
</style>
