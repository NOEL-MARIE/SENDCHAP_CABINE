<template>
  <div class="w-full max-w-sm min-h-screen mx-auto borde">
    <div class="flex flex-col gap-36">
      <!-- HEADER -->
      <div class="p-4 bg-gradient-to-r from-[#8559C5] to-purple-300 rounded-b-2xl">
        <div class="flex items-center">
          <img
            src="../assets/image/micah-1752165580512.svg"
            alt="avatar"
            class="w-16 h-16 mr-6 bg-pink-200 border-4 border-white rounded-full shadow rotate-animation"
          />
          <div>
            <div class="text-sm text-white">Salut,</div>
            <div class="text-lg font-bold text-white"> DE GONZAGUE NOËL-MARIE FRANÇOIS</div>
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <button class="flex flex-col items-center focus:outline-none" @click="openTransfer">
            <div
              class="flex items-center justify-center w-10 h-10 p-1 bg-white border bg-opacity-20 rounded-xl"
            >
              <img src="../assets/image/paper plane.gif" alt="Envoi d'argent" />
            </div>
            <span class="mt-1 text-xs text-white">Envoi d'argent</span>
          </button>
        </div>
      </div>
      <!-- SECTION LOADER -->
      <div><Loader /></div>
      <!-- SECTION LOADER -->
    </div>

    <!-- MODAL TRANSFERT D'ARGENT -->
    <transition name="slide-up" mode="out-in" class="backdrop-blur-sm">
      <div
        v-if="showTransfer"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      >
        <div
          class="bg-white rounded-2xl w-[95vw] max-w-sm p-5 mx-auto shadow-lg relative animate-slideUp"
        >
          <!-- Bouton retour (croix gauche) -->
          <button
            v-if="step > 1 && step <= 6"
            class="absolute flex items-center justify-center w-8 h-8 text-2xl text-purple-600 rounded-full top-3 left-3 hover:bg-purple-100"
            @click="prevStep"
            title="Retour"
          >
            &larr;
          </button>
          <!-- Bouton fermer -->
          <button
            class="absolute text-xl text-gray-400 top-3 right-3 hover:text-gray-600"
            @click="resetTransfer"
            title="Fermer"
          >
            &times;
          </button>

          <!-- TITRE DYNAMIQUE -->
          <h2 class="mb-6 text-lg font-bold text-center text-purple-700">
            {{ stepTitles[step - 1] }}
          </h2>

          <!-- ÉTAPE 1 : Choix réseau à débiter -->
          <div v-if="step === 1" class="flex flex-col space-y-4 backdrop-blur-xl">
            <div
              v-for="net in networks"
              :key="net.value"
              @click="chooseFromNetwork(net.value)"
              :class="[
                'flex items-center justify-between space-x-3 p-3 border rounded-lg cursor-pointer transition',
                form.fromNetwork === net.value
                  ? 'border-purple-600 bg-purple-50'
                  : 'hover:bg-purple-50',
              ]"
            >
              <div class="flex items-center space-x-3">
                <img :src="net.icon" :alt="net.label" class="w-8 h-8" />
                <span class="font-semibold">{{ net.label }}</span>
              </div>
              <img src="@/assets/image/Arrow.gif" class="w-8" alt="" />
            </div>
          </div>

          <!-- ÉTAPE 2 : Numéro à débiter -->
          <div v-if="step === 2" class="space-y-4">
            <div
              class="flex items-center justify-between p-3 border border-purple-600 border-dashed rounded-lg cursor-pointer bg-purple-50 group"
              @click="useMyNumber('debitNumber')"
            >
              <div class="flex items-center space-x-3">
                <img
                  src="../assets/image/micah-1752165580512.svg"
                  alt="Mon numéro"
                  class="w-10 h-10 duration-700 border-2 border-purple-600 border-dashed rounded-full group-hover:scale-125"
                />
                <div>
                  <div class="font-semibold text-purple-700">Utiliser mon numéro</div>
                  <div class="text-xs text-gray-600">
                    {{ form.debitNumber || '+225 07 78 34 34 34' }}
                  </div>
                </div>
              </div>
            </div>

            <label class="block mb-2 font-medium">Numéro à débiter</label>
            <input
              type="tel"
              v-model="form.debitNumber"
              class="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400"
              placeholder="Utiliser un autre numéro"
              maxlength="10"
              @input="validateNumber('debitNumber')"
            />
            <p v-if="errors.debitNumber" class="mt-1 text-xs text-red-600">
              {{ errors.debitNumber }}
            </p>

            <button
              class="w-full py-2 mt-6 text-white transition bg-purple-800 rounded hover:bg-purple-700 disabled:opacity-50"
              :disabled="!isValidNumber(form.debitNumber)"
              @click="nextStep"
            >
              Suivant
            </button>
          </div>

          <!-- ÉTAPE 3 : Choix réseau destinataire -->
          <div v-if="step === 3" class="flex flex-col space-y-4">
            <div
              v-for="net in networks"
              :key="net.value"
              @click="chooseToNetwork(net.value)"
              :class="[
                'flex items-center space-x-3 justify-between p-3 border rounded-lg cursor-pointer transition',
                form.toNetwork === net.value
                  ? 'border-purple-600 bg-purple-50'
                  : 'hover:bg-purple-50',
              ]"
            >
              <div class="flex items-center space-x-3">
                <img :src="net.icon" :alt="net.label" class="w-8 h-8" />
                <span class="font-semibold">{{ net.label }}</span>
              </div>
              <img src="@/assets/image/Arrow.gif" class="w-8" alt="" />
            </div>
          </div>

          <!-- ÉTAPE 4 : Numéro bénéficiaire -->
          <div v-if="step === 4" class="space-y-4">
            <div
              class="flex items-center justify-between p-3 border-2 border-purple-600 border-dashed rounded-lg cursor-pointer group bg-purple-50"
              @click="useMyNumber('receiverNumber')"
            >
              <div class="flex items-center space-x-3">
                <img
                  src="../assets/image/micah-1752165580512.svg"
                  alt="Mon numéro"
                  class="w-10 h-10 duration-700 border-2 border-purple-600 border-dashed rounded-full group-hover:scale-125"
                />
                <div>
                  <div class="font-semibold text-purple-700">Utiliser mon numéro</div>
                  <div class="text-sm text-gray-600">
                    {{ form.receiverNumber || '07 78 34 34 34' }}
                  </div>
                </div>
              </div>
            </div>

            <label class="block mb-2 font-medium">Numéro du bénéficiaire</label>
            <input
              type="tel"
              v-model="form.receiverNumber"
              class="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400"
              placeholder="Utiliser un autre numéro"
              maxlength="10"
              @input="validateNumber('receiverNumber')"
            />
            <p v-if="errors.receiverNumber" class="mt-1 text-xs text-red-600">
              {{ errors.receiverNumber }}
            </p>

            <button
              class="w-full py-2 mt-6 text-white transition bg-purple-800 rounded hover:bg-purple-700 disabled:opacity-50"
              :disabled="!isValidNumber(form.receiverNumber)"
              @click="nextStep"
            >
              Suivant
            </button>
          </div>

          <!-- ÉTAPE 5 : Montant à envoyer -->
          <div v-if="step === 5" class="space-y-4">
            <label class="block mb-2 font-medium">Montant à envoyer (doit finir par 0)</label>
            <div class="relative">
              <input
                type="number"
                v-model.number="form.amount"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400 pr-14"
                placeholder="Ex: 1000"
                min="250"
                max="300000"
                step="10"
              />
              <span class="absolute text-gray-500 top-2 right-3">FCFA</span>
            </div>

            <div class="flex items-center mt-3 space-x-2">
              <input type="checkbox" v-model="form.senderPaysFees" id="payer-frais" />
              <label for="payer-frais">Je paie les frais (1%)</label>
            </div>

            <div class="mt-2 text-xs text-gray-600">
              <p>Nombre de chiffres du numéro : {{ form.receiverNumber.length }}</p>
              <p>Montant minimum : 250 FCFA</p>
              <p>Montant maximum : 300 000 FCFA</p>
            </div>

            <button
              class="w-full py-2 mt-6 text-white transition bg-purple-800 rounded hover:bg-purple-700 disabled:opacity-50"
              :disabled="!canProceedAmount"
              @click="nextStep"
            >
              Suivant
            </button>
          </div>

          <!-- MODAL RÉCAPITULATIF -->
          <div v-if="step === 6" class="text-sm">
            <h3
              class="flex items-center justify-center mb-4 space-x-6 text-lg font-bold text-center"
            >
              <div class="flex items-center space-x-2">
                <img
                  :src="getIcon(form.fromNetwork)"
                  :alt="getLabel(form.fromNetwork)"
                  class="w-8 h-8"
                />
                <span class="font-semibold text-purple-700">{{ getLabel(form.fromNetwork) }}</span>
              </div>
              <span class="text-gray-400">→</span>
              <div class="flex items-center space-x-2">
                <img
                  :src="getIcon(form.toNetwork)"
                  :alt="getLabel(form.toNetwork)"
                  class="w-8 h-8"
                />
                <span class="font-semibold text-purple-700">{{ getLabel(form.toNetwork) }}</span>
              </div>
            </h3>

            <p class="mb-2">
              Vous envoyez au <strong>{{ form.receiverNumber }}</strong>
            </p>
            <p class="mb-4">
              Depuis le <strong>{{ form.debitNumber }}</strong>
            </p>

            <label class="block mb-2 font-medium">Combien envoyer-vous ?</label>
            <div class="relative mb-4">
              <input
                type="number"
                v-model.number="form.amount"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400 pr-14"
                min="250"
                max="300000"
                step="10"
                @input="validateAmount"
              />
              <span class="absolute text-gray-500 top-2 right-3">FCFA</span>
            </div>

            <div class="flex items-center mb-4 space-x-2">
              <input type="checkbox" v-model="form.senderPaysFees" id="payer-frais-recap" />
              <label for="payer-frais-recap">Je paie les frais (1%)</label>
            </div>

            <div class="mb-4 text-xs text-gray-600">
              <p>Nombre de chiffres du numéro bénéficiaire : {{ form.receiverNumber.length }}</p>
              <p>Montant minimum : 250 FCFA</p>
              <p>Montant maximum : 300 000 FCFA</p>
            </div>

            <p class="mb-2 font-semibold">
              Votre correspondant recevra :
              <span class="text-green-600">{{ amountReceived }} FCFA</span>
            </p>
            <p class="mb-6 font-semibold">
              Montant total débité : <span class="text-red-600">{{ totalDebited }} FCFA</span>
            </p>

            <button
              class="w-full py-2 mt-4 text-white transition bg-green-600 rounded hover:bg-green-700 disabled:opacity-50"
              :disabled="!canProceedAmount"
              @click="sendMoney"
            >
              Envoyer l'argent
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Loader from '@/components/Loader.vue'
const showTransfer = ref(false)
const step = ref(1)

