import { Project } from '@/types/models/Project'

// The Book of Dada
import theBookOfDada1 from '@/app/assets/work/The book of Dada/Dada book1.jpg'
import theBookOfDada2 from '@/app/assets/work/The book of Dada/Dada book2.jpg'
import theBookOfDada3 from '@/app/assets/work/The book of Dada/Dada book3.jpg'
import theBookOfDada4 from '@/app/assets/work/The book of Dada/Dada book4.jpg'
import theBookOfDada5 from '@/app/assets/work/The book of Dada/Dada book5.jpg'
import theBookOfDada6 from '@/app/assets/work/The book of Dada/Dada book6.jpg'
import theBookOfDada7 from '@/app/assets/work/The book of Dada/Dada book7.jpg'
import theBookOfDada8 from '@/app/assets/work/The book of Dada/Dada book8.jpg'
import theBookOfDada9 from '@/app/assets/work/The book of Dada/Dada book9.jpg'
import theBookOfDada10 from '@/app/assets/work/The book of Dada/Dada book10.jpg'
// Lake Scene
import lakeScene1 from '@/app/assets/work/Lake Scene/Lake book1.jpg'
import lakeScene2 from '@/app/assets/work/Lake Scene/Lake book2.jpg'
import lakeScene3 from '@/app/assets/work/Lake Scene/Lake book3.jpg'
import lakeScene4 from '@/app/assets/work/Lake Scene/Lake book4.jpg'
import lakeScene5 from '@/app/assets/work/Lake Scene/Lake book5.jpg'
import lakeScene6 from '@/app/assets/work/Lake Scene/Lake book6.jpg'
// Art Space Daejeon
import artSpaceDaejeon1 from '@/app/assets/work/Art Space Daejeon/art-space-daejeon-1.jpg'
import artSpaceDaejeon2 from '@/app/assets/work/Art Space Daejeon/art-space-daejeon-2.jpg'
import artSpaceDaejeon3 from '@/app/assets/work/Art Space Daejeon/art-space-daejeon-3.jpg'
import artSpaceDaejeon4 from '@/app/assets/work/Art Space Daejeon/art-space-daejeon-4.jpg'
import artSpaceDaejeon5 from '@/app/assets/work/Art Space Daejeon/art-space-daejeon-5.jpg'
import artSpaceDaejeon6 from '@/app/assets/work/Art Space Daejeon/art-space-daejeon-6.jpg'
import artSpaceDaejeon7 from '@/app/assets/work/Art Space Daejeon/art-space-daejeon-7.jpg'
// A.M. Use
import amUse1 from '@/app/assets/work/A-M.USE/a-m-use-1.jpg'
import amUse2 from '@/app/assets/work/A-M.USE/a-m-use-2.jpg'
import amUse3 from '@/app/assets/work/A-M.USE/a-m-use-3.jpg'
import amUse4 from '@/app/assets/work/A-M.USE/a-m-use-4.jpg'
import amUse5 from '@/app/assets/work/A-M.USE/a-m-use-5.jpg'
import amUse6 from '@/app/assets/work/A-M.USE/a-m-use-6.jpg'
//import amUse7 from '@/app/assets/work/A-M.USE/a-m-use-7.mp4'
// Family Share
import familyShare1 from '@/app/assets/work/Family share/family-share-1.jpg'
import familyShare2 from '@/app/assets/work/Family share/family-share-2.jpg'
import familyShare3 from '@/app/assets/work/Family share/family-share-3.jpg'
import familyShare4 from '@/app/assets/work/Family share/family-share-4.jpg'
// import familyShare5 from '@/app/assets/work/Family share/family-share-5.mp4'
// import familyShare6 from '@/app/assets/work/Family share/family-share-6.mp4'
// import familyShare7 from '@/app/assets/work/Family share/family-share-7.mp4'
// Friendly Space
import friendlySpace1 from '@/app/assets/work/Friendly space/friendly-space-1.jpg'
import friendlySpace2 from '@/app/assets/work/Friendly space/friendly-space-2.jpg'
import friendlySpace3 from '@/app/assets/work/Friendly space/friendly-space-3.jpg'
import friendlySpace4 from '@/app/assets/work/Friendly space/friendly-space-4.jpg'
import friendlySpace5 from '@/app/assets/work/Friendly space/friendly-space-5.jpg'
import friendlySpace6 from '@/app/assets/work/Friendly space/friendly-space-6.jpg'
import friendlySpace7 from '@/app/assets/work/Friendly space/friendly-space-7.jpg'

