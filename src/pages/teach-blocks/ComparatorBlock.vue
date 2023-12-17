<script setup>
import { ref } from "vue";

import ReadQRCode from "src/components/ReadQRCode.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
import BlockImage from "src/components/BlockImage.vue";

const showReadQRCode = ref(false);
const validBlock = ref(2);
</script>

<template>
  <q-page padding>
    <header class="text-center">
      <h1>Bloco Comparador</h1>
      <p class="text-center">Número em braille do bloco: <strong>2</strong></p>
    </header>

    <PaneBody>
      <p class="text-justify">
        O bloco "Comparador" permite comparar dois valores ou variáveis para
        determinar sua relação. Ele ajuda o programa a verificar se uma condição
        específica é verdadeira ou falsa.
      </p>

      <BlockImage
        :src="'https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/Comparador.png?alt=media&token=43c33fbf-9efa-4edf-88cd-008c269599c9'"
        :alt="'Exemplo de bloco comparador'"
      />

      <p class="text-justify">
        Por exemplo, o bloco "Comparador" pode ser usado para verificar se um
        número é maior do que outro (&gt;, indicando "maior que"), menor do que
        outro (&lt;, indicando "menor que"), ou igual a outro (==, indicando
        "igual a"). Essas são apenas algumas das operações de comparação comuns.
      </p>

      <p class="text-justify">
        Isso conclui nossa introdução aos blocos de programação.E agora você tem
        uma visão geral de algumas das principais estruturas utilizadas na
        programação. Continue praticando e explorando para aprofundar seus
        conhecimentos!
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
        size="lg"
        color="primary"
        text-color="dark"
        :to="'terminador'"
      />
    </PaneFooter>
  </q-page>
</template>
