<template>
  <div class="py-4 px-7">
    <div class="flex justify-center">
      <div class="flex justify-center lg:flex-nowrap">
        <div class="flex flex-col w-full gap-4 lg:flex-row md:flex-col px-7 pt-7 pb-2">
          <div class="relative lg:max-w-[410px] w-full">
            <input
              v-model="searchTerm"
              placeholder="Search"
              class="p-4 py-3 outline-none focus pr-10 bg-gray-100 border rounded border-gray-100 text-slate-600 lg:max-w-[410px] w-full leading-4"
            />
            <svg
              class="absolute pointer-events-none top-3 right-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                stroke="#4B5563"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 21L15 15"
                stroke="#4B5563"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <button
            class="bg-indigo-700 text-white lg:max-w-[164px] font-medium px-6 py-4 w-full rounded-[4px] leading-[14px] hover:bg-indigo-600"
            @click="searchSubmit"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="w-1/3 mx-auto">
      <table v-if="result != undefined" class="table-auto w-full">
        <tbody>
          <tr v-for="(r,i) in result" :key="i" class="bg-indigo-200">
            <td>{{ r['Company Name'] }}</td>
            <td>{{ r['Symbol'] }}</td>
            <AsyncComp v-if="result.length == 1" :symbol="r['Symbol']"></AsyncComp>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, defineAsyncComponent } from 'vue';
import companies from '../../devserver/nasdaq-listed-symbols.json';
import _ from 'lodash';
import ChartModal from './ChartModal.vue';

const result = ref([]);
const searchTerm = ref('');

const AsyncComp = defineAsyncComponent(() => import('./ChartModal.vue'));

watch(searchTerm, (newTerm, oldTerm) => {
  const resultStart = companies.filter((corp) =>
    corp['Company Name']
      .toLowerCase()
      .startsWith(searchTerm.value.toLowerCase())
  );
  const resultIncludes = companies.filter((corp) =>
    corp['Company Name'].toLowerCase().includes(searchTerm.value.toLowerCase())
  );
  let resultCombined = [];

  if (resultStart != undefined) {
    resultCombined = [...resultCombined, ...resultStart];
    resultCombined = _.slice(resultCombined, 0, 5);
    console.log('combined', resultCombined);
    if (resultCombined.length < 5) {
      console.log('t', _.take(resultIncludes, 5 - resultCombined.length));
      resultCombined = _.concat(
        resultCombined,
        _.take(resultIncludes, 5 - resultCombined.length)
      );
      resultCombined = [...new Set(resultCombined)];
    }
    console.log('s', resultCombined);
    result.value = resultCombined;
  }
  if (resultStart == undefined && resultIncludes != undefined) {
    console.log(resultIncludes);
    resultCombined = resultIncludes.slice(0, 5);
    result.value = resultCombined;
  }

  if (resultStart == undefined && resultIncludes == undefined) {
    return [];
  }

});

const searchSubmit = () => {
  console.log('val', searchTerm.value);
};
</script>

<style>
[v-cloak]{
  display: none;
}
</style>
