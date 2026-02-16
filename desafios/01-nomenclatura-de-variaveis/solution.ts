// Nomenclatura de variáveis

const userCategoriesByNumberOfFollowers = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getData(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const githubUserResponse = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (githubUserResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const user = await githubUserResponse.json()

  const userCategoriesInDescendingOrder = userCategoriesByNumberOfFollowers.sort((category_a, category_b) => category_b.followers - category_a.followers);

  const userCategory = userCategoriesInDescendingOrder.find(category => user.followers > category.followers)

  const userWithTheirCategory = {
    githubUsername,
    userCategory: userCategory.title
  }

  return userWithTheirCategory
}

getData({
  query: {
    username: 'josepholiveira'
  }
}, {})
