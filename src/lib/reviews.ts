export interface Review {
  name: string
  suburb?: string
  date?: string
  rating: number
  text: string
  service?: string
}

export const reviews: Review[] = [
  {
    name: 'Adrian Muhs',
    date: 'Apr 2025',
    rating: 5,
    text: 'Awesome crew, very well done, communication and work done, double gates are awesome. Thank you for everything, quoted very good, excellent work, beats other companies. Updated on every stage of the job, will definitely use again. Kalid and crew thank you.',
    service: 'Fencing & Gates',
  },
  {
    name: 'Rainer James',
    date: 'Apr 2025',
    rating: 5,
    text: 'I asked for 21m Colorbond fence and they really delivered. I dealt with Heath and he basically described what was going to happen and what was needed for the erecting of the fence. Great dealing with Kalid.',
    service: 'Colorbond Fencing',
  },
  {
    name: 'Mandii Simmonds',
    date: 'Apr 2025',
    rating: 5,
    text: 'Shield Fencing and their builder delivered a very positive experience. Communication was clear and consistent throughout the project, and the team demonstrated a high level of professionalism. The workmanship was completed to a good standard, with attention to detail and care taken to meet expectations. Any questions or concerns were addressed promptly, making the overall process smooth and stress-free. I would recommend their services to others seeking reliable and quality fencing work.',
    service: 'Fencing',
  },
  {
    name: 'MetzMagicGames',
    date: 'Apr 2025',
    rating: 5,
    text: 'Professional, reliable and outstanding service. We recently engaged Shield Fencing to construct a retaining wall using concrete sleepers and to install a Colorbond fence on top. The team was punctual, reliable, always arriving as scheduled and keeping us informed throughout. The quote was well laid out and highly detailed. The builder showed great respect to our property, ensuring the worksite was left clean and tidy. Even though connecting the new fence to the old pool fence was a bit tricky, Kalid offered to help us out regardless. This willingness to go above and beyond really highlights their commitment to customer satisfaction.',
    service: 'Retaining Wall & Colorbond',
  },
  {
    name: 'Vanessa Strong',
    date: 'Jan 2025',
    rating: 5,
    text: 'We were so impressed with the professionalism shown by Kalid and his team throughout the whole process. He provided us with a detailed written quote. His workers kept us informed at each stage and left our yard spotless at the conclusion of the job. We could not have asked for anyone better to do our work. You will not regret it. We cannot speak highly enough of Kalid and his team from Shield Fencing.',
    service: 'Fencing',
  },
  {
    name: 'Doug Meyers',
    date: 'Dec 2024',
    rating: 5,
    text: 'Excellent communication and attention to detail. Kalid supervised all aspects of the job from quotation to material delivery, construction and clean up. We would use again and highly recommend their service.',
    service: 'Fencing',
  },
  {
    name: 'Love Entertainment Music',
    date: 'Nov 2024',
    rating: 5,
    text: 'We recently had a Colorbond fence installed by Shield Fencing Pty Ltd, and the quality of their work was absolutely top-notch. The fence looks fantastic and was completed with great attention to detail. A couple of our plants were accidentally damaged, but Kalid went above and beyond to make sure we were fully compensated — a true sign of excellent customer service and professionalism. We\'re extremely happy with the result and will definitely use their services again.',
    service: 'Colorbond Fencing',
  },
  {
    name: 'Paymon Husayni',
    date: 'Nov 2024',
    rating: 5,
    text: 'Highly recommend Shield Fencing! They were fantastic to work with from the initial quote right through to the final install. Installing a fence can be stressful, but Shield Fencing made the process simple and straightforward, thanks to their clear communication. They went above and beyond to ensure everything ran smoothly. Their customer service is outstanding. It\'s rare to find tradespeople who not only show up on time but also deliver exactly what they promise. Couldn\'t be happier with the result!',
    service: 'Fencing',
  },
  {
    name: 'Veronica (Sam)',
    date: 'Nov 2024',
    rating: 5,
    text: 'Khalid and Yash were fantastic to work with. Made the process really easy. Turn around time from the start of knocking down the old fence and replacing it was very quick. We were so impressed we got them back to do another fence. Definitely recommend and use again. Thank you boys.',
    service: 'Fencing',
  },
  {
    name: 'Christina Saul',
    date: 'Nov 2024',
    rating: 5,
    text: 'Shield Fencing were professional from start to finish. They bent over backwards to accommodate the needs of my neighbours in order for me to get agreement from them to move forward with our boundary fences. In the end I was able to get agreement from all 3 neighbours to replace our boundary fences. The construction crew were hard working and reliable. The final result is 3 beautiful new fences.',
    service: 'Boundary Fencing',
  },
  {
    name: 'J K',
    date: 'Nov 2024',
    rating: 5,
    text: 'Kalid and his team at Shield Fencing handled our fencing project with professionalism and clear communication throughout. The overall experience was smooth and the workmanship met expectations.',
    service: 'Fencing',
  },
  {
    name: 'Emma Porter',
    date: 'Nov 2024',
    rating: 5,
    text: 'We had a retaining wall and fence replaced with Shield Fencing. They were easy to deal with and their communication was fantastic.',
    service: 'Retaining Wall & Fencing',
  },
  {
    name: 'Suppiah Murugesan',
    date: 'Oct 2024',
    rating: 5,
    text: 'Khalid, the coordinating manager, provided personal advice and professional services. Job well done within the stipulated time. The charges were reasonable.',
    service: 'Fencing',
  },
  {
    name: 'Max Ushakov',
    date: 'Sep 2024',
    rating: 5,
    text: 'We recently had a retaining wall and fence built by Shield Fencing, and I couldn\'t be happier with the whole experience. From start to finish, their communication was excellent — every step was clearly explained, timelines were kept on track, and any questions I had were answered quickly. The workmanship on both the wall and the fence is outstanding, with great attention to detail and a very tidy finish. I highly recommend Shield Fencing to anyone looking for quality work backed by fantastic customer service.',
    service: 'Retaining Wall & Fencing',
  },
  {
    name: 'Rory Davitt',
    date: 'Sep 2024',
    rating: 5,
    text: 'Quote was competitive. Communication was excellent. The guys were easy to work with and fixed any issues quickly.',
    service: 'Fencing',
  },
  {
    name: 'Esben Strodl',
    date: 'Aug 2024',
    rating: 5,
    text: 'I sought 5 different quotes and Khalid and his team provided the most considered yet fair quote. The removal of the existing fences and construction of the new fences (totalling 72 metres across sloping and challenging terrain) was done with a high level of competency. Khalid kept in regular communication and was flexible and accommodating in problem solving unforeseen problems as they arose. My neighbours and I were happy with the finished fences.',
    service: 'Fencing',
  },
  {
    name: 'Stuart Donohoe',
    date: 'Jul 2024',
    rating: 5,
    text: 'A solid fence, looks great. The guys at Shield are easy to work with. No mess, no fuss.',
    service: 'Fencing',
  },
  {
    name: 'Julia Fox',
    date: 'Jul 2024',
    rating: 5,
    text: 'Excellent communication from start to finish, competitive quote and excellent job. Always kept us up to date with progress, checked in with us regularly. Would highly recommend.',
    service: 'Fencing',
  },
  {
    name: 'Michelle Cattran',
    date: 'Jun 2024',
    rating: 5,
    text: 'Great communication and high standard of work.',
    service: 'Fencing',
  },
  {
    name: 'Michael Tscheinig',
    date: 'Jun 2024',
    rating: 5,
    text: 'Outstanding communication throughout the project and professional install on our boundary fence. Very happy with our new fence.',
    service: 'Boundary Fencing',
  },
  {
    name: 'Jackey Tan',
    date: 'Mar 2025',
    rating: 5,
    text: 'Excellent work and even better service and communication. They may be new to the industry but they know their work.',
    service: 'Fencing',
  },
  {
    name: 'Kathy',
    date: 'Mar 2025',
    rating: 5,
    text: 'We are very happy with the fence replacement job that Yash and his team did. They are communicating the job clearly and very professional. Highly recommended.',
    service: 'Fencing',
  },
  {
    name: 'Qing He',
    date: 'Mar 2025',
    rating: 5,
    text: 'Take responsibility, keep communicating, finish job on time.',
    service: 'Fencing',
  },
  {
    name: 'Iman M',
    date: 'Feb 2025',
    rating: 5,
    text: 'Yash and Kalid at Shield Fencing are professional, reliable, and easy to work with. They communicate extremely well over phone and text messages, and pay great attention to detail as evidenced by their comprehensive quotes. I highly recommend them!',
    service: 'Fencing',
  },
]
