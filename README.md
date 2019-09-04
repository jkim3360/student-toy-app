# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE


# LAB: Rails API with React frontend
This lab is meant to build your skills in creating a Rails API and reinforce your foundation in React.

![](https://media.giphy.com/media/l4EoOPJMXozky47f2/giphy.gif)

## DELIVERABLE:

Your goal in this assignment is to build a REST-ful API using Rails and then create a React App that successfully retrieves data from your API. You will:

- Create a student app that has the ability to read all and/or read one student(s).  
- Connect to your API with a React frontend.
- Style your app.    
- Deploy your app (Rails API + React client).  

## Getting started with Rails

1. Fork
1. Create a feature branch
1. Clone
1. Run `rails new . --api -G --database=postgresql`
1. Seed your rails api with data found in the `seed` section below.
1. Create `index` and `show` methods for your API.

### Seed Data:

Use the following seed data to create your API.

<details>
<summary>seed.rb</summary>

```
Student.create!(name: 'Arnold Shortman', description: 'Thinks people are inherently good, idealist, helpful, is not wearing a kilt but rather it is a long shirt that extends past his green sweater, impractically-shaped nogin', photo: 'https://upload.wikimedia.org/wikipedia/en/2/2a/HeyArnold%21.jpg')
Student.create!(name: 'Gerald Martin Johanssen', description: 'Athletic, loyal, street-smart, class president, hair icon', photo: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Gerald_Johanssen.png')
Student.create!(name: 'Helga G. Pataki', description: 'rough, cynical, favorite color is pink, closet poet, expert shrine-maker', photo: 'https://upload.wikimedia.org/wikipedia/en/a/ac/Helga_Pataki.jpg')
Student.create!(name: 'Harold Berman', description: 'tough-talker, bully, body-shamed, acts out, relatively harmless', photo: 'https://www.cartoonbucket.com/wp-content/uploads/2016/01/Harold-Berman-Eating-Ice-Cream-cc15205.jpg')
Student.create!(name: 'Eugene Horowitz', description: 'accident prone, cheery, the class jinx, wears socks with sandals', photo: 'https://vignette.wikia.nocookie.net/heyarnold/images/9/99/EAFDB121-EC13-4F12-849E-37037A95E3D6.png/revision/latest?cb=20190816022130')
Student.create!(name: 'Phoebe Heyerdahl', description: 'smartest person in the room, shy, makes "long sweater" an outfit', photo: 'https://vignette.wikia.nocookie.net/heyarnold/images/9/93/Phoebe_%28classic%29.png/revision/latest?cb=20190816022206')

puts "#{Student.count} students created!"
```

</details>

## React on Rails

Time to add the React Frontend to your Rails API.

1. Run `npx create-react-app client` in the root of your Rails project.
1. Install dependencies and properly configure Cors.
1. Make a route to display all students.
1. Make a route that displays one student.
1. Style: **flex-box**, grid, third-party library, etc.
1. Bring it together -> Deploy your beautiful student api and client from the `rails-api-with-react-lab` folder!

## Deploy Rails & React App

Deploy backend Rails server to Heroku:

- `heroku create app_name`
- `git push heroku master`
- `heroku run rails db:migrate`
- `heroku run rails db:seed`
- `heroku open` to take us to the url link for our backend server.

Deploy frontend React to surge:

- replace `http://localhost:3000` on line 18 of our App.js with a link to our heroku backend server.
in terminal:
- `cd client`
- `npm run build`
- `cd build`
- `mv index.html 200.html`
- `surge`
- follow the prompts to get the link to the deployed site.

## Tips:

- [Rails API with React](https://git.generalassemb.ly/sei-nyc-cicadas/rails-api-with-react) lesson
- [Rails routes](https://www.railstutorial.org/book/filling_in_the_layout#sec-rails_routes) chapter
- [react-api](https://git.generalassemb.ly/sei-nyc-cicadas/react-api-practice) practice
