export const Header = (initialValue = 0) => {
  return `
    <header class="bg-transparent text-primary p-6 md:p-8 font-mono flex flex-col items-center justify-center text-center">
      <h1 class="text-2xl md:text-3xl font-bold mb-4 tracking-wider animate-pulse">UNIT CONVERTER_v1.0</h1>
      <p class="text-sm mb-8" aria-live="polite">[STATUS: Awaiting input...]</p>
      
      <div class="relative mb-6 flex items-center" role="group" aria-label="Value input">
        <span class="text-2xl mr-2 text-primary" aria-hidden="true">></span>
        <label for="input-value" class="sr-only">Enter value to convert</label>
        <input 
          type="number" 
          id="input-value" 
          value="${initialValue}" 
          aria-label="Enter a numeric value to convert"
          autocomplete="off"
          class="w-48 h-16 bg-transparent border-2 border-primary rounded-none text-4xl font-bold text-center text-primary focus:outline-none focus:border-primary selection:bg-primary selection:text-background"
        />
        <span class="text-2xl ml-2 text-primary animate-pulse" aria-hidden="true">_</span>
      </div>

      <button 
        id="convert-btn"
        aria-label="Run unit conversion"
        class="bg-primary text-background px-8 py-3 rounded-none text-lg font-bold hover:bg-transparent hover:text-primary border-2 border-primary transition-all duration-300"
      >
        [RUN]
      </button>
    </header>
  `;
};
