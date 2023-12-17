<script setup>
import { ref } from "vue";

import ReadQRCode from "src/components/ReadQRCode.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
import BlockImage from "src/components/BlockImage.vue";

const showReadQRCode = ref(false);
const validBlock = ref(3);
</script>

<template>
  <q-page padding>
    <header class="text-center">
      <h1>Bloco Terminador</h1>
      <p class="text-center">Número em braille do bloco: <strong>3</strong></p>
    </header>

    <PaneBody>
      <p class="text-justify">
        O bloco "Terminador" é uma estrutura essencial em programação que marca
        o início e fim de um programa ou segmento específico de código.
      </p>

      <BlockImage
        :src="'https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/Terminador.png?alt=media&token=fb3ebf44-6721-47af-94f0-8f0f41a753e2'"
        :alt="'Exemplo de bloco terminador'"
      />

      <p class="text-justify">
        O bloco "Terminador" é utilizado para indicar o ponto onde um programa
        ou conjunto de instruções deve ser iniciado ou irá finalizar. Ele não
        executa operações lógicas específicas, mas é crucial para o controle de
        fluxo e organização do código.
      </p>

      <ReadQRCode
        :show="showReadQRCode"
        :valid-block="validBlock"
        @close="showReadQRCode = false"
      ></ReadQRCode>
    </PaneBody>

    <PaneFooter>
      <q-btn
        dense
        push
        color="positive"
        icon-right="qr_code_2"
        label="Validar peça"
        text-color="white"
        size="lg"
        @click="showReadQRCode = true"
      />
      <q-btn
        dense
        push
        icon-right="arrow_forward"
        class="text-bold"
        label="Próxima peça"
        color="primary"
        text-color="dark"
        :to="'condicional'"
        size="lg"
      />
    </PaneFooter>
  </q-page>
</template>
