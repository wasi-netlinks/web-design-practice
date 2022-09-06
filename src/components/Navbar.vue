<template>
  <div>
    <nav class="flex items-center py-10 justify-between">
      <ul class="flex text-sm w-6/12">
        <li class="border-r-[1px] border-[#555353] pr-5">
          <a href="#"><img src="../image 1.png" alt="" /></a>
        </li>
        <li><a href="#">How we hire</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">How it works</a></li>
      </ul>

      <div class="flex items-center">
        <a href="#" class="mr-4">Apply as a developer</a>
        <router-link to="/register" class="btn-primary">Hire Top Talent</router-link>
        <!-- <button class="btn-primary"></button> -->
      </div>
    </nav>
  </div>
</template>
<script>
export default { name: "navbar" };
</script>
