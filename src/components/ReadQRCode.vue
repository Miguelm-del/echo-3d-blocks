<script setup>
import { computed, ref } from "vue";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  validBlock: {
    type: Number,
  },
});

const emit = defineEmits(["qrCodeRead", "errorMessage", "close"]);

const result = ref("");
const error = ref("");

const show = computed(() => props.show);
const validBlock = computed(() => props.validBlock);

const paintBoundingBox = (detectedCodes, ctx) => {
  for (const detectedCode of detectedCodes) {
    const {
      boundingBox: { x, y, width, height },
    } = detectedCode;

    ctx.lineWidth = 5;
    ctx.strokeStyle = "#007bff";
    ctx.strokeRect(x, y, width, height);
  }
};

const onError = (err) => {
  error.value = `Error: `;

  if (err.name === "NotAllowedError") {
    error.value += "Você precisa conceder permissão de acesso à câmera";
  } else if (err.name === "NotFoundError") {
    error.value += "Não há câmera neste dispositivo";
  } else if (err.name === "NotSupportedError") {
    error.value += "Contexto seguro é necessário (HTTPS, localhost)";
  } else if (err.name === "NotReadableError") {
    error.value += "A câmera já está em uso?";
  } else if (err.name === "OverconstrainedError") {
    error.value += "As câmeras instaladas não são adequadas";
  } else if (err.name === "StreamApiNotSupportedError") {
    error.value += "API de Stream não é suportada neste navegador";
  } else if (err.name === "InsecureContextError") {
    error.value +=
      "O acesso à câmera só é permitido em um contexto seguro. Use HTTPS ou localhost em vez de HTTP.";
  } else {
    error.value += err.message;
  }

  emit("errorMessage", error.value);
  emit("close");
  result.value = "";
};

const onDetect = (detectedCodes) => {
  result.value = detectedCodes.map((code) => code.rawValue);
  if (result.value) {
    emit("qrCodeRead", result.value);
    emit("close");

    if (result.value == validBlock.value) {
      const validInputAudio = new Audio(
        "https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/positive_beeps.wav?alt=media&token=6de302fb-85d0-4b2b-8862-eeb7e76863a0"
      );
      validInputAudio.play();
    } else {
      const invalidInputAudio = new Audio(
        "https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/negative_beeps.wav?alt=media&token=e5c22314-0259-483e-b050-d85762f2770f"
      );
      invalidInputAudio.play();
    }

    let typeOfBlock = "";
    switch (result.value) {
      case value:
      case 0:
        typeOfBlock = new Audio(
          "https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/GDYK3.wav?alt=media&token=fa9e7b25-ed99-43eb-b49c-503d1928652b"
        );
        typeOfBlock.play();
        break;

      case 1:
        typeOfBlock = new Audio(
          "https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/S1ZO6.wav?alt=media&token=5919c915-2396-4a0a-9075-5eb937b7beba"
        );
        typeOfBlock.play();
        break;

      case 2:
        typeOfBlock = new Audio(
          "https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/QPG69.wav?alt=media&token=d517ec4e-eccd-47fc-96e2-10ed1f04b5b0"
        );
        typeOfBlock.play();
        break;

      case 3:
        typeOfBlock = new Audio(
          "https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/8ER2R.wav?alt=media&token=3046d968-094b-4eda-818c-c1b822cfa9bd"
        );
        typeOfBlock.play();
        break;

      case 4:
        typeOfBlock = new Audio(
          "https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/NVC4I.wav?alt=media&token=e6cac909-b28d-444a-b451-a501caa743f3"
        );
        typeOfBlock.play();
        break;

      case 5:
        typeOfBlock = new Audio(
          "https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/NVC4I.wav?alt=media&token=e6cac909-b28d-444a-b451-a501caa743f3"
        );
        typeOfBlock.play();
        break;

      default:
        break;
    }
  } else {
    error.value = "Não foi possível ler o QR Code";
    emit("errorMessage", error.value);
  }
};
</script>

<template>
  <q-card full-width full-height>
    <div v-if="result" class="q-py-sm">
      <h2 class="text-center" id="resultLabel">
        Resultado do QR Code:
        <span
          class="text-bold"
          :class="result != validBlock ? 'text-negative' : 'text-positive'"
          aria-labelledby="resultLabel"
          >{{ result[0] }}</span
        >
      </h2>
    </div>

    <p class="text-negative text-bold text-subtitle1" role="alert">
      {{ error }}
    </p>

    <q-dialog
      v-model="show"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
      aria-label="Leitura de QR Code"
      aria-modal="true"
      aria-labelledby="dialogTitle"
    >
      <q-card style="border: 5px groove rgb(75, 75, 75)">
        <q-card-section class="q-pa-sm bg-transparent">
          <div class="text-h6 text-center">Leitura de QR Code</div>
          git
        </q-card-section>
        <q-card-section cçass="bg-transparent">
          <div class="text-center">
            <q-btn
              color="primary"
              icon="close"
              flat
              @click="emit('close')"
              class="q-ma-sm"
              role="button"
              aria-label="Fechar"
              aria-disabled="false"
            />
          </div>
        </q-card-section>

        <qrcode-stream
          :track="paintBoundingBox"
          @detect="onDetect"
          @error="onError"
          aria-label="Câmera para leitura de QR Code"
        ></qrcode-stream>
      </q-card>
    </q-dialog>
  </q-card>
</template>
