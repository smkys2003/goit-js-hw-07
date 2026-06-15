const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const titles = item.querySelector('h2').textContent;
  const elementsInCardList = item.querySelectorAll('ul li').length;
  console.log(`Category: ${titles}`);
  console.log(`Elements: ${elementsInCardList}`);
});
