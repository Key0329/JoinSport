<template>
  <footer
    class="mt-20 border-t-4 border-primary-01 bg-primary-03 py-8 md:py-10"
  >
    <div class="container">
      <div
        class="flex flex-col items-center gap-4 md:flex-row md:items-stretch md:justify-between"
      >
        <div class="flex flex-col items-center lg:flex-row">
          <h2 class="mb-4 md:mr-[134px] lg:mb-0">
            <a
              class="h-12 w-[196px] overflow-hidden whitespace-nowrap bg-[url('./images/logo/JoinSport03.png')] bg-cover bg-no-repeat indent-[101%] hover:opacity-75"
              href="#"
              >Join Sport 揪運動</a
            >
          </h2>
          <div class="flex gap-10 text-left xs:gap-[72px]">
            <div>
              <p class="text-lg text-[#6F6F6F] md:mb-4">帳號</p>
              <ul>
                <li>
                  <router-link
                    class="leading-8 hover:text-primary-01 focus:text-secondary-blue"
                    to=""
                    >註冊</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="leading-8 hover:text-primary-01 focus:text-secondary-blue"
                    to=""
                    >登入</router-link
                  >
                </li>
              </ul>
            </div>
            <div>
              <p class="text-lg text-[#6F6F6F] md:mb-4">揪團</p>
              <ul>
                <li>
                  <router-link
                    class="leading-8 hover:text-primary-01 focus:text-secondary-blue"
                    to=""
                    >參加揪團</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="leading-8 hover:text-primary-01 focus:text-secondary-blue"
                    to=""
                    >當主揪開團</router-link
                  >
                </li>
              </ul>
            </div>
            <div>
              <p class="text-lg text-[#6F6F6F] md:mb-4">探索</p>
              <ul>
                <li>
                  <router-link
                    class="leading-8 hover:text-primary-01 focus:text-secondary-blue"
                    to=""
                    >熱門群組</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="leading-8 hover:text-primary-01 focus:text-secondary-blue"
                    to=""
                    >城市搜尋</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- icon -->
        <div>
          <div class="flex h-full flex-col justify-evenly lg:justify-between">
            <ul class="mb-4 flex gap-2 xs:gap-6 md:gap-10">
              <li>
                <a
                  href="#"
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-90"
                  ><img
                    class=""
                    src="../../assets/images/icon/Vector-1.png"
                    alt=""
                /></a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-90"
                  ><img
                    class=""
                    src="../../assets/images/icon/twitter.png"
                    alt=""
                /></a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-90"
                  ><img
                    class=""
                    src="../../assets/images/icon/Vector-2.png"
                    alt=""
                /></a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-90"
                  ><img
                    class=""
                    src="../../assets/images/icon/envelope.png"
                    alt=""
                /></a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-90"
                  ><img
                    class=""
                    src="../../assets/images/icon/Vector.png"
                    alt=""
                /></a>
              </li>
            </ul>
            <p class="text-center text-xs text-[#3D3D3D] md:text-end">
              Copyright© Join Sport All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
