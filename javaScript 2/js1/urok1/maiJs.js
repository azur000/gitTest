const goods = [                               //массив с обьектами товаров
   { title: 'Shirt', price: 'цена 150 руб', },
   { title: 'Socks', price: 'цена 50 руб',},
   { title: 'Jacket', price: 'цена 350 руб', },
   { title: 'Shoes', price: 'цена 250 руб', },
];


const $goodsList = document.querySelector('.goods-list');          //обращение к обьекту html по классу
 
const renderGoodsItem = ({ quantity ='кол. 1', title, color = 'Белый', price, }) => {  //фун.деструктурирует мас.goods собирает 
                                                                           //title и price в строку
                                                                           //и возвращает в div class="goods-item
   return `<div class="goods-item"><p>${quantity}</p><h3>${title}</h3><h5>${color}</h5><p>${price}</p></div>`;
};
 
const renderGoodsList = (list = goods) => {                          // list список по умолчанию массив goods
   let goodsList = list.map(                                         //метод map перебирает мас.и возвращает 
                                                                     // рез. в новый массив  
           item => renderGoodsItem(item)
       ).join('\n');                                                  //метод join из массива делает строку в () сепоратор
                                                                     //по умолчанию (",") 

   $goodsList.insertAdjacentHTML('beforeend', goodsList);             //вставить goodsList 
                                                                       // beforeend перед закрывающим тегом в goodsList
}
 
renderGoodsList();                                                   //запуск функции