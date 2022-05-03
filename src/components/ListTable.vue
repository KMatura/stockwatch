<template>
  <div class="mx-auto container bg-white dark:bg-gray-800 dark:bg-gray-800 shadow rounded">
    <div
      class="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full"
    >
      <div class="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
        <div class="flex items-center">
          <a
            class="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
            href="javascript: void(0)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon cursor-pointer icon-tabler icon-tabler-trash"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </a>
        </div>
      </div>
      <div
        class="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end"
      >
        <div class="flex items-center lg:border-r border-gray-300 pb-3 lg:pb-0 lg:px-6">
          <div class="relative w-32 z-10">
            <div
              class="pointer-events-none text-gray-600 dark:text-gray-400 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon cursor-pointer icon-tabler icon-tabler-chevron-down"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            <select
              aria-label="Selected tab"
              class="focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent"
            >
              <option>List View</option>
              <option>Grid View</option>
            </select>
          </div>
        </div>

        <div class="lg:ml-6 flex items-center">
          <div
            class="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center"
          ></div>
        </div>
      </div>
    </div>
    <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
      <table class="min-w-full bg-indigo-50 dark:bg-gray-800">
        <thead>
          <tr class="w-full h-16 border-gray-300 border-b py-8">
            <th
              class="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              Stock
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              Stock-ID
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              Sell
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              Buy
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              Change
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              <div class="opacity-0 w-2 h-2 rounded-full bg-indigo-400"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="h-24 border-gray-300 border-b">
            <td
              class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              <input
                type="checkbox"
                class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none"
                onclick="tableInteract(this)"
              />
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 font-semibold tracking-normal leading-4"
            >
              MSFT
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              Microsoft
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              311,63 $
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
                314,32 $
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-green-500 font-semibold tracking-normal leading-4"
            >
                +3,63%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompactTableWithActionsAndSelect',
  data() {
    return {
      temp: 0,
    };
  },
  methods: {
    dropdownFunction(event) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      var i;
      let list =
        event.currentTarget.parentElement.parentElement.getElementsByClassName(
          'dropdown-content',
        )[0];
      for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.add('hidden');
      }
      list.classList.toggle('hidden');
    },
    documentClick(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          openDropdown.classList.add('hidden');
        }
      }
    },
    checkAll(event) {
      let rows =
        event.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.children;
      for (var i = 0; i < rows.length; i++) {
        if (event.currentTarget.checked) {
          rows[i].classList.add('bg-gray-100');
          let checkbox = rows[i].getElementsByTagName('input')[0];
          if (checkbox) {
            checkbox.checked = true;
          }
        } else {
          rows[i].classList.remove('bg-gray-100');
          let checkbox = rows[i].getElementsByTagName('input')[0];
          if (checkbox) {
            checkbox.checked = false;
          }
        }
      }
    },
    tableInteract(event) {
      var single = event.currentTarget.parentElement.parentElement;
      single.classList.toggle('bg-gray-100');
    },
    pageView(val) {
      let text = document.getElementById('page-view');
      if (val) {
        if (this.$data.temp === 2) {
          this.$data.temp = 0;
        } else {
          this.$data.temp = this.$data.temp + 1;
        }
      } else if (this.$data.temp !== 0) {
        this.$data.temp = this.$data.temp - 1;
      }
      switch (this.$data.temp) {
        case 0:
          text.innerHTML = 'Viewing 1 - 20 of 60';
          break;
        case 1:
          text.innerHTML = 'Viewing 21 - 40 of 60';
          break;
        case 2:
          text.innerHTML = 'Viewing 41 - 60 of 60';
      }
    },
  },
  created() {
    document.addEventListener('click', this.documentClick);
  },
  unmounted() {
    document.removeEventListener('click', this.documentClick);
  },
};
</script>
