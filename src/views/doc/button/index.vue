<template>
  <div>
    <Preview :component="Button1" />
  </div>
</template>

<script setup>

import Button1 from "./Button1.preview.vue";
import Preview from "../../../components/Preview.vue";

</script>

<style lang="scss">
.jw-button + .jw-button {
  margin-left: 20px;
}
</style>
