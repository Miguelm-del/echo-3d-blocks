<script setup>
import { ref } from "vue";

import ReadQRCodeQuestion from "src/components/ReadQRCodeQuestion.vue";
import TableInputAndOutput from "src/components/TableInputAndOutput.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";

const qrCodes = ref([]);
const stringInput = ref("");

const readQrCodeValue = (qrCode) => {
  qrCodes.value.push(qrCode);
};
</script>

<template>
  <q-page padding>
    <header class="text-center">
      <h1>Questão 1: Olá Mundo</h1>
    </header>

    <PaneBody>
      <p>
        O seu primeiro programa em qualquer linguagem de programação normalmente
        é o "Olá, mundo". Neste primeiro problema tudo o que você precisa fazer
        é imprimir esta mensagem na tela.
      </p>

      <TableInputAndOutput :hasThreeExamples="false">
        <template #input> Não há entrada neste problema. </template>

        <template #output>
          Você deve imprimir a mensagem "Olá, mundo".
        </template>

        <template #exampleInput> </template>

        <template #exampleOutput> Olá, mundo </template>
      </TableInputAndOutput>
    </PaneBody>

    <ReadQRCodeQuestion @qrCodeRead="readQrCodeValue"> </ReadQRCodeQuestion>

    {{ qrCodes }}
    <q-input
      v-if="qrCodes.includes('3')"
      label="Preencha o valor que deseja para a variável"
      v-model="stringInput"
      dense
      outlined
    />

    <PaneFooter>
      <div class="q-mx-md">
        <q-btn
          dense
          push
          color="positive"
          label="Verificar"
          text-color="white"
          size="lg"
          class="full-width"
        />
      </div>
    </PaneFooter>
  </q-page>
</template>
