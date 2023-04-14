<template>
  <div class="container">
    <h2 class="mb-8 text-center text-3xl md:mb-[72px] md:text-4xl">
      在<span class="text-primary-01">揪運動</span>可以做什麼
    </h2>
    <div class="mb-8 grid grid-cols-3 gap-8 md:mb-[72px]">
      <div class="col-span-3 md:col-span-1">
        <img
          class="mx-auto mb-2 h-40"
          src="../../assets/images/feature/feature01.png"
          alt="feature01"
        />
        <h3
          class="mb-4 text-center text-[20px] text-primary-01 md:mb-2 md:text-xl"
        >
          加入揪團
        </h3>

        <p class="mx-auto w-[296px]">
          馬上加入其他人已經發起的揪團，您可以看到有哪些揪團正在進行，選擇加入您感興趣的揪團。
        </p>
      </div>
      <div
        class="relative col-span-3 md:col-span-1 md:before:absolute md:before:-right-3 md:before:top-1/2 md:before:h-[184px] md:before:w-[1px] md:before:-translate-y-1/2 md:before:bg-primary-01 md:before:content-[''] md:after:absolute md:after:-left-3 md:after:top-1/2 md:after:h-[184px] md:after:w-[1px] md:after:-translate-y-1/2 md:after:bg-primary-01 md:after:content-['']"
      >
        <img
          class="mx-auto mb-2 h-40"
          src="../../assets/images/feature/feature02.png"
          alt="feature02"
        />
        <h3
          class="mb-4 text-center text-[20px] text-primary-01 md:mb-2 md:text-xl"
        >
          當主揪自己開團
        </h3>
        <p class="mx-auto w-[296px] text-center">
          找不到想要的團嗎？您可以自己開團！自己選擇主題、活動時間、地點、參與人數，然後發起您自己的揪團
        </p>
      </div>
      <div class="col-span-3 md:col-span-1">
        <img
          class="mx-auto mb-2 h-40"
          src="../../assets/images/feature/feature03.png"
          alt="feature03"
        />
        <h3
          class="mb-4 text-center text-[20px] text-primary-01 md:mb-2 md:text-xl"
        >
          加入主題群組
        </h3>
        <p class="mx-auto w-[296px]">
          除了加入揪團，您還可以加入運動群組，例如：戶外運動、周末羽球、全台潛水...加入群組，隨時與同好交流、分享心得！
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <router-link
        class="btn-primary btn p-ripple mx-auto w-fit"
        v-ripple
        to="/register"
        >加入 Join Sport</router-link
      >
    </div>
  </div>
</template>
