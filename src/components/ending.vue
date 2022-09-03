<template>
  <main class="">
    <!-- Ts is ending Section -->
    <section>
      <div class="tecSection flex w-full">
        <div class="tecFirstPart w-7/12">
          <h1 class="text-5xl font-bold mb-3">
            We use the <span class="section-heading">Best Technologies</span>
          </h1>
          <p class="text-[#AAAAAA] text-2xl">
            Our expertise is in modern technology, design, and UI/UX. We believe that
            developers start with having knowledge of the best way to tackle the problem
            with the most effective solutions.
          </p>
        </div>
        <div class="grid grid-cols-5">
          <div class="dashed-d border-b-[1px] border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-l-[1px] border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-l-[1px] border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-l-[1px] border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-l-[1px] border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-b-[1px] border-[#464646] border-dashed p-5"></div>
          <div
            class="dashed-d border border-[#464646] border-dashed p-10 bg-[#0AA9F8] rounded-br-[70px]"
          >
            <img src="../assets/New folder/1.png" class="w-24" alt="" />
          </div>
          <div
            class="dashed-d border border-[#464646] border-dashed p-5 bg-[#4353FF] rounded-b-[70px]"
          >
            <img src="../assets/New folder/2.png" class="w-24" alt="" />
          </div>
          <div class="dashed-d border border-[#464646] border-dashed p-5 bg-[#EDDD27]">
            <img src="../assets/New folder/3.png" class="w-24" alt="" />
          </div>
          <div class="dashed-d border-t border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-t border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border border-[#464646] border-dashed p-5">
            <img src="../assets/New folder/4.png" class="w-24" alt="" />
          </div>
          <div class="dashed-d border border-[#464646] border-dashed p-5">
            <img src="../assets/New folder/5.png" alt="" />
          </div>
          <div class="dashed-d border border-[#464646] border-dashed p-5">
            <img src="../assets/New folder/6.png" alt="" />
          </div>
          <div class="dashed-d border-t border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-t border-[#464646] border-dashed p-5"></div>
          <div
            class="dashed-d border border-[#464646] border-dashed p-5 bg-[#5E80EB] rounded-tr-full"
          >
            <img src="../assets/New folder/7.png" alt="" />
          </div>
          <div
            class="dashed-d border border-[#464646] border-dashed p-5 bg-[#3770A5] rounded-t-full"
          >
            <img src="../assets/New folder/8.png" alt="" />
          </div>
          <div class="dashed-d border border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-t border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-t border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-l border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-l border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-l border-[#464646] border-dashed p-5"></div>
          <div class="dashed-d border-l border-[#464646] border-dashed p-5"></div>
        </div>
      </div>

      <div class="mt-52 gap-1 flex">
        <div class="laCard bg-[#151515] w-6/12 py-16 px-20">
          <h1 class="text-3xl font-bold mb-10">
            We Ensure Productivity with our
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[#337EFF] to-[#33FFE7]"
              >Management Tool</span
            >
          </h1>
          <p class="text-[#929292]">
            To start, each engineer download our staff management tool to keep frack of
            their hours. Ts tool also takes series of screenshots every 10 minutes, and
            has URL tracking to ensure good use of time.We will also send you a weekly
            report oof the engineer's hours, tasks, and overall performance.
          </p>
        </div>

        <div class="laCard w-6/12 bg-[#151515] py-16 px-14">
          <div class="small-cards mb-5 flex">
            <div>
              <h1 class="font-bold text-2xl">Screenshots</h1>
              <p class="text-[#AAAAAA]">
                Ts innovative tool captures a series of screenshots of your virtual
                assistants device every 10 minutes.
              </p>
            </div>
            <img src="../assets/small-cards-images/1.png" alt="" />
          </div>

          <div class="small-cards mb-5 flex justify-between">
            <div>
              <h1 class="font-bold text-2xl">URL Tracking</h1>
              <p class="text-[#AAAAAA]">
                Our team monitors agent URLs to ensure that agents are working efficiently
                on your tasks.
              </p>
            </div>
            <img src="../assets/small-cards-images/2.png" alt="" />
          </div>

          <div class="small-cards mb-5 flex justify-around">
            <div>
              <h1 class="font-bold text-2xl">Daily Reports</h1>
              <p class="text-[#AAAAAA]">
                Our team sends daily and weekly reports with all completed tasks.
              </p>
            </div>
            <img src="../assets/small-cards-images/3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import cardSection from "./cards.vue";
export default {
  name: "ending",
};
</script>

<!-- <div class="grid grid-cols-5">
  <div class="dashed-d border-b-[1px] border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-l-[1px] border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-l-[1px] border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-l-[1px] border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-l-[1px] border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-b-[1px] border-[#464646] border-dashed p-5"></div>
  <div
    class="dashed-d border border-[#464646] border-dashed p-10 bg-[#0AA9F8] rounded-br-[70px]"
  >
    <img src="../assets/New folder/1.png" class="w-24" alt="" />
  </div>
  <div
    class="dashed-d border border-[#464646] border-dashed p-5 bg-[#4353FF] rounded-b-[70px]"
  >
    <img src="../assets/New folder/2.png" class="w-24" alt="" />
  </div>
  <div class="dashed-d border border-[#464646] border-dashed p-5 bg-[#EDDD27]">
    <img src="../assets/New folder/3.png" class="w-24" alt="" />
  </div>
  <div class="dashed-d border-t border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-t border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border border-[#464646] border-dashed p-5">
    <img src="../assets/New folder/4.png" class="w-24" alt="" />
  </div>
  <div class="dashed-d border border-[#464646] border-dashed p-5">
    <img src="../assets/New folder/5.png" alt="" />
  </div>
  <div class="dashed-d border border-[#464646] border-dashed p-5">
    <img src="../assets/New folder/6.png" alt="" />
  </div>
  <div class="dashed-d border-t border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-t border-[#464646] border-dashed p-5"></div>
  <div
    class="dashed-d border border-[#464646] border-dashed p-5 bg-[#5E80EB] rounded-tr-full"
  >
    <img src="../assets/New folder/7.png" alt="" />
  </div>
  <div
    class="dashed-d border border-[#464646] border-dashed p-5 bg-[#3770A5] rounded-t-full"
  >
    <img src="../assets/New folder/8.png" alt="" />
  </div>
  <div class="dashed-d border border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-t border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-t border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-l border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-l border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-l border-[#464646] border-dashed p-5"></div>
  <div class="dashed-d border-l border-[#464646] border-dashed p-5"></div>
</div>
</div> -->
