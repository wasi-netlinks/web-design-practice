<template>
  <main class="my-20">
    <div class="wrapper md:grid md:grid-cols-2 h-auto bg-[#272A37] rounded-lg w-full">
      <form class="mx-10 my-20">
        <div class="heading mb-20">
          <p class="uppercase text-ragister-gray font-bold">start for free</p>
          <h1 class="text-4xl font-bold my-5">
            You Can Join Us<span class="text-sky-400 text-4xl">.</span>
          </h1>
          <p class="text-ragister-gray font-bold">
            Already A Member?<a href="#" class="text-blue-600"> Login In</a>
          </p>
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-1">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-medium font-medium text-gray-300 dark:text-gray-300"
              >First name</label
            >
            <input
              type="text"
              id="first_name"
              class="bg-[#323644] border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required=""
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-medium font-medium text-gray-300 dark:text-gray-300"
              >Last name</label
            >
            <input
              type="text"
              id="last_name"
              class="bg-[#323644] border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required=""
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-medium font-medium text-gray-300 dark:text-gray-300"
              >Phone number</label
            >
            <input
              type="tel"
              id="phone"
              class="bg-[#323644] border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required=""
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-medium font-medium text-gray-300 dark:text-gray-300"
            >Email address</label
          >
          <input
            type="email"
            id="email"
            class="bg-[#323644] border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required=""
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-medium font-medium text-gray-300 dark:text-gray-300"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="bg-[#323644] border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required=""
          />
        </div>

        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value="[#323644]"
              class="w-4 h-4 bg-gra3-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 darkfullgra8/120 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <label
            for="remember"
            class="ml-2 text-sm fonmediummedium text-gray-9gray-300text-gray-400"
            >I agree with the
            <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
              >terms and conditions</a
            >.</label
          >
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div class="w-full">
        <img
          src="../assets/images/4.jpg"
          alt=""
          class="hidden md:block h-full object-cover opacity-50 rounded-tr-lg rounded-br-lg"
        />
      </div>
    </div>
  </main>
</template>
<script>
import Navbar from "../components/navbar.vue";
export default { name: "register", components: { Navbar } };
</script>
