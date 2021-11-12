# Project - Team JARR

## Team Members

- Joe Ivans  
- Alex Grazda  
- Roop Hayer  
- Ryan Emmans  

## Cooperation Plan

Every person on your team is an asset. This is your chance to discover the hidden strengths and areas for growth for each team member.  
  
Describe at least:  

- What are the key strengths of each person on the team?  
  - Joe:  Architecture, Data Structures, Algorithms
  - Alex: Collaboration, Driving, Project Managment
  - Roop: Teamwork, node.js, managing time, database handling.
  - Ryan: Communication, organization, creative ideas, attention to detail, visual design (does not apply to backend), being verbose.

- How can you best utilize these strengths in the execution of your project?  
  - Joe:  Avoid premature optimization pitfalls. Help with difficult concepts
  - Alex: Working with the team to keep project on task
  - Roop: Meet deadlines, by creating a robust backend.
  - Ryan: Making sure production toward MVP is where it needs to be while making sure there is a balance and everyone is in a healthy headspace.

- In which professional competencies do you each want to develop greater strength?
  - Joe:  Business acumen
  - Alex: Implementing/ understanding Documentation  
  - Roop:  Tool proficiency
  - Ryan: Technical craft, handling ambiguity
  
- Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?  
  - Hosting Morining Meeting
    - Discuss Previous days progress
    - Challenges
    - Set plan for the day (discuss checklist on Jira)

  - Multiple Check-ins (establish times)

## Conflict Plan  

Your team should agree on a process for handing disagreements, should they arise. It is better to have a plan in place ahead of time so you can all refer back to it when necessary.  
  
Describe at least:  
  
- What will be your group’s process to resolve conflict, when it arises?
  - Talk about it during our daily meeting and find the middle route.

- What will your team do if one person is taking over the project and not letting the other members contribute?
  - Confront that individual in a private setting and let them know.

- How will you approach each other and the challenges of the project knowing that it is impossible for all members to be at the exact same place in understanding and skill level?
  - By implementing the pair or mob programming.

- How will you raise concerns to members who are not adequately contributing?
  - Confront that individual in a private setting and let them know.

- How and when will you escalate the conflict if your resolution attempts are unsuccessful?  
  - Notifying the instructor about the conflict.

## Communication Plan  

Before beginning to tackle the project, determine how your group will communicate with each other. This is not an individual effort. Make sure everyone feels comfortable with the identified methods of speaking up.  
  
Describe at least:  

- What hours will you be available to communicate?
  - 9am - 6pm
  
- What platforms will you use to communicate (ie. Slack, phone …)?
  - slack, discord

- How often will you take breaks?
  - As needed.

- What is your plan if you start to fall behind?
  - Regroup and reassess.
- How will you communicate after hours and on the weekend?
  - Discord, slack

- What is your strategy for ensuring everyone’s voice is heard?
  - Try to reach consensus with everyone.

- How will you ensure that you are creating a safe environment - where everyone feels comfortable speaking up?  
  -By being open minded. Open communication and check-ins.

## Work Plan  

Explain your work plan to track whether everyone is contributing equally to all parts of the project, and that each person is working on “meaty” problems. This should prevent “lone wolf” efforts and “siloed” efforts.  
  
Describe at least:  
  
- How you will identify tasks, assign tasks, know when they are complete, and manage work in general?  
  - Stand up meetings in the morning, we will assign tasks and set goals.

- What project management tool will be used?  
  - JIRA

## Git Process  

Plan out what your team’s Git workflow looks like for coding tasks.  
  
Describe at least:  
  
- What components of your project will live on GitHub?
  - We set up Github organization containing one repository.

- How will you share the repository with your teammates?
  - All team members have owner/admin access to Github organization.

- What is your Git flow?
  - We will create a branch off main and use it as a proxy for main for our project. Will merge our daily work on proxy branch With consensus we will merge proxy branch to main.

- Will you be using a PR review workflow? If so, consider:
  - Yes, we will use a PR review with at least 2 approvers.

  - How many people must review a PR?
    - Minimum 2 people

  - Who merges PRs?
    - 2 team members that did not push repo  

  - How often will you merge?
    - At least once a day  
    - When an operation is working and tested  

  - How will you communicate that it’s time to merge?
    - During daily Stand up - Mid day meetings

## Project Plan A
  
1. Summary of idea.

- Craigslist-type of problem domain
- Adds video chat for verifying buyer/seller
- Has text chat for other use cases, such as haggling / meetup locations / other discussion

2. What problem or pain point does it solve? a. Keep it high level without going into too much detail. (3-4 sentences is enough)

- Can finally see who you're going to meet before meeting up to buy/sell

3. Minimum Viable Product (MVP) definition. What is the minimum required for you to present on your demo day?

- Create an account
  (basicAuth)-
- Maintain your account (password, email address, profile, etc)
- Logging in (bearerAuth jwt)
- Post a listing
- Update a listing
- Delete a listing
- Message a listing owner(socket.io or SNS/SQS)
- Initiate a potential meetup with seller, with a payment offer / terms
- (stretch goal) Video message with listing owner

## Project Plan B
  
1. Summary of idea.  

- Chat app with multiple chat rooms if the user wants

2. What problem or pain point does it solve? a. Keep it high level without going into too much detail. (3-4 sentences is enough)  

- Makes it possible to demonstrate a chat application which can work with or without cloud services

3. Minimum Viable Product (MVP) definition. What is the minimum required for you to present on your demo day?

- Create an account
- Maintain your account (password, email address, profile, etc)
- Create chat rooms
- Join one or many chat room
- On join, client is subscribed to the room topic
- Unsubscribe / unjoin one or many chat rooms
- Post to chat room

### Ideas

- Chat app

- Spotify API
  - to find tour dates  
  - create CLI  

- Classified adds - RoopOff - RoopsList
  - with authentication
  - encryptions for personal info
  - messaging w/ socket.io  
  - Safe Transactions space  
  - STRETCH: video  

- Library  
  - filling gaps in JS
  - extending prototypes  
    - whats availible with prototype
