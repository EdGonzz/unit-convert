export const ResultCard = (title, conversionText) => {
  return `
    <article class="bg-transparent border-2 border-primary p-4 mb-4 w-full">
      <div class="border-2 border-primary p-4">
        <h3 class="text-xl font-bold mb-4 text-center text-primary">[ ${title} ]</h3>
        <p class="text-base leading-relaxed wrap-break-word text-primary whitespace-pre-wrap" id="${title.toLowerCase().split(' ')[0]}-result">
          ${conversionText}
        </p>
      </div>
    </article>
  `;
};

