const URL_GITHUB = 'https://api.github.com/'
const LOGIN_SOCIAL_MEDIAS = {
  github: 'jonatas-melo-silva',
  youtube: 'channel/UCi6cz4Dem9ZbSzg4d72vukQ',
  facebook: 'jonatasms.student',
  instagram: 'jonatas_melo_silva',
  twitter: 'Jonatas56248067'
}

const changeSocialMediasLinks = () => {
  for (let li of socialMediaLinks.children) {
    const socialMedia = li.getAttribute('class')
    li.children[0].href = `https://${socialMedia}.com/${LOGIN_SOCIAL_MEDIAS[socialMedia]}`
  }
}

const getGitHubProfileInformation = async () => {
  const url = `${URL_GITHUB}users/${LOGIN_SOCIAL_MEDIAS.github}`
  await fetch(url)
    .then(response => response.json())
    .then(data => {
      const { avatar_url, name, login, html_url, bio } = data
      avatarProfile.src = avatar_url
      nameProfile.textContent = name
      userLink.href = html_url
      userLogin.textContent = login
      bioProfile.textContent = bio
    })
}
getGitHubProfileInformation()
changeSocialMediasLinks()
