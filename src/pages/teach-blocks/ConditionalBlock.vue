<script setup>
import { ref } from "vue";

import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
import ReadQRCode from "src/components/ReadQRCode.vue";
import BlockImage from "src/components/BlockImage.vue";

const showReadQRCode = ref(false);
const validBlock = ref(4);
</script>

<template>
  <q-page padding>
    <header class="text-center">
      <h1>Bloco Condicional Se</h1>
      <p class="text-center">Número em braille do bloco: <strong>4</strong></p>
    </header>

    <PaneBody>
      <p class="text-justify">
        O bloco "Condicional"é como um ponto de escolha onde o programa pode
        seguir diferentes caminhos, dependendo de certas circunstâncias.
      </p>

      <BlockImage
        :src="'https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/Condicional.png?alt=media&token=43aa4fc3-0442-4cf5-a22c-db64af34758e'"
        :alt="'Exemplo de bloco condicional se'"
      />

      <p class="text-justify">
        Quando você utiliza o bloco "Condicional", você está criando uma
        situação em que o programa verifica se uma condição é verdadeira ou
        falsa, também conhecido como true e false. Essa condição pode ser
        qualquer coisa, como "É dia?" ou "A pontuação é maior que 100?".
      </p>

      <p class="text-justify">
        Se a condição for verdadeira, o programa executará um conjunto de
        instruções específicas. Se a condição for falsa, ele seguirá um caminho
        diferente com outras instruções. Isso é muito útil para criar programas
        que podem se adaptar a diferentes situações e tomar decisões com base
        nos dados disponíveis.
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
        size="lg"
        text-color="white"
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
        :to="'se-nao'"
      />
    </PaneFooter>
  </q-page>
</template>
