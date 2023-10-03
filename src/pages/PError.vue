<template>
  <div class="bg-white/50 w-screen h-screen flex justify-center items-center">
    <div class="container flex justify-center items-center flex-col gap-3">
      <h2 class="text-3xl font-bold text-center">
        Sahifa topilmadi <br />
        yoxud Serverda xatolik yuz berdi!
      </h2>
      <h3>( sahifani yangilab ko'ring, iltimos )</h3>
      <el-button @click="$router.push('/')" size="large">
        Bosh sahifaga qaytish
      </el-button>
    </div>
  </div>
</template>
<script setup></script>
