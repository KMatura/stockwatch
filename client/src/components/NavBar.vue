<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a class="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#">
                stockwatch
            </a>
            <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                <span class="block relative w-6 h-px rounded-sm bg-white"></span>
                <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
            </div>
            <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
                <li class="nav-item">
                    <a class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 border-r-2 border-white" href="#">
                    Browse
                    </a>
                </li>
                <li class="nav-item">
                    <a class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 border-r-2 border-white" href="#">
                    My Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#">
                    Settings
                    </a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>