<script setup>
import { computed, ref } from "vue";
import { useQuasar } from "quasar";
import { useRoute } from "vue-router";

import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Início",
    caption: "Tela inicial do site ",
    icon: "home",
    link: "/",
  },
  {
    title: "Tutorial",
    caption: "Dicas sobre as peças e programação",
    icon: "school",
    link: "/tutorial",
  },
  {
    title: "Exercícios",
    caption: "Exercicios de Programação",
    icon: "code",
    link: "/exercicios",
  },
];

const $q = useQuasar();
const $route = useRoute();

const leftDrawerOpen = ref(false);
const essentialLinks = ref(linksList);

const isActiveTab = (tabRoute) => {
  if (tabRoute === "/") {
    return $route.path === tabRoute;
  }

  return $route.path.includes(tabRoute);
};

const isMobile = computed(() => $q.platform.is.mobile || $q.screen.xs);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated overlay role="banner">
      <q-toolbar class="bg-white">
        <q-btn
          dense
          v-if="!isMobile"
          push
          color="dark"
          flat
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-img
          src="../assets/logo.png"
          alt="Cartoon com tons de roxo, usando um óculos e um headset"
          style="width: 30px"
          role="img"
          aria-label="Logo do site"
        />

        <q-toolbar-title
          class="text-dark stylized-font"
          role="heading"
          aria-level="1"
        >
          Echo 3D Blocks
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered role="navigation">
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-footer
      v-if="isMobile"
      class="shadow-5 rounded-borders"
      role="contentinfo"
    >
      <nav aria-label="Botões de navegação" role="navigation">
        <q-tabs
          mobile-arrows
          switch-indicator
          outside-arrows
          dense
          class="bg-white text-dark bordered shadow-2"
          color="primary"
        >
          <q-route-tab
            :icon="isActiveTab('/') ? 'home' : 'o_home'"
            label="Início"
            to="/"
          />

          <q-route-tab
            :icon="isActiveTab('/tutorial') ? 'school' : 'o_school'"
            label="Tutorial"
            to="/tutorial"
          />

          <q-route-tab
            :icon="isActiveTab('/exercicios') ? 'quiz' : 'o_quiz'"
            label="Exercícios"
            to="/exercicios"
          />
        </q-tabs>
      </nav>
    </q-footer>

    <q-page-container class="bg-linear-primary">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
