// pode adicionar javascript <script> aqui
// let: muda variavel // const: não muda valor da variavel
// Alert cria uma caixa de aviso na pagina com uma mensagem dentro do ()
// Function pode receber texto/informação individual
// for(let i = 0; i <= 10; i++) {}  //  i = i + 1 ou i++

const SocialMediaLinks = {
  github: 'sahmonte',
  youtube: 'maykbrito',
  instagram: 'sah_monte',
  facebook: 'sarah.monteiro.10',
  twitter: 'maykbrito'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${SocialMediaLinks[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${SocialMediaLinks.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
