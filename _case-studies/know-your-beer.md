---
layout: case-study
title: Know Your Beer
description: The quick and easy online beer encyclopedia. Work included logo creation, branding, UX/UI design, prototyping, and development. Built with the AngularJS framework.
feature-image: know-your-beer-image
link: /know-your-beer
links:
  - text: Visit Site
    link: http://knowyourbeer.herokuapp.com
anchor: know-your-beer
date: 01/01/16
---

# Project: Know Your Beer
---

Know Your Beer is a Single Page Web Application designed and developed for one purpose: So people could learn more about the beer they drink. (And for fun, because I like quality beer, I had the time to spend on it).

From start to finish, Know your beer was conceptualized, designed, and developed by me.

!["Know Your Beer Hero"](/assets/images/knowyourbeer.png)

## The Problem
---

It started with a conversation between friends:

!["text convsation"](/assets/images/conversation.png)

For beer snobs, the the Ballast Point purchase was the end of an era, but no one would really ever know. It got me thinking... what other breweries/beers are out there that I don’t know a single thing about? Is Deschutes still independent? Is ingredient list for Pliny the Elder by Russian River Brewing Company still as pure as it had always been? I wish there was some sort of knowledge repository on the internet where I could look stuff up... but there wasn’t.

## The Research
---

After my initial light bulb idea, I knew I had something that could be useful to people. So the first thing I did was to take a poll using Google Forms. A few of the responses looked like this:

!["research"](/assets/images/research.png)

So you can see, it wasn’t a bad idea to build out an online beer database. It seemed like 92% of my buddies would use an app to learn more about the beers they drank.  Next, I needed to do a little **competetive analysis** to see if anyone else was already doing this. After compiling data on a few other websites in the space (Beer Advocate, Untapped), I realized that while there were sites out there that were geared more towards rating beers, or socially sharing them with your fake online friends, no one had a pure beer knowledge base.

Beer Advocate was positioned as more of a beer forum and rating website. More of a community for beer lovers. This wasn’t what Know Your Beer was about.

Untapped was positioned more as a social beer drinking platform where you find new beers and see what your friends are drinking.

Both had beer ratings as one of their highest use cases. Niether was a pure search and learn application. Things were looking good for Know Your Beer to come to life.

## The (Early) Design Phase
---

I knew from the beginning that Know Your Beer had to be simple and easy to use. The goal was to create a single page web application, where users could search and learn about beer. **Users stories** were basic, but still needed to be logged:

!["user-stories"](/assets/images/user-stories.png)

Now that I had user stories and user flows, it was time to start laying out a design. Using **Balsamiq**, I created a few wireframes to ouline the site. During this process I got to think about how the site should be laid out, and what would be easiest and simple design to achieve my end goal: to search for a specific beer and learn about it. I knew I wanted to feature the search, so I made that quite large in the middle of the page.

!["wireframe-home"](/assets/images/kyb-home-wireframe.png)

I kept the search results simple, and moved the search bar to the top of the page so that another search could be performed if the results weren’t what the user was looking for. In the wireframes, I included a description, as well as a small thumbnail image. This was eventually streamlined down into just an thumbnail image and a few brief details about the beer. Keeping in line with streamline and simple design, I felt that showing an incomplete description on this page was unnesseccary.

!["wireframe-search-results"](/assets/images/kyb-wireframe-search.png)

The beer detail page was originally planned to utilize a two column approach, with one being the main column, for the beer description. This later was changed into a single column, where brewery details were inluded under the beer desciption. I wanted to keep the focus of the user on one thing at a time, and didn’t want an overly complex layout.

!["wireframe-beer-detail"](/assets/images/kyb-wireframe-beerdetail.png)

Lastly, the brewery detail page. Featuring a description about the brewery, and top beers that they were know for was the main purpose of this page. Keeping in line with the general site layout, this page was later changed so that information was only stored in a single column.

!["wireframe-brewery-detail"](/assets/images/kyb-wireframe-brewerydetail.png)

## The Design Phase
---

