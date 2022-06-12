<template>
  <div>
    <NavBar></NavBar>
    <div class="container xl:w-full w-11/12 mx-auto pt-16">
      <div class="w-full">
        <p class="text-gray-500 text-lg font-normal pb-3 sm:text-left text-center">STOCKWATCH TEAM</p>
        <h1
          class="xl:text-4xl lg:text-4xl text-3xl sm:text-left text-center text-gray-800 font-extrabold sm:w-4/6 w-5/6 mx-auto sm:mx-0"
        >
          The Talented People Behind Stockwatch
        </h1>
      </div>
      <div class="xl:flex lg:flex md:flex sm:flex flex-wrap justify-between pt-20">
        <div
          class="xl:w-4/12 lg:w-2/4 md:w-2/5 sm:w-2/5 max-w-sm mb-8 border-b border-gray-300 pb-6"
        >
          <div class="w-full rounded h-56">
            <img
              alt=""
              class="object-cover h-full w-full overflow-hidden rounded shadow"
            />
          </div>
          <div class="flex w-full items-center justify-between pt-6 pb-1">
            <p class="text-xl font-normal text-gray-800">Dani Jaber</p>
            <div class="flex justify-center">
            </div>
          </div>
          <p class="text-base text-gray-600 pb-3">Frontend</p>
          <p class="text-sm text-gray-600 leading-6 font-normal">
            Dani Jaber is a frontend developer with a passion for building beautiful, responsive
            websites. He has a background in web development and has a strong passion for building
            websites that are user friendly and easy to use.
          </p>
        </div>
        <div
          class="bg-indigo-700 rounded-md lg:w-96 w-80 flex flex-col items-center justify-center md:py-0 py-12"
        >
          <h3 class="text-2xl font-semibold leading-6 text-center text-white">About Team</h3>
          <p class="lg:w-80 lg:px-0 px-4 text-base leading-6 text-center text-white mt-6">
            Teamwork is the collaborative effort of a team to achieve a common goal or to complete
            task in the most effective way. This concept is seen in the greater framework of a team
            in which indipendent indiviuals who work together towards common goal basic requirement
            for effective team and company
          </p>
        </div>
        <div
          class="xl:w-4/12 lg:w-2/4 md:w-2/5 sm:w-2/5 max-w-sm mb-8 border-b border-gray-300 pb-6"
        >
          <div class="w-full rounded h-56">
            <img
              alt=""
              class="object-cover h-full w-full overflow-hidden rounded shadow"
            />
          </div>
          <div class="flex w-full items-center justify-between pt-6 pb-1">
            <p class="text-xl font-normal text-gray-800">Krzysztof Matura</p>
            <div class="flex justify-center">
              <a href="javascript:void(0)" class="mx-2">
              </a>
            </div>
          </div>
          <p class="text-base text-gray-600 pb-3">Backend</p>
          <p class="text-sm text-gray-600 leading-6 font-normal">
            Krzysztof Matura is a backend developer with a passion for building scalable,
            performant, and secure web applications. He has a background in software development and
            has a passion for building scalable, performant, and secure web applications.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
</script>
