<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },

  link: {
    type: String,
    default: "#",
  },

  icon: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <q-item clickable :to="link" active-class="my-menu-option " class="menu-list">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle1">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<style>
.my-menu-option {
  background-color: #c077dbed;
  color: #ffffff;
  font-weight: bold;
}

.menu-list {
  border-radius: 0 32px 32px 0;
}
</style>
