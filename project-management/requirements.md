# Group Project: Begin Wireframes & Software Requirements

## User Stories

### 1. Create an account

- As User I want to create an account with CRUD capabilities depending on the role.

### Feature Tasks

- User can read all the listings in the database.

### Acceptance Tests

- Able to login with new username and password otherwise user will recieve error message.

### 2. Buy Items Safely

- As a buyer, I want to buy an item from a seller in a safe way, so that I can find cheap things and feel safe while buying them

### Feature Tasks

- Add make-offer feature
- Add chat-offer feature
- Add safety-chat feature

### Acceptance Tests

- Buyer should make offers for items
- Buyer should have chats with sellers of items
- Buyer should have a way to screen for safe in-person transactions (chat, agree to meet at safe place, video chat)

### 3. Talk to the list owner

- As a user I want to talk to the listing owner to inquire about the listing.

### Feature Tasks

- User can send the message to owner with message feature.

### Acceptance Tests

- User will get notified if message is sent.

### 4. Create a listing

- As a user I want to create a listing for the item I want to sell.

### Feature Tasks

- User with 'create' role can make a listing with listing schema.

### Acceptance Tests

- User will see the end product "listing" once done or error message if it didn't get saved up in database.

### 5. Delete a listing

- As a user, I want to delete my listing once sold.

### Feature Tasks

- User who create the ad is the only one who can delete their listing.

### Acceptance Tests

- User can see their listing gone from index with message saying successfully deleted or error message.

## Provide a link to your project management board that contains your user stories in your project Readme.

- [JIRA](https://team-jarr.atlassian.net/jira/software/c/projects/MID/boards/1)

## Software Requirements

### Vision

What is the vision of this product?

- To have a marketplace application where buyers and sellers can safely communicate in a secure space to enable successful transactions.

What pain point does this project solve?

- The safety of buying and selling online with other people and having no way to really screen them before meeting

Why should we care about your product?

- Bazaar adds safety to in-person transactions that initiate online

### Scope (In/Out)

IN - What will your product do

- Chat online
- List products for sale
- Screen buyers and sellers before agreeing to meet in-person

OUT - What will your product not do.

- Actual online funds transfer

What will your MVP functionality be?

- Create a user profile.
- User able to create, edit, delete their listing.
- Other users can read all the listings in the database.
- User can message listing's owner back and forth.

What are your stretch goals?

- Dolby.io video chat as a safety-screen mechanism

### Functional Requirements

List the functionality of your product. This will consist of tasks such as the following:

An admin can create and delete user accounts
A user can update their profile information
A user can search all of the products in the inventory

- A seller can create product listings
- A buyer can offer to buy product listings
- A buyer and seller can screen each other using a safety-mechanism, such as:
  - Online chat
  - Video chat

#### Data Flow

Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

### Non-Functional Requirements

1. Security

Our application will use an authorization library to handle resource access control.
Security is important and part of our core product's concern.
We want to provide a safer way to initiate in-person transactions online and securing domain data is part of that non-functional requirement.

1. Resiliency

Our application will use database technology to persist domain data.
An application user will be able to log in and out of the software and their data will not be lost.
We will also use a resilient messaging technology that leverages message queues as a way to handle inter-process communication between the core services of our product.

## Domain Modeling

| Domain Language | Definition |
|:---------:|:---------:|
| Listing | The item being listed for sale |
| Buyer | The user who wants to buy the Listing |
| Seller | The user who wants to sell the Listing |
| Transaction | Happens when the Buyer and Seller agree to a sale |
| Chat | A way for Buyers and Sellers to communicate throughout the transaction |
| Offer | The Buyer makes an Offer to buy the Listing under their offered terms |
| Safety Screen | A chat mechanism for the Buyer and Seller to screen each other before agreeing to meet in-person. It could be Video or Text |
| Condition | Describes the state of the Listing item. It could be 'new', for example |

## Using a Database? Make an Database Schema Diagram

``` js
User {  
  firstName:  string  
  lastName:  string  
  credentialHash: string
}  

listing {  
  itemName:  string  
  condition: ENUM  {'new','excellent','good','fair','junk'}
  description:  string  
  price:  number  
  orBestOffer: boolean  
  barter: boolean
}
```  