const form = ref({
  fromNetwork: '',
  debitNumber: '',
  toNetwork: '',
  receiverNumber: '',
  amount: null,
  senderPaysFees: true,
})

const errors = ref({
  debitNumber: '',
  receiverNumber: '',
})

// Import des icônes réseaux
import WaveIcon from '@/assets/image/Wave.svg'
import OrangeIcon from '@/assets/image/Orange.svg'
import MtnIcon from '@/assets/image/Mtn.svg'
import MoovIcon from '@/assets/image/Moov.svg'

const networks = [
  { value: 'wave', label: 'Wave', icon: WaveIcon },
  { value: 'orange', label: 'Orange', icon: OrangeIcon },
  { value: 'mtn', label: 'MTN', icon: MtnIcon },
  { value: 'moov', label: 'Moov', icon: MoovIcon },
]

const stepTitles = [
  'Depuis quel réseau débiter-vous ?',
  'Quel est le numéro à débiter ?',
  "Vers quel réseau envoyer-vous de l'argent ?",
  'Quel est le bénéficiaire',
  'Montant à envoyer',
  'Récapitulatif',
]

function openTransfer() {
  showTransfer.value = true
  step.value = 1
  resetForm()
}

function resetForm() {
  form.value = {
    fromNetwork: '',
    debitNumber: '',
    toNetwork: '',
    receiverNumber: '',
    amount: null,
    senderPaysFees: true,
  }
  errors.value = {
    debitNumber: '',
    receiverNumber: '',
  }
}

