// import React from 'react'
// import { Enzyme, mount } from 'enzyme'
import nock from 'nock'
import fetch from '../../../client/api/birds'

// import Adapter from 'enzyme-adapter-react-16'

// import request from 'superagent'
// import BirdGrid from '../../../client/components/BirdGrid'

// jest.mock('../../../client/api/birds', () => {
//   return () => {
//     return Promise.resolve(
//       [{ bird_id: 9, name: 'California Quail', info: 'Quail like to eat seeds...', image: 'public/images/californiaquail.jpg/', found: false }, { bird_id: 10, name: 'Thrush', info: 'Thrush like to usually eat from the ground...', image: 'public/images/thrush.jpg/', found: false }]
//     ).catch(e => expect(e).toMatch('error'))
//   }
// })

const apiURL = 'http://localhost:3000/api/v1'

describe('Get birds API route call is working', () => {
  xit('The BirdGrid component passes the appropriate info to the BirdCircle component', () => {
    // Arrange
    const expected = [
      { bird_id: 1, name: 'Tui', info: 'Tui are unique to New Zealand and belong to the honey-eater family which means that they feed mainly on nectar from the flowers of native plants. They can be quite aggressive! They will chase other Tui away from food and tasty nectar. Tui are found throughout the North, South and Stewart Islands of New Zealand.', image: '/images/tui.jpg', found: false, category: 'notThreatened', status: 'Not Threatened' },
      { bird_id: 2, name: 'Kererū', info: 'These big birds like to eat fruit, leaves, twigs and shoots and can eat so much that they get too full and fall out of trees. They are very important to our forests as they are the only bird left big enough to swallow seeds. They then poo the seeds out later in another place - helping to establish new forests. These birds are found all over New Zealand including many offshore islands.', image: '/images/kereru.jpg', found: false, category: 'notThreatened', status: 'Not Threatened' },
      { bird_id: 3, name: 'Pīwakawaka', info: 'Spot these friendly birds by their large tail. Also known as fantail, these birds build their nests with small materials woven with cobwebs and like to eat moths, flies, beetles and spiders. They also love to have a bird-bath! They live all over New Zealand, even in the Chatham Islands. You can find them in native and introduced forest, farm shelterbelts, orchards as well as suburban parks and gardens.', image: '/images/piwakawaka.jpg', found: false, category: 'notThreatened', status: 'Not Threatened' },
      { bird_id: 4, name: 'Ruru', info: 'Ruru are heard at dusk and throughout the night and they are named after their haunting call. Ruru can turn their heads 270 degrees and like to eat beetles, weta, moths and spiders. They are also known to eat small birds, rats and mice! Ruru are found throughout New Zealand and in Maori tradition they are seen as watchful guardians of the forest.', image: '/images/ruru.jpg', found: false, category: 'notThreatened', status: 'Not Threatened' },
      { bird_id: 5, name: 'Kōtare', info: 'Kōtare, also known as sacred kingfisher, are the only species of kingfisher native to New Zealand. They like to build perches in earth banks, which they tunnel into with their beaks. They live both around the sea, where they feed on small crabs and fish, as well as inland, where what they feed on includes worms, weta, spiders, mice and even small birds!', image: '/images/kotare.jpg', found: false, category: 'notThreatened', status: 'Not Threatened' },
      { bird_id: 6, name: 'Tōrea Pango', info: 'Tōrea Pango, also known as variable oystercatcher, are found on shorelines around New Zealand. They are usually found in pairs and can be seen searching for shellfish. They really like sandy dunes and you don’t usually see them too far from the coast, where they eat mussels, tuatua and cockles along with other shellfish.', image: '/images/toreapango.jpg', found: false, category: 'atRisk', status: 'Recovering' },
      { bird_id: 7, name: 'Kakīānau', info: 'Kakīānau, also known as black swan, are native to New Zealand. They became extinct after the first human settlement of New Zealand but were reintroduced from Australia in the 1860s. They live throughout New Zealand and live on larger lakes and estuaries. They are herbivores and like to eat freshwater plants and Zostera.', image: '/images/kakianau.jpg', found: false, category: 'notThreatened', status: 'Not Threatened' },
      { bird_id: 8, name: 'Rosella', info: 'Rosella were introduced from Australia and you can usually hear them coming with their noisy chatter and alarm calls. They have bright red heads and white on their cheeks. They are mainly found in Northland, Auckland, Waikato, Wairarapa and Wellington and can be found in urban parks as well as rural areas. They like to eat seeds as well as fruit and leaves.', image: '/images/rosella.jpg', found: false, category: 'notThreatened', status: 'Introduced and Naturalised' }
    ]

    nock(apiURL)
      .get('/')
      .reply(200, expected)

    // Act
    const actual = fetch()
    // Assert
    expect(actual).toEqual(expected)
  })
})
