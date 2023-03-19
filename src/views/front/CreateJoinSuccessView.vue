<script>
export default {
  name: 'CreateJoinSuccessView',
};
</script>

<template>
  <section class="py-10 md:py-[100px]">
    <div class="container">
      <div class="grid md:grid-cols-12">
        <div class="col-span-1 col-end-4 flex items-center">
          <img
            src="../../assets/images/icon/icons8-confetti.png"
            alt="success"
          />
        </div>
        <div class="col-span-4 col-end-9">
          <div class="flex flex-col items-center">
            <h1 class="mb-6 text-xl md:text-4xl">開團成功！</h1>
            <h2 class="mb-10 text-lg md:text-3xl">所有人將可以看到您的揪團</h2>
            <p class="mb-10 text-center text-lg">
              您可以在會員主頁繼續編輯您的揪團<br />
              詳細的內容與照片能幫助您的揪團找到最適合的團員
            </p>
            <router-link to="/JoinList/Hot/1">
              <PButton
                type="button"
                label="回到揪團列表"
                icon="pi pi-home"
                iconPos="right"
              />
            </router-link>
          </div>
        </div>
        <div class="col-span-1 col-end-11 flex items-center">
          <img
            src="../../assets/images/icon/icons8-confetti.png"
            alt="success"
          />
        </div>
      </div>
    </div>
  </section>
</template>
