<script setup>
import { computed, ref } from "vue";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";

const emit = defineEmits(["qrCodeRead", "errorMessage", "close"]);

const result = ref("");
const error = ref("");

const open = ref(false);
const validBlock = ref(["0", "1", "2", "3", "4", "5"]);

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
    console.log(result.value);
    emit("qrCodeRead", result.value);

    if (validBlock.value.includes(result.value[0])) {
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
  } else {
    console.log("error");
    error.value = "Não foi possível ler o QR Code";
    emit("errorMessage", error.value);
    open.value = false;
  }
};
</script>

<template>
  <div class="justify-center text-center">
    <q-btn
      dense
      push
      color="blue"
      icon-right="qr_code_scanner"
      label="Responder"
      text-color="white"
      size="lg"
      @click="open = true"
    />

    <div v-if="result && !open" class="q-py-sm">
      <p class="text-center">
        Resultado do QR Code:
        <span
          class="text-bold"
          :class="result != validBlock ? 'text-negative' : 'text-positive'"
          >{{ result[0] }}</span
        >
      </p>
    </div>

    <p class="text-negative text-bold text-subtitle1">
      {{ error }}
    </p>

    <q-dialog
      v-model="open"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card style="border: 5px groove rgb(75, 75, 75)">
        <qrcode-stream
          :track="paintBoundingBox"
          @detect="onDetect"
          @error="onError"
        ></qrcode-stream>
      </q-card>
    </q-dialog>
  </div>
</template>
