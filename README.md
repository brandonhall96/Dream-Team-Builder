# Dream Team Builder

My Program is called **Dream Team Builder** which is based off the commonly know professional hockey league also know as the NHL.

It will demonstrate a combination of HTML, CSS, Javascript, Express as well as some others. The program is pretty self explanatory, theres many things you can do from checking stats to putting together your very own dream team.

https://github.com/brandonhall96/Dream-team-builder/

# How to use

1. First you must login or create an account to become a registered user
2. You will then be redirected to your own profile page
3. From there you have choices a few choices view stats or create a player
4. Wherever you land there will be a "Home" button take will direct you back

## Start Up Screen
![Starting screen](/public/photos/example1.jpeg)

# How it works

The program uses Express which allows us to create routes to different pages that the users can access and allows us to use CRUD, in which a user can create their own player or delete a favorite team etc, Express and Axios also allows us to implement APIs to pull in all the data we need and users are looking for. Sequelize and Postgres were used aswell to build our database and allows the ser to create and store their own personal data. Lastly, we used Passport which requires users to either login or create an account, that way all their data is protected and only accessible by them.

# Making the .ejs layout
```
<body>
  <%- include('partials/alerts') %>
    <header>
      <nav id="navbar">
        <ul>
          <% if(!currentUser) { %> 
            <li><a href="/">Home</a></li>
            <li><a href="/auth/signup">Signup</a></li>
            <li><a href="/auth/login">Login</a></li>
          <% } else { %> 
          <li><a href="/profile">Home</a></li>
          <li><a href="/auth/logout">Logout</a></li>
          <li><a href="/nhl">Stats</a></li>
          <li><a href="/player/showplayer">My Players</a></li>
          <li><a href="/nhl/showteam">My Teams</a></li>
          <% } %> 
        </ul>
      </nav>
    </header>
  <%- body %>
</body>
```


# Creating the 
```









# Requesting data from our API using Axios and a GET route
```
router.get('/', function(req, res) {
  let teamsUrl = 'https://statsapi.web.nhl.com/api/v1/teams/';
    axios.get(teamsUrl).then(response => {
      let nhlTeams = response.data.teams
        res.render('nhl/index.ejs', {nhlTeams: nhlTeams});
  });
});
```

# Building GET and POST routes in our controller and using .create to make a player
```
router.get('/', isLoggedIn, (req, res) => {
    res.render('player/index.ejs')
  })
  
  router.post('/', (req, res) => {
    db.player.create(req.body)
    .then(createdPlayer => {
      console.log(createdPlayer.get())
      res.redirect('/player/showplayer')
    })
    .catch(err => {
      console.log(err)
    })
  });
  
  router.get('/showplayer', (req, res) => {
    db.player.findAll()
    .then(foundPlayer => {
      res.render('player/showplayer.ejs', {playerList: foundPlayer})
    })
  });
  ```

# Using PUT to edit a created player
```
router.put('/:idx', (req, res) => {
    db.player.update(req.body, {where: {
      id: req.params.idx
      
    }})
    .then(editedPlayer => {
      
      console.log(editedPlayer)
      res.redirect('/player/showplayer')
      
    })
    .catch(err => {
      console.log(err)
      res.redirect('/player/showplayer')
    })
})
```

  

    