function resetTransfer() {
  showTransfer.value = false
  step.value = 1
  resetForm()
}

function nextStep() {
  if (step.value < 6) {
    step.value++
  }
}

function prevStep() {
  if (step.value > 1) {
    step.value--
  }
}

function chooseFromNetwork(val) {
  form.value.fromNetwork = val
  nextStep()
}

function chooseToNetwork(val) {
  form.value.toNetwork = val
  nextStep()
}

function getLabel(val) {
  const found = networks.find((n) => n.value === val)
  return found ? found.label : ''
}

function getIcon(val) {
  const found = networks.find((n) => n.value === val)
  return found ? found.icon : ''
}

// Remplit un numéro fixe (exemple)
function useMyNumber(field) {
  const myNumber = '0778146910' // numéro à 10 chiffres sans espaces
  form.value[field] = myNumber
  validateNumber(field)
}

// Validation numéro à 10 chiffres et commençant par 07, 05 ou 01
function validateNumber(field) {
  const val = form.value[field]
  if (!val) {
    errors.value[field] = 'Le numéro est requis.'
    return false
  }
  const digitsOnly = val.replace(/\D/g, '')
  if (digitsOnly.length !== 10) {
    errors.value[field] = 'Le numéro doit contenir exactement 10 chiffres.'
    return false
  }
  if (!/^0(7|5|1)/.test(digitsOnly)) {
    errors.value[field] = 'Le numéro doit commencer par 07, 05 ou 01.'
    return false
  }
  errors.value[field] = ''
  // On remplace la valeur par les chiffres uniquement pour uniformité
  form.value[field] = digitsOnly
  return true
}

