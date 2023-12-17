<script setup>
import PaneFooter from "src/components/panes/PaneFooter.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
</script>

<template>
  <q-page padding>
    <header class="text-center">
      <q-icon
        name="school"
        size="xl"
        aria-label="Icone de capelo chapéu de formatura "
      />
      <h1>Bem-vindo ao tutorial</h1>
    </header>

    <PaneBody>
      <p class="text-jutify">
        O tutorial servirá para apresentar as peças, suas funcionalidades e como
        será todo o processo de programação com blocos e visão computacional
      </p>
      <p class="text-jutify">
        Você receberá as peças fisicas com o QR Code, que está localizado no
        canto inferior a esquerda, e com as respectivas identificações em
        braille, que está localizado no canto inferior direito.
      </p>

      <p class="text-jutify">
        No tutorial, terá um botão para conferir as peça. O botão abrirá a
        câmera do seu celular e você apontará para o QR Code para validar as
        peças.
      </p>
    </PaneBody>

    <PaneFooter>
      <q-btn
        dense
        push
        color="primary"
        icon-right="arrow_forward"
        label="Continuar  tutorial"
        text-color="black"
        size="lg"
        class="text-bold"
        to="tutorial/variavel"
      />
    </PaneFooter>
  </q-page>
</template>