Now that I had some wireframes to work off of, it was time to develop a **brand guide** for Know Your Beer. I needed a color pallete, logo, and font selection. Using **Adobe Illustrator**, I started font selection through Google Fonts. I ended up chosing Montserrat for my headers because I liked how readable, bold and concise it was. Know Your Beer wasn’t messing around, and neither was Montserrat. For the body I chose Open Sans. In a search and learn application, readability is key, and I feel like open sans is one of the most readable fonts on the web. 

I used Abode Kuler to pick a general color scheme. Obviously, the color had to be associated with beer, but it was challenging finding a pallete that worked with brown. In the end, the golden yellow <span class="yellow">(#FFB73E)</span> I found seemed to fit nicely with the medium brown that beer is associated with.

!["brand-guide"](/assets/images/knowyourbeer-01.png)

Next, it was time to design a logo. Using Illlustrator, I played around with different formats and eventually ended up with a snifter beer glass next to a big and bold “Know Your Beer”. I chose the snifter glass because Know Your Beer isn’t just for those who drink pilsners out of a pint glass, it’s about an expanded beer knowledge, and the snifter glass seemed to represent that to me. I made  sure that KNOW BEER drew the focus first. The goal of the site is to get users to know beer. Initially, the glass was empy, but what was that saying to my users? No one wants to see an empty beer glass, so I chose to fill it and had myself a logo. 

!["logo-evolution"](/assets/images/knowyourbeer-02.png)

Once I had a logo, color pallete, and type face chosen, it was time to start the mockups. Using **Sketch**, I created mockups for the home, search results, beer detail and brewery detail pages.

!["home-page-mockups"](/assets/images/kyb-mockup-home-collage.png)

!["search-results-mockups"](/assets/images/kyb-mockup-results-collage.png)

!["beer-description-mockups"](/assets/images/kyb-mockups-beerdetails.png)

## The Development
---

Once the final mock ups were ready, it was time to start development. First I had to figure out what technology to use for Know Your Beer. I wanted to learn **Angular**, so I decided to start with an Angular frontend and **Node.js** backend. Once everything was set up (Angular was bootsrapped to my site, basic views created) the first challenge was to figure out how to get the data I needed. As I saw it, my options were: start from scratch and do primary research to find the data required, hire someone to do that for me, or hook in to an exisiting database and pull that data into Know Your Beer. 

I decided to initially hook into a an existing database. This allowed for Know Your Beer to be fully functional within a few weeks and I didn’t have to worry about gathering data and storing it in a database. The only downside to this approach was that I wasn’t able to control the data. While the beer database I hooked into had a robust amount of data, there were a few data points that I felt are missing (brewery ownership/history). If I have time to do investigative research, I’ll add those datapoints into Know Your Beer, but since the goal of this project was to have fun and learn something in the process, I wasn’t too bothered.

The database I hooked into was breweryDB.com. It’s pretty sweet - out of the few beer databases out there, it had the most professional feel and best documentation. It also appeared to be well maintained and had the most amount of endpoints I could connect to. Also, it was free to use (up to a certain amount of lookups per day, but since Know Your Beer was created for fun, that didn’t bother me).

Once I decided on using BreweryDB, the first step was to connect to it. One challenge that I ran into is that I couldn't connect to BreweryDB from the frontend, so I had to use a [nodeJS module](https://www.npmjs.com/package/brewerydb-node) to connect to BreweryDB from the backend, however, I needed to access more endpoints than what the module provided, so I had to write my own API to get all the data I needed.

Once I was able to connect to BreweryDB, I used the Angular **$http** service to get access to the data from the frontend. After I was able to get the data I needed, I then started populate my pages with data. Using **$scope**, I mapped my endpoints to my data variables and was able to create a dynamically populated site.

I then built the search functionality, which the BreweryDB API included, but I needed to use **$stateparams** to pass parameters through to different states so that the search would populate with results.

After I had a functioning search, brewery detail, and beer detail pages, it was time to work on some extra bells and whistles, including a loading screen, conditional statements to handle bad or missing data and a search filter.

Everything was looking nice, it was time to test, make corrections and deploy. To see the end result click <a href="http://knowyourbeer.herokuapp.com" target="_blank">here</a>.



