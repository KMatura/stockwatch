<template>
  <body class="overflow-y-hidden dark:bg-gray-900">
    <div class="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <h1
        class="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold"
      >
        FAQ's
      </h1>
      <div class="lg:w-8/12 w-full mx-auto">

        <hr class="w-full lg:mt-10 my-8" />

        <div class="w-full md:px-6">
          <div id="mainHeading" class="flex justify-between items-center w-full">
            <div class="">
              <p
                class="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800"
              >
                <span
                  class="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800"
                  >Q2.</span
                >
                What is Stockwatch?
              </p>
            </div>
            <button
              aria-label="toggler"
              @click="showA2()"
              class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              data-menu
            >
              <img
                class="transform dark:hidden"
                v-if="showQ2 == false"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
              <img
                class="transform dark:hidden rotate-180"
                v-if="showQ2 == true"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
            </button>
          </div>
          <div id="menu" v-if="showQ2" class="mt-6 w-full">
            <p class="text-base text-left leading-6 text-gray-600 dark:text-gray-300 font-normal">
              Stockwatch is a platform that provides a real-time stock market data and stock market
              analysis.
            </p>
          </div>
        </div>
        <hr class="w-full lg:mt-10 my-8" />

        <div class="w-full md:px-6">
          <div id="mainHeading" class="flex justify-between items-center w-full">
            <div class="">
              <p
                class="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800"
              >
                <span
                  class="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800"
                  >Q3.</span
                >Why should you use Stockwatch?
              </p>
            </div>
            <button
              aria-label="toggler"
              @click="showA3()"
              class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              data-menu
            >
              <img
                class="transform dark:hidden"
                v-if="showQ3 == false"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
              <img
                class="transform dark:hidden rotate-180"
                v-if="showQ3 == true"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
            </button>
          </div>
          <div id="menu" v-if="showQ3" class="mt-6 w-full">
            <p class="text-base leading-6 text-left text-gray-600 dark:text-gray-300 font-normal">
              Stockwatch is a website that helps you to understand the stock market.
            </p>
          </div>
        </div>
        <hr class="w-full lg:mt-10 my-8" />

        <div class="w-full md:px-6">
          <div id="mainHeading" class="flex justify-between items-center w-full">
            <div class="">
              <p
                class="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800"
              >
                <span
                  class="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800"
                  >Q4.</span
                >How man employees got Stockwatch?
              </p>
            </div>
            <button
              aria-label="toggler"
              @click="showA4()"
              class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              data-menu
            >
              <img
                class="transform dark:hidden"
                v-if="showQ4 == false"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
              <img
                class="transform dark:hidden rotate-180"
                v-if="showQ4 == true"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
            </button>
          </div>
          <div id="menu" v-if="showQ4" class="mt-6 w-full">
            <p class="text-base text-left leading-6 text-gray-600 dark:text-gray-300 font-normal">
              Stockwatch has two employees one is a full-time employee and the other is a part-time
              employee.
            </p>
          </div>
        </div>

        <hr class="w-full lg:mt-10 my-8" />

        <div class="w-full md:px-6">
          <div id="mainHeading" class="flex justify-between items-center w-full">
            <div class="">
              <p
                class="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800"
              >
                <span
                  class="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800"
                  >Q5.</span
                >Is Stockwatch only in Austria available?
              </p>
            </div>
            <button
              aria-label="toggler"
              @click="showA5()"
              class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              data-menu
            >
              <img
                class="transform dark:hidden"
                v-if="showQ5 == false"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
              <img
                class="transform dark:hidden rotate-180"
                v-if="showQ5 == true"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
            </button>
          </div>
          <div id="menu" v-if="showQ5" class="mt-6 w-full">
            <p class="text-base text-left leading-6 text-gray-600 dark:text-gray-300 font-normal">
              Stockwatch is available all over the World.
            </p>
          </div>
        </div>

        <hr class="w-full lg:mt-10 my-8" />
        <div class="w-full md:px-6">
          <div id="mainHeading" class="flex justify-between items-center w-full">
            <div class="">
              <p
                class="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800"
              >
                <span
                  class="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800"
                  >Q1.</span
                >
                How do shareholders earn returns on stocks?
              </p>
            </div>
            <button
              aria-label="toggler"
              @click="showA1()"
              class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              data-menu
            >
              <img
                class="transform dark:hidden"
                v-if="showQ1 == false"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
              <img
                class="transform dark:hidden rotate-180"
                v-if="showQ1 == true"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
            </button>
          </div>
          <div id="menu" v-if="showQ1" class="mt-6 w-full">
            <p class="text-base text-left leading-6 text-gray-600 dark:text-gray-300 font-normal">
              Shareholders are business owners of a corporation, who are holding the firm's stocks.
              The ownership will be transferred from the seller to the buyer in the securities
              exchange market after the initial public offering (IPO).
            </p>
          </div>
        </div>
        <hr class="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      showQ1: false,
      showQ2: false,
      showQ3: false,
      showQ4: false,
      showQ5: false,
    };
  },
  methods: {
    showA1() {
      if (this.showQ1 == false) {
        this.showQ1 = true;
      } else {
        this.showQ1 = false;
      }
    },
    showA2() {
      if (this.showQ2 == false) {
        this.showQ2 = true;
      } else {
        this.showQ2 = false;
      }
    },
    showA3() {
      if (this.showQ3 == false) {
        this.showQ3 = true;
      } else {
        this.showQ3 = false;
      }
    },
    showA4() {
      if (this.showQ4 == false) {
        this.showQ4 = true;
      } else {
        this.showQ4 = false;
      }
    },
    showA5() {
      if (this.showQ5 == false) {
        this.showQ5 = true;
      } else {
        this.showQ5 = false;
      }
    },
  },
};
</script>
