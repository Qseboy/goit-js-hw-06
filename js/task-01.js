const listEl = document.querySelector('#categories');

// Number of categories
console.log(`Number of categories: ${listEl.children.length}`);

// Category+Elements output
[...listEl.children].forEach(el => {
  console.log(`Category: ${el.children[0].textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
