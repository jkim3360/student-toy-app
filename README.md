# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

# rails-api-with-react-lab

#### RAILS API (with REACT FRONTEND) LAB

This lab is meant to reinforce your knowledge of React and build your skills in creating a Rails api.

<iframe src="https://giphy.com/embed/l4EoOPJMXozky47f2" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/heyarnold-hey-arnold-nicksplat-l4EoOPJMXozky47f2">via GIPHY</a></p>

## DELIVERABLE:

Your goal in this lab is to create a REST-ful api in Rails and accessing that API with a React frontend.

Create a "Student's API" that has the ability to Read All and Read One students.
Connect your Rails backend with a React frontend. Display all of the Students.
Style.  
Deploy.

## Getting started with Rails

1. Fork
1. Create a feature branch
1. Clone
1. Seed your rails api with data found in the `seed` section below.
1. Create `index` and `show` methods for your API.

### Seed Data:

Use the following seed data to create your API.

<details>
<summary>seed.rb</summary>

```
Student.create!(name: 'Arnold Shortman', description: 'Thinks people are inherently good, idealist, helpful, is not wearing a kilt but rather it is a long shirt that extends past his green sweater, impractically-shaped nogin', photo: 'https://upload.wikimedia.org/wikipedia/en/2/2a/HeyArnold%21.jpg')
Student.create!(name: 'Gerald Martin Johanssen', description: 'Athletic, loyal, street-smart, class president, hair icon', photo: 'https://heyarnold.fandom.com/wiki/Gerald_Johanssen?file=GeraldShow.png')
Student.create!(name: 'Helga G. Pataki', description: 'rough, cynical, favorite color is pink, closet poet, expert shrine-maker', photo: 'https://heyarnold.fandom.com/wiki/Helga_G._Pataki?file=Helga_Pataki.png')
Student.create!(name: 'Harold Berman', description: 'tough-talker, bully, body-shamed, acts out, relatively harmless', photo: 'https://heyarnold.fandom.com/wiki/Harold_Berman?file=Upscale-230765195014212.png')
Student.create!(name: 'Eugene Horowitz', description: 'accident prone, cheery, the class jinx, wears socks with sandals', photo: 'https://heyarnold.fandom.com/wiki/Eugene_Horowitz?file=EAFDB121-EC13-4F12-849E-37037A95E3D6.png')
Student.create!(name: 'Phoebe Heyerdahl', description: 'smartest person in the room, shy, makes 'long sweater' an outfit', photo: 'https://heyarnold.fandom.com/wiki/Phoebe_Heyerdahl?file=Phoebe_(classic).png')

puts "#{Student.count} students created!"
```

</details>

## React on Rails

Time to add the React Frontend to your Rails API.

1. After setting up your API, run `create-react-app students-app` in the root of your Rails project.
1. Install dependencies and properly configure Cors.
1. Make a route to display all students.
1. Make a route that displays one student.
1. Style
1. Deploy Students App

## Tips:

- [Rails API with React](https://git.generalassemb.ly/sei-nyc-cicadas/rails-api-with-react) lesson
- [Rails routes](https://www.railstutorial.org/book/filling_in_the_layout#sec-rails_routes) chapter
- [react-api](https://git.generalassemb.ly/sei-nyc-cicadas/react-api-practice) practice

## Bonus

(?)
