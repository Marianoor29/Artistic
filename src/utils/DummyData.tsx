import { postPicture, user, user1, user2 } from "../assets/images"

export const userData = 
  {
    name: 'Maria Noor',
    education: 'Master in Computer Science',
    address: 'Rugby, England',
    jobTitle: 'Software Developer'
  }

export const postData =[
  {
    key:1,
    source:user,
    postPicture:postPicture,
    Price:'400',
    caption:'Rate my new Art work, If anyone intrested to buy please chicke the order button bellow',
    userName:'Maria Noor',
    time: '3 min',
  },
  {
    key:2,
    source:user2,
    postPicture:{uri: 'https://carolineashwood.co.uk/cdn/shop/files/new-lenny-original-abstract-wall-art-39533093814518_2000x.jpg?v=1701705107'},
    Price:'400',
    caption:'Rate my new Art work, If anyone intrested to buy please chicke the order button bellow',
    userName:'Maria Noor',
    time: '3 min',
  },
  {
    key:3,
    source:user1,
    postPicture:postPicture,
    Price:'400',
    caption:'Rate my new Art work, If anyone intrested to buy please chicke the order button bellow',
    userName:'Maria Noor',
    time: '3 min',
  }
]

export const artistData =[
  {
    key:1,
    source:user,
    artistName:'John Doe'
  },
  {
    key:2,
    source:user1,
    artistName:'John Doe'
  },
  {
    key:3,
    source:user2,
    artistName:'John Doe'
  },
  {
    key:4,
    source:user,
    artistName:'John Doe'
  },
  {
    key:4,
    source:user1,
    artistName:'John Doe'
  },
  {
    key:5,
    source:user2,
    artistName:'John Doe'
  },
]

export const galleryData =[
  {
    uri:'https://carolineashwood.co.uk/cdn/shop/files/new-lenny-original-abstract-wall-art-39533093814518_2000x.jpg?v=1701705107',
    title:'Original Colourful Abstract Painting',
    price:'$120'
  },
  {
    uri:'https://images.photowall.com/products/77748/tall-ships-paintings.jpg?h=699&q=85',
    title:'Tall Ships Paintings',
    price:'$130'
  },
  {
    uri:'https://i0.wp.com/cdn.tiqets.com/wordpress/blog/wp-content/uploads/2023/06/05164214/paintings-of-venice-1.jpg?resize=1024%2C683&ssl=1',
    title:'The Most Famous Paintings of Venice',
    price:'$240'
  },
  {
    uri:'https://images.joseartgallery.com/100737/what-color-paintings-sell-best.jpg',
    title:'Jose Art Gallery',
    price:'$120'
  },
  {
    uri:'https://i.etsystatic.com/17358183/r/il/321f5b/4644988646/il_570xN.4644988646_hiao.jpg',
    title:'Lake Como Oil Painting Original Italy Landscape',
    price:'$180'
  },
  {
    uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vflT_IbY6bGitDEPVNJ7yQPMtTr2MjmRAN4VyqrUbQ&s',
    title:'Original artworks for sale',
    price:'$200'
  },
]