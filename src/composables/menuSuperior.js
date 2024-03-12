import {
    defineAsyncComponent,
    onMounted,
    onUnmounted,
    ref,
    shallowRef,
  } from 'vue';
  
  export function useMonitor() {
    const breakpoint = ref('desktop');
    const menu = shallowRef(
      defineAsyncComponent(() => import('@/components/menuSuperiorDesktop.vue')),
    );
    const footer = shallowRef(
      defineAsyncComponent(() => import('@/components/footerDesktop.vue')),
    );

   
  
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) {
        breakpoint.value = 'celular';
        menu.value = defineAsyncComponent(() =>
          import('@/components/menuSuperiorCelular.vue'),
        );
        footer.value = defineAsyncComponent(() =>
          import('@/components/footerMobile.vue'),
        );
      } else if (width < 1000) {
        breakpoint.value = 'tablet';
        menu.value = defineAsyncComponent(() =>
          import('@/components/menuSuperiorTablet.vue'),
        );
        footer.value = defineAsyncComponent(() =>
          import('@/components/footerMobile.vue'),
        );
      } else {
        breakpoint.value = 'desktop';
        menu.value = defineAsyncComponent(() =>
          import('@/components/menuSuperiorDesktop.vue'),
        );
        footer.value = defineAsyncComponent(() =>
          import('@/components/footerDesktop.vue'),
        );
      }
    };
  
    onMounted(() => {
      updateBreakpoint();
      window.addEventListener('resize', updateBreakpoint);
    });
  
    onUnmounted(() => {
      window.removeEventListener('resize', updateBreakpoint);
    });
  
    return {
      breakpoint,
      menu,
      footer
    };
  }