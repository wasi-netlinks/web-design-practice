<template>
  <main class="cardSection">
    <section class="">
      <h1 class="md:text-6xl text-3xl font-bold leading-tight">
        Hiring Great
        <span
          class="text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#0C86D7] to-[#46B493]"
        >
          Remote <br />Developers
        </span>
        is Hard
      </h1>

      <div class="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-1 pt-14">
        <div class="card">
          <img src="../assets/vector-images/User.png" alt="" />
          <p class="mt-10 w-[212px]">
            Lots of time spent on finding great talent globally
          </p>
        </div>
        <div class="card">
          <img src="../assets/vector-images/User1.png" alt="" />
          <p class="mt-10 w-[255px]">
            Hiring from different countries in a compliant manner
          </p>
        </div>
        <div class="card">
          <img src="../assets/vector-images/User2.png" alt="" />
          <p class="mt-10 w-[255px]">Providing the necessary benefits & pay</p>
        </div>
      </div>

      <div class="h-24"></div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div
            class="w-[2px] h-40 bg-gradient-to-b from-[#33FFE7] to-[#337EFF40] ml-40"
          ></div>
          <div class="my-5">
            <p
              class="text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-white to-green-500 ml-10 w-14;"
            >
              We Make
            </p>
            <p
              class="text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-white to-green-500 ml-10 w-14;"
            >
              it Easy
            </p>
          </div>
          <div
            class="w-[2px] h-20 font-bold bg-gradient-to-b from-[#337EFF40] to-[#33FFE7] ml-40"
          ></div>
        </div>

        <div class="text-card bg-cover bg-[url('assets/text-cards-images/1.svg')]">
          <h2 class="pb-20">01.</h2>
          <h1>Best Talent</h1>
          <h3 class="leading-8">
            Each developer at micro1 goes through a series of tests and interviews before
            becoming micro1 certified. You also get 1 week free to test the developerout
            for yourself.
          </h3>
        </div>

        <div class="text-card bg-cover bg-[url('assets/text-cards-images/2.svg')]">
          <h1>Don't Worry about Legal Issues</h1>
          <h3 class="leading-8">
            We Hire the developer directly and you hire us. This means you won't have to
            worry about creating an entity in the country of hire and you don't have to
            worry about the local laws. We take care of all this for you.
          </h3>
          <h2 class="mt-10">02.</h2>
        </div>

        <div class="text-card bg-cover bg-[url('assets/text-cards-images/3.svg')]">
          <h1>We Take Care of Benefits</h1>
          <h3 class="leading-8">
            We Hire the developer directly and you hire us. This means you won't have to
            worry about creating an entity in the country of hire and you don't have to
            worry about the local laws. We take care of all this for you.
          </h3>
          <h2 class="mt-24">03.</h2>
        </div>

        <div class="text-card bg-cover bg-[url('assets/text-cards-images/4.svg')]">
          <h2 class="pb-10">04.</h2>
          <h1>Fully Dedicated in Your Company</h1>
          <h3 class="leading-8">
            Once you choose a developer, they will be in direct contact with you and fully
            dedicated in your company. Whether you want them o join your slack, hope on
            meetings, or anything else, it's totally up to you. We take care of payroll
            and everything else.
          </h3>
        </div>
        <div
          class="w-[2px] h-full bg-gradient-to-b from-[#33FFE7] to-[#337EFF40] ml-32"
        ></div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "cardSection",
};
</script>
