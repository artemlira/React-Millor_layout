
import HealthyDietItem from './Page_HealthyDiet/HealthyDietItem/HealthyDietItem';
// import DiscountItem from './Page_Home/DiscountItem/DiscountItem';
import TeaItem from './Page_TeaCatalog/TeaItem/TeaItem';
import WendingProductsItem from './Page_WendingProducts/WendingProductsItem/WendingProductsItem';



export const allProducts = [
  //coffee
  {
    product: 'coffee',                       //продукт
    cookingMethod: 'Турка',                  //способ приготовления 1
    methodProcessing: 'Сухая',               //способ обработки 5
    degreeFrying: 4,                         //степень обжарки 2
    geography: 'Африка',                     //география 3
    typeCoffee: 'Робуста',                   //вид кофе 7
    sale: false,                             //скидки
    special: ['Популярное', 'Новый урожай'], //особые 6
    rating: 4,                               //рейтинг
    acid: 'Низкая',                          //кислинка 4
    image: '../images/Discount Goods/01.png',//картинка
    title: 'Colombia Supremo',               //заголовок
    description: ['Свежеобжаренный кофе',    //описание
      '- описание товара, вкус, аромат'],
    price: '250',                            //цена
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Мытая',
    degreeFrying: 5,
    geography: 'Йемен',
    typeCoffee: 'Смесь арабик',
    sale: false,
    special: ['Ваш выбор'],
    rating: 5,
    acid: 'Средняя',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Мока',
    methodProcessing: 'Прочие',
    degreeFrying: 3,
    geography: 'Уганда',
    typeCoffee: 'Смесь арабика/робуста',
    sale: true,
    special: ['Скидки'],
    rating: 3,
    acid: 'Высокая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Эспрессо',
    methodProcessing: 'Сухая',
    degreeFrying: 5,
    geography: 'Эфиопия',
    typeCoffee: 'Арабика',
    sale: false,
    special: ['Сорт недели'],
    rating: 4,
    acid: 'Низкая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Воронка',
    methodProcessing: 'Мытая',
    degreeFrying: 5,
    geography: 'Азия',
    typeCoffee: 'Робуста',
    sale: false,
    special: ['Микролот'],
    rating: 4,
    acid: 'Средняя',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Аэропресс',
    methodProcessing: 'Прочие',
    degreeFrying: 5,
    geography: 'Центр. Америка',
    typeCoffee: 'Смесь арабик',
    sale: false,
    special: ['Новинка'],
    rating: 4,
    acid: 'Высокая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Чашка',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Лат. Америка',
    typeCoffee: 'Смесь арабика/робуста',
    sale: false,
    special: ['Популярное', 'Новый урожай'],
    rating: 4,
    acid: 'Низкая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Автомат',
    methodProcessing: 'Мытая',
    degreeFrying: 4,
    geography: 'Африка',
    typeCoffee: 'Робуста',
    sale: false,
    special: ['Ваш выбор'],
    rating: 4,
    acid: 'Средняя',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Турка',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Йемен',
    typeCoffee: 'Смесь арабик',
    sale: false,
    special: ['Сорт недели'],
    rating: 4,
    acid: 'Высокая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Уганда',
    typeCoffee: 'Смесь арабика/робуста',
    sale: false,
    special: ['Микролот'],
    rating: 4,
    acid: 'Низкая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Мока',
    methodProcessing: 'Мытая',
    degreeFrying: 4,
    geography: 'Эфиопия',
    typeCoffee: 'Арабика',
    sale: false,
    special: ['Новинка'],
    rating: 4,
    acid: 'Средняя',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Эспрессо',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Азия',
    typeCoffee: 'Робуста',
    sale: false,
    special: ['Популярное', 'Новый урожай'],
    rating: 4,
    acid: 'Высокая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  //=====================================================================
  {
    product: 'coffee',
    cookingMethod: 'Турка',
    methodProcessing: 'Мытая',
    degreeFrying: 4,
    geography: 'Уганда',
    typeCoffee: 'Арабика',
    sale: false,
    special: ['Ваш выбор'],
    rating: 4,
    acid: 'Средняя',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Турка',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Эфиопия',
    typeCoffee: 'Смесь арабика/робуста',
    sale: false,
    special: ['Микролот'],
    rating: 4,
    acid: 'Высокая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Турка',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Азия',
    typeCoffee: 'Смесь арабик',
    sale: false,
    special: ['Скидки'],
    rating: 4,
    acid: 'Высокая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Турка',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Центр. Америка',
    typeCoffee: 'Смесь арабик',
    sale: false,
    special: ['Новинка'],
    rating: 4,
    acid: 'Высокая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Турка',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Лат. Америка',
    typeCoffee: 'Смесь арабик',
    sale: false,
    special: ['Сорт недели'],
    rating: 4,
    acid: 'Высокая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Африка',
    typeCoffee: 'Арабика',
    sale: false,
    special: ['Популярное', 'Новый урожай'],
    rating: 4,
    acid: 'Высокая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Лат. Америка',
    typeCoffee: 'Робуста',
    sale: false,
    special: ['Сорт недели'],
    rating: 4,
    acid: 'Низкая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Центр. Америка',
    typeCoffee: 'Смесь арабика/робуста',
    sale: true,
    special: ['Скидки'],
    rating: 4,
    acid: 'Низкая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Центр. Америка',
    typeCoffee: 'Смесь арабика/робуста',
    sale: true,
    special: ['Скидки'],
    rating: 4,
    acid: 'Низкая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Центр. Америка',
    typeCoffee: 'Смесь арабика/робуста',
    sale: true,
    special: ['Скидки'],
    rating: 4,
    acid: 'Низкая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Эфиопия',
    typeCoffee: 'Смесь арабика/робуста',
    sale: false,
    special: ['Микролот'],
    rating: 4,
    acid: 'Низкая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Азия',
    typeCoffee: 'Смесь арабика/робуста',
    sale: false,
    special: ['Микролот'],
    rating: 4,
    acid: 'Низкая',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  {
    product: 'coffee',
    cookingMethod: 'Эспрессо',
    methodProcessing: 'Мытая',
    degreeFrying: 4,
    geography: 'Центр. Америка',
    typeCoffee: 'Смесь арабика/робуста',
    sale: false,
    special: ['Популярное', 'Новый урожай'],
    rating: 4,
    acid: 'Средняя',
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250',
  },
  //tea
  {
    product: 'tea',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
    image: '../images/Discount Goods/01.png',
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: '250 ₽',
  },
  {
    product: 'tea',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
  },
  {
    product: 'tea',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
  },
  {
    product: 'tea',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
  },
  {
    product: 'tea',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
  },
  {
    product: 'tea',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
  },
  {
    product: 'tea',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
  },
  {
    product: 'tea',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
  },
  {
    product: 'tea',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
  },
  {
    product: 'tea',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
  },
  {
    product: 'tea',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
  },
  {
    product: 'tea',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
  },
  {
    product: '',
    cookingMethod: '',
    methodProcessing: '',
    degreeFrying: '',
    geography: '',
    typeCoffee: '',
    sale: false,
    rating: 4,
  },

]

// export const geography = [
//   'Африка',
//   'Йемен',
//   'Уганда',
//   'Эфиопия',
//   'Азия',
//   'Центр. Америка',
//   'Лат. Америка'
// ]

// export const acid = [  //кислинка 4
//   'Низкая',
//   'Средняя',
//   'Высокая'
// ]

// export const methodProcessing = [ //способ обработки 5
//   'Сухая',
//   'Мытая',
//   'Прочие',
// ]

// export const special = [ //особые 6
//   'Популярное',
//   'Новый урожай',
//   'Ваш выбор',
//   'Микролот',
//   'Сорт недели',
//   'Скидки',
//   'Новинка',
// ]

// export const typeCoffee = [ //вид кофе 7
//   'Арабика',
//   'Робуста',
//   'Смесь арабик',
//   'Смесь арабика/робуста',
// ]



export const itemsTea = [
  <TeaItem />,
  <TeaItem />,
  <TeaItem />,
  <TeaItem sale={true} />,
  <TeaItem />,
  <TeaItem />,
  <TeaItem />,
  <TeaItem sale={true} />,
  <TeaItem />,
  <TeaItem />,
  <TeaItem />,
  <TeaItem sale={true} />,
]

export const itemsWendingProducts = [
  <WendingProductsItem />,
  <WendingProductsItem />,
  <WendingProductsItem />,
  <WendingProductsItem />,
  <WendingProductsItem />,
  <WendingProductsItem />,
  <WendingProductsItem />,
  <WendingProductsItem />,
  <WendingProductsItem />,
  <WendingProductsItem />,
  <WendingProductsItem />,
  <WendingProductsItem />,
]

export const itemsHealthyDiet = [
  <HealthyDietItem />,
  <HealthyDietItem />,
  <HealthyDietItem />,
  <HealthyDietItem sale={true} />,
  <HealthyDietItem />,
  <HealthyDietItem />,
  <HealthyDietItem />,
  <HealthyDietItem sale={true} />,
  <HealthyDietItem />,
  <HealthyDietItem />,
  <HealthyDietItem />,
  <HealthyDietItem sale={true} />,
]

export const itemsBlogTraining = [
  {
    img: '../images/Blog/pic01.png',
    text: [
      'Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития.',

      'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия.Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития.',

      ' Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу(специалистов) участие в формировании соответствующий условий активизации.С другой стороны реализация намеченных плановых заданий требуют от нас анализа существенных финансовых и административных условий.'
    ]
  },
  {
    title: 'Название темы',
    img: '../images/Blog/pic02.png',
    text: [
      'Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития.',
      'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия.Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития.',
      ' Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу(специалистов) участие в формировании соответствующий условий активизации.С другой стороны реализация намеченных плановых заданий требуют от нас анализа существенных финансовых и административных условий.'
    ]
  },
  {
    title: 'Название темы',
    img: '../images/Blog/pic03.png',
    text: [
      'Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития.',
      'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия.Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития.',
      ' Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу(специалистов) участие в формировании соответствующий условий активизации.С другой стороны реализация намеченных плановых заданий требуют от нас анализа существенных финансовых и административных условий.'
    ]
  },
]

export const itemsBlogNews = [
  {
    img: '../images/news/01.png',
    title: 'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
    text: ['Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.',

      'Но наш интерес вызван не столько природными красотами, сколько кофе...'],
    author: 'Автор статьи: Иван Иванов',
    link: 'Подробнее'
  },
  {
    img: '../images/news/01.png',
    title: 'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
    text: ['Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.',

      'Но наш интерес вызван не столько природными красотами, сколько кофе...'],
    author: 'Автор статьи: Иван Иванов',
    link: 'Подробнее'
  },
  {
    img: '../images/news/01.png',
    title: 'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
    text: ['Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.',

      'Но наш интерес вызван не столько природными красотами, сколько кофе...'],
    author: 'Автор статьи: Иван Иванов',
    link: 'Подробнее'
  },
]

export const itemsBlogNewsNav = [
  'Тег №1',
  'Тег №2',
  'Тег №3',
  'Тег №4',
  'Тег №5',
]

export const itemQuestion = [
  {
    title: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
    text: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
  },
  {
    title: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
    text: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
  },
  {
    title: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
    text: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
  },
  {
    title: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
    text: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
  },
  {
    title: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
    text: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
  },
]

export const itemShopsContacts = [
  {
    city: 'Наши магазины г. Санкт-Петербург',
    address: ['Гороховая, 53', 'Московский, 53']
  },
  {
    city: 'Наши магазины Калининградская обл.',
    address: ['Советск, Гончарова 2а', 'Черняховск, Пионерская 1', 'Ульяны - Громовой 15', 'Советский проспект 6а',
      'Гурьевск, Каштановая 1г', 'Черняховского 15', 'Панина 2а', 'Ленинский 8Б', 'Аксакова 133', 'Липовая Аллея 2']
  }
]

export const deliveryOptions = [
  {
    text: 'СДЭК - до двери ',
    span: '390 ₽'
  },
  {
    text: 'Почта России ',
    span: '300 ₽'
  },
  {
    text: 'DPD - курьер, 3 дн ',
    span: '427 ₽'
  }
]
