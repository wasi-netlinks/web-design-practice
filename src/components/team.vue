<template>
  <main class="py-32">
    <!-- This is Team Section -->
    <section class="mt-10">
      <h1 class="text-center md:text-5xl text-3xl font-bold">
        Here's a Few Micro1 <br />
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-[#337EFF] to-[#33FFE7]"
          >Certified Developer</span
        >
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-1 mt-20">
        <div class="person">
          <img src="../assets/person-images/1.png" alt="" />
          <div class="person-content flex flex-col text-center">
            <div class="flex justify-center mt-10">
              <h1>Jack James</h1>
              <img src="../assets/official-icon.svg" alt="" />
            </div>
            <div>
              <h2 class="text-[#AAAAAA]">Sr. Software Engineer</h2>
            </div>
          </div>
        </div>

        <div class="person">
          <img src="../assets/person-images/2.png" alt="" />
          <div class="person-content flex flex-col text-center">
            <div class="flex justify-center mt-10">
              <h1>Layla Robert</h1>
              <img src="../assets/official-icon.svg" alt="" class="w-4" />
            </div>
            <h2 class="text-[#AAAAAA]">UI/UX Developer</h2>
          </div>
        </div>

        <div class="person">
          <img src="../assets/person-images/3.png" alt="" />
          <div class="person-content flex flex-col text-center">
            <div class="flex justify-center mt-10">
              <h1>David Mark</h1>
              <img src="../assets/official-icon.svg" alt="" />
            </div>
            <h2 class="text-[#AAAAAA]">Sr.Software Engineer</h2>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "team",
};
</script>
