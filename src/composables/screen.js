import { onMounted, onUnmounted, ref } from 'vue';

export function useScreen() {
  const browserWidth = ref(window.innerWidth);
  const deviceWidth = ref(screen.width);
  const isMobile = ref(window.innerWidth <= 768);
  const isTablet = ref(window.innerWidth >= 769 & window.innerWidth <= 1000);
  const isDesktop = ref(window.innerWidth >= 1001)


  const onBrowserMobile = () => {
    browserWidth.value = window.innerWidth;
    deviceWidth.value = screen.width;
    isMobile.value = window.innerWidth <= 768;
  };

  const onBrowserTablet = () => {
    browserWidth.value = window.innerWidth;
    deviceWidth.value = screen.width;
    isTablet.value = window.innerWidth >= 769 & window.innerWidth <= 1000;
  };

  const onBrowserDesktop = () => {
    browserWidth.value = window.innerWidth;
    deviceWidth.value = screen.width;
    isDesktop.value = window.innerWidth >= 1001;
  };

  onMounted(() => {
    window.addEventListener('resize', onBrowserDesktop);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onBrowserDesktop);
  });

  onMounted(() => {
    window.addEventListener('resize', onBrowserTablet);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onBrowserTablet);
  });

  onMounted(() => {
    window.addEventListener('resize', onBrowserTablet);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onBrowserTablet);
  });

  onMounted(() => {
    window.addEventListener('resize', onBrowserMobile);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onBrowserMobile);
  });

  return { browserWidth, deviceWidth, isMobile, isTablet, isDesktop };
}   