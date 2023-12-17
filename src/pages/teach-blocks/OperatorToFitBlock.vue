<script setup>
import { ref } from "vue";

import ReadQRCode from "src/components/ReadQRCode.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
import BlockImage from "src/components/BlockImage.vue";

const showReadQRCode = ref(false);
const validBlock = ref(1);
</script>

<template>
  <q-page padding>
    <header class="text-center">
      <h1>Bloco de Operadores</h1>
      <p class="text-center">Número em braille do bloco: <strong>1</strong></p>
    </header>

    <PaneBody>
      <p class="text-justify">
        Os operadores são como ferramentas especiais na programação que ajudam a
        realizar diferentes tipos de cálculos e comparações. Eles são símbolos
        ou palavras que indicam como os dados devem ser combinados ou avaliados
        em um programa.
      </p>

      <BlockImage
        :src="'https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/Encaixe-de-Operador.png?alt=media&token=06c703c3-c37e-4f8e-959f-f49219b94499'"
        :alt="'Exemplo de bloco enxaixe de operador'"
      />

      <p class="text-justify">
        Os operadores podem ser usados para realizar diversas tarefas, como
        adicionar números, subtrair valores, comparar se um valor é maior ou
        menor que outro, entre muitas outras operações matemáticas e lógicas.
      </p>

      <p class="text-justify">
        Por exemplo, o operador de adição (+) permite somar números, o operador
        de subtração (-) permite subtrair, e o operador de igualdade (==) é
        usado para verificar se dois valores são iguais. Esses são apenas alguns
        exemplos de operadores comuns.
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
        size="lg"
        :to="'comparador'"
      />
    </PaneFooter>
  </q-page>
</template>
