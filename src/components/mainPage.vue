<template>
  <main class="">
    <nav class="flex items-center py-10 justify-between">
      <ul class="flex justify-around text-sm w-6/12">
        <li class="border-r-[1px] border-[#555353] pr-5">
          <a href="#"><img src="../image 1.png" alt="" /></a>
        </li>
        <li><a href="#">How we hire</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">How it works</a></li>
      </ul>

      <div class="flex items-center">
        <a href="#" class="mr-4">Apply as a developer</a>
        <button class="btn-primary">Hire Top Talent</button>
      </div>
    </nav>
    <img src="../hero-image.png" alt="" class="absolute top-0 right-0 -z-10" />

    <div class="h-96"></div>

    <!-- This is Fist and Inter Section -->
    <section class="">
      <h1 class="text-7xl w-10/12 font-bold">
        Hire the Best
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-[#017DE3] to-[#47B492]"
          >Remote Developers</span
        >
        from $25/hour
      </h1>
      <p class="my-5 text-xl text-[#AAAAAA]">
        The first week of your hire is 100% Free. No question asked
      </p>
      <div class="flex items-center w-full">
        <button class="flex btn-primary">
          <span class="">Hire top Developer</span>

          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4299 6.42993L20.4999 12.4999L14.4299 18.5699"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 12.5H20.33"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          class="flex justify-center items-center border-dashed border-2 border-white rounded-full w-14 h-14 ml-5"
        >
          <i class="">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7.99992V5.32992C1 2.01992 3.35 0.659923 6.22 2.31992L8.53 3.65992L10.84 4.99992C13.71 6.65992 13.71 9.36992 10.84 11.0299L8.53 12.3699L6.22 13.7099C3.35 15.3399 1 13.9899 1 10.6699V7.99992Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </i>
        </div>
      </div>
    </section>

    <div class="h-24"></div>

    <!-- This is Companys Brands Section -->
    <div class="flex justify-center mb-10">
      <p>Trusted Partners</p>
    </div>
    <div class="border-y-2 border-gray-600">
      <ul class="flex justify-around items-center py-5">
        <li>
          <a href="#"><img src="../assets/barand-images/image 2.png" alt="" /></a>
        </li>
        <li>
          <a href="#"><img src="../assets/barand-images/image 3.png" alt="" /></a>
        </li>
        <li>
          <a href="#"><img src="../assets/barand-images/image 4.png" alt="" /></a>
        </li>
        <li>
          <a href="#"><img src="../assets/barand-images/image 5.png" alt="" /></a>
        </li>
        <li>
          <a href="#"><img src="../assets/barand-images/image 6.png" alt="" /></a>
        </li>
      </ul>
    </div>
    <div class="h-32"></div>
  </main>
</template>

<script>
export default {
  name: "mainPage",
};
</script>
