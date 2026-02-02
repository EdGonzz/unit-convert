export const Header = (initialValue = 0) => {
  return `
    <header class="bg-transparent text-primary p-8 md:p-12 font-mono flex flex-col items-center justify-center text-center">
      <h1 class="text-2xl md:text-3xl font-bold mb-4 tracking-wider animate-pulse">UNIT CONVERTER_v1.0</h1>
      <p class="text-sm mb-8">[STATUS: Awaiting input...]</p>
      
      <div class="relative mb-6 flex items-center">
        <span class="text-2xl mr-2 text-primary">></span>
        <input 
          type="number" 
          id="input-value" 
          value="${initialValue}" 
          class="w-48 h-16 bg-transparent border-2 border-primary rounded-none text-4xl font-bold text-center text-primary focus:outline-none focus:border-primary selection:bg-primary selection:text-background"
        />
        <span class="text-2xl ml-2 text-primary animate-pulse">_</span>
      </div>

      <button 
        id="convert-btn"
        class="bg-primary text-background px-8 py-3 rounded-none text-lg font-bold hover:bg-transparent hover:text-primary border-2 border-primary transition-all duration-300"
      >
        [RUN]
      </button>
    </header>
  `;
};

