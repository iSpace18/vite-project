export default{
  base:'/vite-project/',
  build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        main: resolve(__dirname, 'index.html'),
        // @ts-ignore
        calc: resolve(__dirname, 'calc.html'),
      }
    }
  }
}