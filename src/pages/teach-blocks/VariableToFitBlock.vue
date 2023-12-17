<script setup>
import { ref } from "vue";

import ReadQRCode from "src/components/ReadQRCode.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
import BlockImage from "src/components/BlockImage.vue";

const showReadQRCode = ref(false);
const validBlock = ref(0);
</script>

<template>
  <q-page padding>
    <header class="text-center">
      <h1>Bloco Encaixe de Variável</h1>
      <p class="text-center">Número em braille do bloco: <strong>0</strong></p>
    </header>

    <PaneBody>
      <p class="text-justify">
        Este bloco, chamado "Variável" permite associar um valor a uma variável,
        que é como uma caixa onde você pode guardar informações.
      </p>

      <BlockImage
        :src="'https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/Encaixe-de-Vari%C3%A1vel.png?alt=media&token=e90cc15a-19ff-4917-b71a-cb7f1287713d'"
        :alt="'Exemplo de bloco enxaixe de variável'"
      />

      <p class="text-justify">
        A variável atua como um recipiente que mantém um número, texto ou outro
        tipo de dado que você deseja armazenar.
      </p>

      <p class="text-justify">
        Isso é muito útil, porque você pode dar nomes significativos às
        variáveis, como "idade" ou "pontuação", e, em seguida, associar valores
        a essas variáveis.
      </p>

      <p class="text-justify">
        Por exemplo, você pode guardar a sua idade (como 25) ou sua pontuação em
        um jogo (como 100) dentro dessas variáveis.
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
        :to="'operador'"
      />
    </PaneFooter>
  </q-page>
</template>
