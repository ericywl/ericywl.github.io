<script lang="ts">
    import "../app.css";
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";

    let scrollY: number;
    let innerHeight: number = 0;
    let innerWidth: number = 0;

    function goTop() {
        document.body.scrollIntoView();
    }
</script>

<div
    class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
    <div
        class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
            (scrollY > 0
                ? "opacity-full pointer-events-auto"
                : "opacity-0 pointer-events-none")}
    >
        <button
            on:click={goTop}
            class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 py-2 sm:px-4 sm:py-3 hover:bg-slate-800 cursor-pointer"
        >
            <i
                class="fa-solid fa-arrow-up grid place-items-center aspect-square"
            />
        </button>
    </div>
    <Header {scrollY} />
    <slot />
    <Footer />
</div>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />
