const categoriesElem = document.querySelector('#categories')
console.log(categoriesElem);

const elemItems = document.querySelectorAll('.item')
console.log(`В списке ${elemItems.length} категории`);

const titles = []
elemItems.forEach(elem => {
    console.log('Категория:', elem.getElementsByTagName('h2')[0].textContent);
    console.log('Количество элементов:', elem.getElementsByTagName('li').length);
    console.log('');
});
 


