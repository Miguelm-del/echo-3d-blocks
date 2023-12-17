<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const isMobile = computed(() => $q.platform.is.mobile || $q.screen.xs);
</script>

<template>
  <q-page padding class="text-center">
    <header class="q-mx-md">
      <h1 lang="en-US">Hello, World!</h1>
      <h2>Seja bem-vindo(a) ao Echo 3D Blocks</h2>
    </header>

    <main role="main" id="main" class="bg-linear-primary row justify-center">
      <p class="text-justify q-mx-lg">
        Plataforma que tornar o aprendizado de programação acessível para alunos
        com deficiência visual que combina tecnologias de visão computacional e
        peças em 3D, para criar uma experiência educacional inclusiva e
        envolvente.
      </p>

      <div class="col q-gutter-md fixed-bottom q-my-md" v-if="!isMobile">
        <q-btn
          dense
          push
          color="primary"
          icon-right="school"
          label="Ir para Tutorial"
          text-color="dark"
          size="lg"
          :to="'/tutorial'"
        />
        <q-btn
          dense
          push
          color="primary"
          text-color="dark"
          icon-right="arrow_forward"
          class="text-bold"
          label="Ir para Exercicios"
          size="lg"
          :to="'/exercicios'"
        />
      </div>
    </main>
  </q-page>
</template>