function isValidNumber(val) {
  if (!val) return false
  const digitsOnly = val.replace(/\D/g, '')
  return digitsOnly.length === 10 && /^0(7|5|1)/.test(digitsOnly)
}

// Validation montant (doit finir par 0, entre 250 et 300000)
function validateAmount() {
  if (!form.value.amount) return false
  if (form.value.amount < 250 || form.value.amount > 300000) return false
  if (form.value.amount % 10 !== 0) return false
  return true
}

// Frais recalculés à 1%
const fees = computed(() => {
  if (!form.value.amount) return 0
  if (!validateAmount()) return 0
  return Math.ceil(form.value.amount * 0.01) // 1%
})

const amountReceived = computed(() => {
  if (!form.value.amount) return 0
  return form.value.senderPaysFees ? form.value.amount : form.value.amount - fees.value
})

const totalDebited = computed(() => {
  if (!form.value.amount) return 0
  return form.value.senderPaysFees ? form.value.amount + fees.value : form.value.amount
})

const canProceedAmount = computed(() => {
  return (
    validateAmount() &&
    isValidNumber(form.value.debitNumber) &&
    isValidNumber(form.value.receiverNumber)
  )
})

function sendMoney() {
  alert('Argent envoyé avec succès ! ✅')
  resetTransfer()
}
</script>

<style scoped>
/* Animation slideUp pour le modal */
@keyframes slideUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-slideUp {
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
