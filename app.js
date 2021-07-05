const smartBrands = document.querySelector('.smarthome-brands-container')
const smartCategories = document.querySelector('.smarthome-category-items')

const brandImagePathNames = [
  'google-nest.jpg',
  'hive.png',
  'ring.jpg',
  'drayton.jpg',
  'yale.jpg',
  'yale.jpg',
  'google-nest.jpg',
  'hive.png',
  'ring.jpg',
  'drayton.jpg',
]

const categoryCardData = [
  {
    path: 'heating.jpg',
    header: 'Heating',
  },
  {
    path: 'electrial.jpg',
    header: 'Electrical',
  },
  {
    path: 'security.jpg',
    header: 'Security',
  },
  {
    path: 'lighting.jpg',
    header: 'Lighting',
  },
]

function generateBrandCategories() {
  const brandCategoryHTML = categoryCardData.map(
    (el) =>
      `<div class="smarthome-category-item flex-center ${el.header.toLowerCase()}">
      <img src="./imges/${el.path}"/> 
      <small>${el.header}</small>
      <button class="btn white-color-border">View all</button>
    </div>`
  )
  smartCategories.innerHTML = brandCategoryHTML.join('')
}

generateBrandCategories()

function generateBrandCards() {
  const brandCardHTML = brandImagePathNames.map(
    (el) =>
      `<div class='smarthome-brands-card flex-center'><img src='./imges/${el}'></div>`
  )
  smartBrands.innerHTML = brandCardHTML.join('')
}

generateBrandCards()

function animateBrandCategories() {
  const smartCategoryItem = document.querySelectorAll(
    '.smarthome-category-item'
  )
  smartCategoryItem.forEach((el) => el.classList.add('test'))
}

setTimeout(animateBrandCategories, 300)
