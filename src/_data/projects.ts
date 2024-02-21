import { Project } from '@/types/models/Project'
// images (for testing)
import img1 from '@/app/assets/tracing-the-tide-1.jpg'
import img2 from '@/app/assets/tracing-the-tide-2.jpg'
import img3 from '@/app/assets/tracing-the-tide-3.jpg'

export const projects = [
    {
      id: "1",
      title: "Unveiling London Voids : Eerie but Alluring",
      keywords: [ "Publication" ],
      type: "Individual work",
      year: "2023",
      description: [ "I intend to explore empty or overlooked spaces in the city that evoke unique feelings like eeriness, creepiness, and fascination, and see what potential those spaces might hold accordingly. Every time I go to another city, my interest lies more in discovering abandoned, empty, and disorganized areas rather than fancy buildings or tourist attractions. While these places often evoke creepy and unsettling feelings, I believe they also possess a unique attractiveness. My goal is to delve into the subtleties of what makes these spaces intriguing, where and how to uncover them, and to explore the untapped possibilities they may hold." ],
      images: [ img1, img2, img3 ]
    },
    {
      id: "2",
      title: "Tracing the Tide",
      keywords: [ "Film", "Poster" ],
      year: "2023",
      type: "Collaborative work",
      description: [ 
        "The aim of this short film and poster were to develop a critical observation of a given place, working in a collaborative research hub. We were intrigued by the fact that Bermondsey Beach is only accessible at low tide, so we decided to focus on \‘tide\’ in relation to \‘transition.\’ To capture tidal changes in a tangible way from different perspectives, we chose three tools that can measure and record tides over time.",
        "Transition is the process of changing from one state or condition to another. There are number of ways in which the transition of a particular subject can be monitored. It could be the historical, scientific or physical aspects of it. We decided to go back to basics and map the gradual changes through something as simple as shapes & forms, colour and cloth."
      ],
      images: [ img1, img2 ]
    },
    {
      id: "3",
      title: "Flags of the afterworld",
      keywords: [ "Installation", "Multi-disciplinary design" ],
      year: "2023",
      type: "Self-initiated work",
      description: [ 
        "This project allows the audience to realistically think about the world after death by assuming the afterlife as an existing world and expressing feelings about this invisible place with flags based on three different perspectives. Simple but worthwhile questions about the afterlife are written on the wall, and graphic images that form a kind of corresponding answer are visualized and appear on the flags.",
        "One of the reasons the subject of the afterlife is of historical and contemporary interest is because our values surrounding people, things, and events in the present relate to the future, including possibilities for individuals’ existence after death. If we know that it is impossible for individuals to survive biological death, speculation about an afterlife we might expect or hope for would be meaningless. But it would not be pointless to consider whether or not the impossibility of the afterlife affects our values in this life. What is the meaning of our lives now if we take seriously the idea that we will be annihilated when we die? Or, conversely, if we know that there is a possibility or even a likelihood that we may survive death, why is it important and how will it affect our lives today?"
      ],
      images: [ img1, img2, img3, img1 ]
    },
    {
      id: "4",
      title: "Anonymous cities & Wandering texts",
      keywords: [ "Installation", "Flags" ],
      year: "2023",
      type: "Self-initiated work",
      description: [ "Large cities are facing the crisis of losing their identity as they grow to look similar to each other with globalization and modernization. This project explores how to make people recognize this phenomenon by showing text-removed city images and text-only landscapes. When I recall visiting some of the world\’s largest cities, the cities seemed to be less distinctive than the countryside, no matter the country. I decided to examine this observation further by comparing photography of major cities via online stock images and printed media such as tourism booklets and travel essays." ],
      images: [ img1, img2, img3, img1 ]
    }
  ] as Project[]
