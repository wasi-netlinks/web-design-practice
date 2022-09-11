<template>
  <div>
    <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container md:flex md:justify-between items-center mx-auto">
        <div class="flex justify-between">
          <div href="https://flowbite.com/" class="flex items-center">
            <router-link to="/" class="border-r-[1px] border-[#555353] pr-5"
              ><img src="../image 1.png" alt="yes"
            /></router-link>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-1 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div class="hidden w-full md:flex justify-between" id="navbar-default">
          <ul
            class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
          >
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 duration-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >How we hire</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 duration-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Pricing</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 duration-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >How it work</a
              >
            </li>
          </ul>
          <div class="flex flex-wrap justify-center items-center md:text-sm mt-3 md:mt-0">
            <a href="#" class="mr-4">Apply as a developer</a>
            <router-link to="/register" class="btn-primary">Hire Top Talent</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import HomeVue from "./Home.vue";
export default {
  name: "navbar",
  data() {},
  methods: {
    Menu(e) {
      e.name === "menu" ? (e.name = "close") : (e.name = "menu");
      console.log("clicked");
    },
  },
};
</script>

<!-- <header class="md:flex md:items-center md:justify-between p-4 pb-0 md:pb-4">

  <nav class="md:flex md:justify-between w-full text-center">
    <ul class="md:flex md:items-center">
      
      <div class="flex items-center md:mb-0">
        <router-link to="/" class="border-r-[1px] border-[#555353] pr-5"
          ><img src="../image 1.png" alt="yes"
        /></router-link>
      </div>
      >
      <li class="md:ml-4 my-2 md:px-1">
        <a
          class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          href="#"
        >
          How we hire
        </a>
      </li>
      <li class="md:ml-4 my-2 px-1">
        <a
          class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          href="#"
        >
          Pricing
        </a>
      </li>
      <li class="md:ml-4 my-2 px-1">
        <a
          class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          href="#"
        >
          How it works
        </a>
      </li>
    </ul>
    <div class="flex flex-wrap justify-center items-center md:text-sm">
      <a href="#" class="mr-4">Apply as a developer</a>
      <router-link to="/register" class="btn-primary">Hire Top Talent</router-link>
    </div>
  </nav>

  
</header> -->
