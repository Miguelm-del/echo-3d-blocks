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
      <h1>Bloco Condicional Se Não</h1>
      <p class="text-center">Número em braille do bloco: <strong>4</strong></p>
    </header>

    <PaneBody>
      <p class="text-justify">
        A estrutura condicional "se não" é uma declaração lógica que é utilizada
        em programação para avaliar se uma condição é falsa e, em seguida,
        executar um bloco de código alternativo.
      </p>

      <BlockImage
        :src="'https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/else.png?alt=media&token=b646d3a0-4249-49bb-ad99-d2f5b8a46204'"
        :alt="'Exemplo de bloco condicional se não'"
      />

      <p class="text-justify">
        Em muitas linguagens de programação, essa estrutura é representada pela
        palavra-chave "else" logo após um bloco de código condicional "if" (se).
        Ela complementa a lógica do "if", permitindo a execução de um conjunto
        diferente de instruções caso a condição do "if" não seja atendida.
      </p>

      <p class="text-justify">
        idade = 18 <br />
        if idade >= 18: <br />
        print("Você é maior de idade.")<br />
        else:<br />
        print("Você é menor de idade.") <br />
      </p>

      <p>
        Neste caso, se a variável "idade" for maior ou igual a 18, a primeira
        mensagem será impressa. Caso contrário, ou seja, se a idade for menor
        que 18, a segunda mensagem será exibida, devido ao bloco de código
        associado ao "else".
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
        :to="'processo'"
      />
    </PaneFooter>
  </q-page>
</template>
