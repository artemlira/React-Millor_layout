import { ReactComponent as Icon1 } from '../images/Catalog Coffee/icon01.svg';
import { ReactComponent as Icon2 } from '../images/Catalog Coffee/icon02.svg';
import { ReactComponent as Icon3 } from '../images/Catalog Coffee/icon03.svg';
import { ReactComponent as Icon4 } from '../images/Catalog Coffee/icon04.svg';
import { ReactComponent as Icon5 } from '../images/Catalog Coffee/icon05.svg';
import { ReactComponent as Icon6 } from '../images/Catalog Coffee/icon06.svg';
import { ReactComponent as Icon7 } from '../images/Catalog Coffee/icon07.svg';
import { ReactComponent as Icon8 } from '../images/Catalog Coffee/icon08.svg';
import { ReactComponent as HeaderIcon1 } from '../images/header/01.svg';
import { ReactComponent as HeaderIcon2 } from '../images/header/02.svg';
import { ReactComponent as HeaderIcon3 } from '../images/header/03.svg';
import catalog01 from '../images/catalog/01.png';
import catalog02 from '../images/catalog/02.png';
import catalog03 from '../images/catalog/03.png';
import catalog04 from '../images/catalog/04.png';
import discImg01 from '../images/Discount Goods/01.png';
import coffee from '../images/Discount Goods/coffee.png';
import dots from '../images/Discount Goods/dots.png';
import stars from '../images/Discount Goods/stars.png';
import procent from '../images/Discount Goods/procent.svg';
import advantages01 from '../images/advantages/01.png';
import advantagesicon1 from '../images/advantages/icon1.svg';
import advantagesicon2 from '../images/advantages/icon2.svg';
import advantagesicon3 from '../images/advantages/icon3.svg';
import socialNetworksIcon01 from '../images/socialNetworks/icon01.png';
import socialNetworksIphones from '../images/socialNetworks/iphones.png';
import socialNetworksNext from '../images/socialNetworks/next.png';
import CatalogCoffee5 from '../images/Catalog Coffee/coffee5.png';
import CatalogCoffee4 from '../images/Catalog Coffee/coffee4.png';
import CatalogCoffee3 from '../images/Catalog Coffee/coffee3.png';
import CatalogCoffee2 from '../images/Catalog Coffee/coffee2.png';
import CatalogCoffee1 from '../images/Catalog Coffee/coffee1.png';
import tea01 from '../images/TeaCatalog/01.png';
import tea02 from '../images/TeaCatalog/02.png';
import tea03 from '../images/TeaCatalog/03.png';
import tea04 from '../images/TeaCatalog/04.png';
import tea05 from '../images/TeaCatalog/05.png';
import tea06 from '../images/TeaCatalog/06.png';
import tea07 from '../images/TeaCatalog/07.png';
import wending01 from '../images/Wending Products/01.png';
import healthyDiet01 from '../images/HealthyDiet/01.png';



export const icons = [
  <HeaderIcon1 />,
  <HeaderIcon2 />,
  <HeaderIcon3 />,
]

export const catalog = [
  {
    img: catalog01,
    text: 'Свежеобжаренный кофе',
    btn: 'Купить',
    link: 'coffee_catalog',
  },
  {
    img: catalog02,
    text: 'Чай и кофейные напитки',
    btn: 'Купить',
    link: 'tea_catalog',
  },
  {
    img: catalog03,
    text: 'Продукция для вендинга',
    btn: 'Купить',
    link: 'wending_products',
  },
  {
    img: catalog04,
    text: 'Здоровое питание',
    btn: 'Купить',
    link: 'healthy_diet',
  },
]

export const discountItemPics = [
  discImg01,
  coffee,
  dots,
  stars,
  procent,
]

export const advantagesPics = [
  advantages01,
  advantagesicon1,
  advantagesicon2,
  advantagesicon3,
]

export const socialNetwork = [
  socialNetworksIcon01,
  socialNetworksIphones,
  socialNetworksNext,
]

export const productRangeIcons = [
  {
    img: <Icon1 />,
    text: 'Турка',
  },
  {
    img: <Icon2 />,
    text: 'Френч-пресс',
  },
  {
    img: <Icon3 />,
    text: 'Мока',
  },
  {
    img: <Icon4 />,
    text: 'Эспрессо',
  },
  {
    img: <Icon5 />,
    text: 'Воронка'
  },
  {
    img: <Icon6 />,
    text: 'Аэропресс'
  },
  {
    img: <Icon7 />,
    text: 'Чашка'
  },
  {
    img: <Icon8 />,
    text: 'Автомат'
  }
]

export const productRangePic = [
  CatalogCoffee5,
  CatalogCoffee4,
  CatalogCoffee3,
  CatalogCoffee2,
  CatalogCoffee1,
]

export const teaRange = [
  {
    img: tea01,
    text: 'Черный чай'
  },
  {
    img: tea02,
    text: 'Зеленый чай'
  },
  {
    img: tea03,
    text: 'Молочный улунг'
  },
  {
    img: '',
    text: false
  },
  {
    img: tea04,
    text: 'Травяной чай'
  },
  {
    img: tea05,
    text: 'Матча'
  },
  {
    img: tea06,
    text: 'Пуэр'
  },
  {
    img: tea07,
    text: 'Кофейные напитки'
  },
]

export const wendingRange = [
  {
    img: wending01,
    text: 'Гранулированный кофе'
  },
  {
    img: wending01,
    text: 'Гранулированный цикорий'
  },
  {
    img: wending01,
    text: 'Зерновой кофе'
  },
  {
    img: '',
    text: false
  },
  {
    img: wending01,
    text: 'Гранулированный какао'
  },
  {
    img: wending01,
    text: 'Гранулированные кофейные напитки'
  },
  {
    img: wending01,
    text: 'Кофе порошкообразный'
  },
  {
    img: wending01,
    text: 'Сухое молоко гранулированное'
  },
]

export const foodRange = [
  {
    img: healthyDiet01,
    text: 'Цикорий и корень цикория'
  },
  {
    img: healthyDiet01,
    text: 'Ячменные напитки'
  },
  {
    img: '',
    text: false
  },
  {
    img: healthyDiet01,
    text: 'Напитки для здоровья'
  },
  {
    img: healthyDiet01,
    text: 'Протеиновые смеси'
  },
  {
    img: healthyDiet01,
    text: 'Толокняные каши'
  },
]
