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
    name: 'Allan',
    suburb: 'Doolandella, QLD',
    date: '29 Jan 2025',
    rating: 5,
    text: 'Very happy with their work. Very professional. Finished Colorbond Fence in 2 days. Straight and plumb. I would recommend Shield Fencing for any fence jobs. Very Good Value for money.',
    service: 'Colorbond Fencing',
  },
  {
    name: 'Ding He',
    date: '1 year ago',
    rating: 5,
    text: 'Take responsibility, keep communicating. Finish job on time. Really happy with the result — would definitely use them again.',
    service: 'Fencing',
  },
  {
    name: 'Joshua Tan',
    date: '3 months ago',
    rating: 5,
    text: 'Excellent work and even better service and communication. They may be new to the industry but they know their work. Highly professional team.',
    service: 'Fencing',
  },
  {
    name: 'Vanessa',
    suburb: 'Rochedale South',
    rating: 5,
    text: 'Outstanding professionalism from start to finish. Kalid and the entire staff were fantastic throughout the whole project. Couldn\'t be happier with the result.',
    service: 'Fencing',
  },
]
