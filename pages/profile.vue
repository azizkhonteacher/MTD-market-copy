<template>
  <div class="profile">
    <div class="container">
      <!-- PROFILE NAV START -->
      <div class="profile-nav">
        <div class="profile-item" @click="logOut()">
          <div class="profile-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H15"
                stroke="#909090"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 17L3 12L8 7"
                stroke="#909090"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 12H15"
                stroke="#909090"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="profile-info">
            <h4>Logout</h4>
          </div>
        </div>
      </div>
      <!-- PROFILE NAV END -->

      <!-- PROFILE MAIN START -->
      <div class="profile-main">
        <!-- USER INFO 1  user information  -->
        <div class="user-info">
          <div class="user-info-header">
            <div class="profile-item">
              <div class="profile-icon">
                <UserSvg />
              </div>
              <div class="profile-info">
                <h4>Personal Information</h4>
              </div>
            </div>
            <button
              @click="(store.overlay = true), (store.updateUserInfo = true)"
            >
              Change
            </button>
          </div>

          <div class="user-info-main">
            <h4>
              {{
                store.userInfo
                  ? store.userInfo?.lastname + " " + store.userInfo?.firstname
                  : "Name"
              }}
            </h4>
            <h4>
              Phone Number: +{{
                store.userInfo ? store.userInfo?.username : ""
              }}
            </h4>
          </div>
        </div>

        <!-- USER INFO 2  user orders -->
        <div class="user-info">
          <div class="user-info-header">
            <div class="profile-item">
              <div class="profile-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="#909090"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 2V8H20"
                    stroke="#909090"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 13H8"
                    stroke="#909090"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 17H8"
                    stroke="#909090"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 9H9H8"
                    stroke="#909090"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="profile-info">
                <h4>My orders</h4>
              </div>
            </div>
            <button :class="{'activeOrderBtn': store.userCurrent}" class="mr-4" @click="store.userCurrent = true">Current</button>

            <button :class="{'activeOrderBtn': !store.userCurrent}" @click="store.userCurrent = false">All</button>
          </div>

          <!-- current -->
          <div class="user-info-main cards" v-if="store.userCurrent">
            <!--        CARD START -->
            <div class="user-info">
              <div class="user-info-header">
                <div class="profile-item">
                  <h4>#342</h4>
                </div>
              </div>
              <div class="user-info-main">
                <ul>
                  <li>
                    <span>Status</span>
                    <span class="value">Kutoish xolatida</span>
                  </li>
                  <li>
                    <span>Delivery Date:</span>
                    <span class="value"></span>
                  </li>
                  <li>
                    <span>Recipient</span>
                    <span class="value">Azizxon Esonov</span>
                  </li>
                  <li>
                    <span>Delivery Address</span>
                    <span class="value"
                      >Qoraqalpog‘iston RespublikasiAmudaryo tumani
                    </span>
                  </li>
                  <div class="user-info-order-images">
                    <img src="https://picsum.photos/70" alt="img" />
                  </div>
                  <li>
                    <span>Order Amount:</span>
                    <span class="value">1 220 000 so'm </span>
                  </li>
                  <button class="mt-2">Qayta to'lov qilish</button>
                </ul>
              </div>
            </div>
            <!--        CARD END -->
          </div>

          <!-- all -->
          <div class="user-info-main cards" v-if="!store.userCurrent">
            <!--        CARD START -->
            <div class="user-info" v-if="false">
              <div class="user-info-header">
                <div class="profile-item">
                  <h4>#342</h4>
                </div>
              </div>
              <div class="user-info-main">
                <ul>
                  <li>
                    <span>Status</span>
                    <span class="value">Kutoish xolatida</span>
                  </li>
                  <li>
                    <span>Delivery Date:</span>
                    <span class="value"></span>
                  </li>
                  <li>
                    <span>Recipient</span>
                    <span class="value">Azizxon Esonov</span>
                  </li>
                  <li>
                    <span>Delivery Address</span>
                    <span class="value"
                      >Qoraqalpog‘iston RespublikasiAmudaryo tumani
                    </span>
                  </li>
                  <div class="user-info-order-images">
                    <img src="https://picsum.photos/70" alt="img" />
                  </div>
                  <li>
                    <span>Order Amount:</span>
                    <span class="value">1 220 000 so'm </span>
                  </li>
                  <button class="mt-2">Qayta to'lov qilish</button>
                </ul>
              </div>
            </div>
            <!--        CARD END -->
          </div>
        </div>
      </div>
      <!-- PROFILE MAIN END -->
    </div>
  </div>
</template>

<script setup>
// import's
import UserSvg from "~/components/icons/UserSvg.vue";
import { useStore } from "~/store/store";
// varible's
const store = useStore();
// function
async function logOut() {
  localStorage.clear();
  window.location = "/";
}
</script>

<style lang="scss" scoped></style>

<!-- 
    current va all ichidagi cardlar ichiga ma'limotlar qayerdan keladi
-->
