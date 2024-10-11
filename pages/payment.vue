<template>
  <div class="payment">
    <div class="container">
      <!--        PAYMENT LEFT     -->
      <div class="payment-left">
        <h2 class="payment-title">{{ $t("xarid") }}</h2>

        <h2 class="payment-subtitle">
          <span>1</span>
          {{ $t("yOrder") }}
        </h2>

        <!--    PRODUCT CARD -->
        <div class="payment-cards">
          <div
            class="payment-card"
            v-for="product in store.cart"
            :key="product"
          >
            <div class="payment-card-img">
              <img :src="product?.image" alt="img" />
            </div>

            <div class="payment-card-text-wrapper">
              <h4 class="title">{{ product?.title }}</h4>
              <h4>{{ product?.quantity }}</h4>
              <h3>{{ product?.priceFormat }}</h3>
            </div>
          </div>
        </div>
        <!--  -->

        <h2 class="payment-subtitle">
          <span>2</span>
          {{ $t("tUsul") }}
        </h2>

        <div class="payment-types">
          <!-- item-1 -->
          <div class="payment-types-item">
            <input type="radio" id="payme" name="payment" />
            <label for="payme">
              <span></span>
              <h4>{{ $t("tolov2") }}</h4>
              <img src="~/assets/images/payment/payme.png" alt="img" />
            </label>
          </div>

          <!-- item-2 -->
          <div class="payment-types-item">
            <input type="radio" id="moneyHome" name="payment" />
            <label for="moneyHome">
              <span></span>
              <h4>{{ $t("tolov3") }}</h4>
              <img src="~/assets/images/payment/money.png" alt="img" />
            </label>
          </div>

          <!-- item-3 -->
          <div class="payment-types-item">
            <input type="radio" id="card" name="payment" />
            <label for="card">
              <span></span>
              <h4>{{ $t("tolov5") }}</h4>
              <img src="~/assets/images/payment/karta.png" alt="img" />
            </label>
          </div>

          <!-- item-4 -->
          <div class="payment-types-item">
            <input type="radio" id="money" name="payment" />
            <label for="money">
              <span></span>
              <h4>{{ $t("tolov1") }}</h4>
              <img src="~/assets/images/payment/money.svg" alt="img" />
            </label>
          </div>

          <!-- item-5 -->
          <div class="payment-types-item">
            <input type="radio" id="cardHome" name="payment" />
            <label for="cardHome">
              <span></span>
              <h4>{{ $t("tolov2") }}</h4>
              <img src="~/assets/images/payment/cardHome.png" alt="img" />
            </label>
          </div>
        </div>

        <h2 class="payment-subtitle">
          <span>3</span>
          {{ $t("oUsul") }}
        </h2>

        <div class="payment-method-obtaing">
          <div class="payment-type-item" @click="store.paymentMethod = false">
            <input type="radio" id="delivery" name="method" />
            <label for="delivery"
              ><span></span>
              <h4>{{ $t("yBerish") }}</h4></label
            >
          </div>
          <div class="payment-type-item" @click="store.paymentMethod = true">
            <input type="radio" id="store" name="method" /><label for="store"
              ><span></span>
              <h4>{{ $t("dOlib") }}</h4></label
            >
          </div>
        </div>

        <!--      Yetkazib berish -->
        <div class="payment-method-obtaing-main" v-if="!store.paymentMethod">
          <h4 class="payment-method-subtitle">{{ $t("YBM") }}</h4>

          <!--      HUDUD    -->
          <div class="payment-method-selects">
            <div class="payment-method-select">
              <label
                id="listbox-label"
                class="block text-xl font-medium leading-6 text-gray-900"
                >{{ $t("VILOYAT") }}*</label
              >

              <!--    VILOYAT   -->
              <div class="relative mt-2">
                <button
                  @click="openViloyat = !openViloyat"
                  type="button"
                  class="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-label"
                >
                  <span class="flex items-center">
                    <span class="ml-3 block text-xl truncate">
                      {{ SelectedREgion }}
                    </span>
                  </span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
                  >
                    <deliverButoon />
                  </span>
                </button>
                <!---->
                <ul
                  v-if="openViloyat"
                  class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  tabindex="-1"
                  role="listbox"
                  aria-labelledby="listbox-label"
                  aria-activedescendant="listbox-option-3"
                >
                  <li
                    v-for="itemReg in region?.data"
                    :key="itemReg"
                    @click="Region(itemReg), (openViloyat = false)"
                    class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                    id="listbox-option-0"
                    role="option"
                  >
                    <div class="flex items-center">
                      <span class="font-normal text-xl ml-3 block truncate">
                        {{ itemReg?.name }}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="payment-method-select">
              <label
                id="listbox-label"
                class="block text-xl font-medium leading-6 text-gray-900"
                >{{ $t("SHAHAR") }}*</label
              >
              <!--    SHAHAR/TUMAN   -->
              <div class="relative mt-2">
                <button
                  @click="openShahar = !openShahar"
                  type="button"
                  class="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-label"
                >
                  <span class="flex items-center">
                    <span class="ml-3 block text-xl truncate">
                      {{ SelectedREgionDist }}
                    </span>
                  </span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
                  >
                    <deliverButoon />
                  </span>
                </button>
                <!---->
                <ul
                  v-if="openShahar"
                  class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  tabindex="-1"
                  role="listbox"
                  aria-labelledby="listbox-label"
                  aria-activedescendant="listbox-option-3"
                >
                  <li
                    v-for="itemRdis in regionDistricts?.data"
                    :key="itemRdis"
                    @click="(openShahar = false)"
                    class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                    id="listbox-option-0"
                    role="option"
                  >
                    <div class="flex items-center">
                      <span @click="RegionDistricts(itemRdis?.id)" class="font-normal text-xl ml-3 block truncate">
                        {{ itemRdis?.name }}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--  -->

          <div class="flex items-center gap-2" style="margin-bottom: 30px">
            <input
              id="deliveryHome"
              type="checkbox"
              v-model="store.paymentMethodCheck"
            />
            <label
              class="block text-xl font-medium leading-6 text-gray-900"
              for="deliveryHome"
            >
              {{ $t("UYB") }}
            </label>
          </div>

          <div class="payment-inputs" v-if="store.paymentMethodCheck">
            <div class="paymnet-input first">
              <label
                id="listbox-label"
                class="block text-xl font-medium leading-6 text-gray-900"
                >{{ $t("manzil") }}</label
              ><input
                required=""
                class="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset text-xl ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                type="text"
              />
            </div>
            <div class="paymnet-input">
              <label
                id="listbox-label"
                class="block text-xl font-medium leading-6 text-gray-900"
                >{{ $t("qavat") }}</label
              ><input
                class="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset text-xl ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                type="number"
              />
            </div>
          </div>
          <!---->
        </div>

        <!--        INPUT HOLATIGA KO'RA O'ZGARADI -->
        <!--      Do'kondan olib ketish -->
        <div class="payment-methood-locations" v-if="store.paymentMethod">
          <div
            class="relative flex gap-4 mt-6 location-card items-end justify-between text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full"
            style="display: flex"
            v-for="adress in storesAdress?.data"
            :key="adress"
          >
            <div class="p-6">
              <h5
                class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
              >
                {{ adress?.regionName }}
              </h5>
              <p
                class="block font-sans text-base antialiased font-light leading-relaxed text-xl"
              >
                {{ adress?.address }}
              </p>
              <p
                class="block font-sans text-base antialiased font-light leading-relaxed text-xl"
              >
                {{ adress?.work_time }}
              </p>
            </div>
            <div class="p-6 pt-0">
              <button
                class="whitespace-nowrap align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                {{ $t("olaman") }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--        PAYMENT RIGHT     -->
      <div class="payment-right">
        <h4 class="payment-right-title">{{ $t("yOrder") }}</h4>
        <div class="payment-right-item">
          <span
            >{{ $t("jami") }} {{ totalQuantity }}
            {{ $t("ta") + " " + $t("maxsulot") }}</span
          >
          <h4>{{ totalPrice }} so'm</h4>
        </div>
        <div class="payment-right-item" v-if="!store.paymentMethod">
          <span>{{ $t("yBerish") }}</span>
          <h4>20 000 so'm</h4>
        </div>
        <!---->
        <div class="payment-right-bottom-item">
          <span>{{ $t("bSumma") }}</span>
          <h4>{{ orderTotalPrice }} so'm</h4>
        </div>
        <button>{{ $t("xarid") }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
import buy from "~/services/buy";
import deliverButoon from "~/components/icons/deliverButoon.vue";
const store = useStore();
const deliveryFee = 20000;
const storesAdress = ref({});
const openViloyat = ref(false);
const openShahar = ref(false);
const region = ref({});
const regionDistricts = ref({});

const totalQuantity = computed(() => {
  return store.cart.reduce((total, item) => total + item.quantity, 0);
});

// maxsulotlarni umumiy narxi
const totalPrice = computed(() => {
  return store.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});

//  Agar yetkazib berish tanlangan bo'lsa, 20 000 qo'shiladi
const orderTotalPrice = computed(() => {
  let total = store.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!store.paymentMethod) {
    total += deliveryFee;
  }

  return total;
});

//fetch
// olib ketish punktlari
async function Stores() {
  const res = await buy.getStores(store.token);
  storesAdress.value = res;
}

let SelectedREgion = ref("");
let SelectedREgionDist = ref("");

// viloyat
async function Region(item) {
  const res = await buy.getRegion();

  if (item) {
    RegionDistricts(item.id);
    SelectedREgion.value = item.name;
  } else {
    RegionDistricts(res?.data[0].id);
    SelectedREgion.value = res.data[0].name;
  }
  region.value = res;
}

// shaharlar
async function RegionDistricts(id) {
  const res = await buy.getRegionDistricts(id);

  if(id){
    SelectedREgionDist.value = res?.data[id].name
  } else{
    SelectedREgionDist.value = res?.data[0].name
  }
  regionDistricts.value = res;
}

// function's
Stores();
Region();
</script>

<style lang="scss"></style>
