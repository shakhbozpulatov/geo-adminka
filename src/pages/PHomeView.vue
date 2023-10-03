<template>
  <div>
    <el-input v-model="user.username" placeholder="Please input" />
    <el-input v-model="user.password" placeholder="Please input" />
    <el-button @click="login">Send</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authLogin = useAuthStore();
const user = ref({
  username: "",
  password: "",
});
const login = async function () {
  const data = await authLogin.login(user);
};
</script>

<style lang="scss" scoped></style>
