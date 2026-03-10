export const ResultCard = (title, id) => {
  const finalId = id ?? `${title.toLowerCase().split(' ')[0]}-result`;
  return `
    <article class="bg-transparent border-2 border-primary p-4 mb-4 w-full" aria-label="${title} conversion result">
      <div class="border-2 border-primary p-4">
        <h2 class="text-xl font-bold mb-4 text-center text-primary">[ ${title} ]</h2>
        <p class="text-base leading-relaxed wrap-break-word text-primary whitespace-pre-wrap" id="${finalId}" aria-live="polite"></p>
      </div>
    </article>
  `;
};
