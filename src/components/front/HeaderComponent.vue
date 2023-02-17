<template>
  <header>
    <div class="container">
      <nav class="flex justify-between py-3 md:py-4">
        <h2>
          <a
            class="h-10 w-[163px] overflow-hidden whitespace-nowrap bg-[url('./images/logo/JoinSport01.png')] bg-cover bg-no-repeat indent-[101%] hover:opacity-75"
            href="#"
            >Join Sport 揪運動</a
          >
        </h2>
        <ul class="hidden items-center gap-10 md:flex">
          <li>
            <router-link
              class="hover:text-primary-01 focus:text-secondary-blue"
              to="groupList"
              >揪團列表</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-primary-01 focus:text-secondary-blue"
              to="login"
              >登入 / 註冊</router-link
            >
          </li>
        </ul>
        <ul class="hidden items-center gap-10 md:flex md:hidden">
          <li>
            <router-link
              class="hover:text-primary-01 focus:text-secondary-blue"
              to=""
              >揪團列表</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-primary-01 focus:text-secondary-blue"
              to="login"
              >我的揪團</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-primary-01 focus:text-secondary-blue"
              to="login"
              >會員資料</router-link
            >
          </li>
          <li>
            <img
              src="../../assets/images/avatar/avatar01.png"
              alt="member-avatar"
              class="h-10 w-10 rounded-full object-cover"
            />
          </li>
        </ul>
        <a href="#" class="flex items-center md:hidden"
          ><span class="material-icons"> menu </span></a
        >
      </nav>
    </div>
  </header>
</template>