export const projects = [
    {
      id: 1,
      title: "The Book of DADA",
      keywords: "Publication",
      type: "Individual work",
      year: "2023",
      description: [ "In a society where digital media has expanded and various graphic expressions have become available, I wanted to explore the possibility of Dadaism’s legacy from a graphic design context. Thus, I decided to reinterpret Dadaism from a contemporary design perspective, which tends to be more geometric and minimalistic.", "The aim of the project is to reshape and reinterpret Dadaist heritage in a contemporary graphic context. For graphic materials, I used museum leaflets, catalogs or tickets to create geometric and typographic elements, and the extracted elements were fused with each other in a Dadaist way of expression."  ],
      images: [ theBookOfDada1, theBookOfDada2, theBookOfDada3, theBookOfDada4, theBookOfDada5, theBookOfDada6, theBookOfDada7, theBookOfDada8, theBookOfDada9, theBookOfDada10 ],
      slug: "the-book-of-dada"
    },
    {
      id: 2,
      title: "Lake Scene - The Art of Water",
      keywords: "Publication, Editorial design",
      year: "2022",
      type: "Individual work",
      description: [ "This book deals with inspiring lake scenes of Europe. It was prompted by my personal memory and supportive research to find a meaningful association between creativity and water-related places such as a lake or an ocean. I wanted people’s imaginations to bring the lake to life, by removing the tone and not revealing the original colours, the viewers are inclined to create the actual colours in their  minds. This leads them to engage more and further immerse themselves in the book." ],
      images: [ lakeScene1, lakeScene2, lakeScene3, lakeScene4, lakeScene5, lakeScene6 ],
      slug: "lake-scene-the-art-of-water"
    },
    {
      id: 3,
      title: "Art Space Daejeon",
      keywords: "Branding, Exhibition design",
      year: "2022",
      type: "Individual work",
      description: [ "‘Art space Daejeon’ is an annual festival that showcases certain artists’ pieces on the streets of Daejeon, which is especially aimed at high school students. This project was designed so that artworks could be easily found on the streets in response to the insufficiency of art education in Korea’s regular curriculum." ],
      images: [ artSpaceDaejeon1, artSpaceDaejeon2, artSpaceDaejeon3, artSpaceDaejeon4, artSpaceDaejeon5, artSpaceDaejeon6, artSpaceDaejeon7 ],
      slug: "art-space-daejeon"
    },
    {
      id: 4,
      title: "A.M-USE",
      keywords: "UI/UX Design, App design",
      year: "2021",
      type: "Individual work",
      description: [ "‘A.M-USE’ is an iPad app that helps users have a more seamless and meaningful experience when visiting museums. This app contains many different features that allow users to appreciate the artworks in a more engaging way, going one step further from the functionality of the existing museum apps." ],
      images: [ amUse1, amUse2, amUse3, amUse4, amUse5, amUse6 ],
      slug: "a-m-use"
    },
    {
      id: 5,
      title: "Family Share",
      keywords: "UI/UX Design, App design",
      year: "2021",
      type: "Individual work",
      description: [ "This is a project that addresses the problem that senior people often face when they use technological devices : Older people struggle to properly use phones or social apps. The app is created based on the tablet version in consideration of the elderly's preference for tablet devices, while providing a smartphone version of it for secondary users such as other family members. This project aims to explore how designing for a specific audience with motion and visual constraints makes things easier to use for everybody. It requires us to think about inclusive design as well as affordances and signifiers for implying interactions to a target audience." ],
      images: [ familyShare1, familyShare2, familyShare3, familyShare4 ],
      slug: "family-share"
    },
    {
      id: 6,
      title: "Friendly Space",
      keywords: "UI/UX Design, App design",
      year: "2021",
      type: "Individual work",
      description: [ "FRIENDLY SPACES is a company that offers products for the home that are made from recycled materials or up-cycled materials. The company's mission is lowering our carbon footprint and supporting local artisans. Customers will be invited to create a profile where they can save their preferences about materials and to create a wishlist of products. On the other side of the retail stream, customers can donate items for recycling and receive discounts on future purchases depending on the value of the materials donated. My aim is to create a cohesive brand as well as a useful and responsive shopping platform." ],
      images: [ friendlySpace1, friendlySpace2, friendlySpace3, friendlySpace4, friendlySpace5, friendlySpace6, friendlySpace7 ],
      slug: "friendly-space"
    }
  ] as Project[]
