## Changelog for meet2learn app

## [1.0.1] - 2023-12-16

### Added
- Missing loader for tutors added

## [1.0.0] - 2023-12-15

### Added
- Readme added, version 1.0.0. released

## [0.18.3] - 2023-12-15

### Fixed  
- Media queries improved for smaller screens

## [0.18.2] - 2023-12-14

### Fixed  
- Fix redirecting while connect tutor
- Fixed problem with redundant fetching

## [0.18.1] - 2023-12-14

### Changed
- Move contact form into separate component
- Refactor statsCards and feedbackForm
- Fix updates on single user post view
- Add pending profile for tutors
- Reorganize store structure
- Reorganize UI components
- Reorganize forms
- Refactor forms with customHooks
- Remove dummyData files used for rendering
- Split profile related components into smaller components
- Change imports for features

### Fixed  
- Correct redundant query for conversations
- Fix updates on single user post view

## [0.18.0] - 2023-12-12

### Added
- Add custom loader using react-loader-spinner 

## [0.17.0] - 2023-12-12

### Added
- Password reset functionality with separate views for reset initiation and password change
- Reset form to change Password component
- Additional buttons for navbar

## [0.16.0] - 2023-12-08

### Added
- Add rich editor for adding posts

## [0.15.0] - 2023-12-07

### Added
- User statistics on the main dashboard page

## [0.14.0] - 2023-12-06

### Added
- Forum for portal users
- Adding, editing, deleting posts
- Filtering posts by categories
- Adding a priority (maximum 5 priority from one user)
- Adding likes, dislikes
- Adding comments under a specific post

## [0.13.0] - 2023-12-05

### Added
- Conversations in the form of chats between the student and the tutor with the option of grouping by conversation date (collapsing grouped conversations) with the possibility of deleting individual conversations by the author of the entry

## [0.12.0] - 2023-12-03

### Added
- Learning connections in order to conduct correspondence and maintain contact between the tutor and the student
- Protection against tutors making appointments with each other
- Integrated view on the dashboard allowing you to manage your connections - deleting, starting discussions

## [0.11.0] - 2023-12-03

### Added
- Fetching reviews from BE
- Add and delete review 
- Editing reviews
- Protecting tutors from giving feedback

## [0.10.0] - 2023-12-02

### Added
- Fetching all tutors from BE
- Fetching single tutor from BE

### Fixed  
- Avatar styles problem solved

## [0.9.0] - 2023-12-01

### Added
- Add, edit and delete notes with tags to BE
- Filtering notes by its tags
- Confirm delete note using modal
- View single note
- Pagination and filter for notes

## [0.8.0] - 2023-11-30

### Added
- Adding the functionality of adding user avatar using cloudinary
- Preview of the added image
- Validation for file

## [0.7.0] - 2023-11-29

### Added
- Connection to API for user authorization, logging in with error handling, registration with error handling
- Deleting accounts
- Changing user password
- Editing user data using a form with error handling

## [0.6.0] - 2023-11-28

### Added
- View and routes for notes section
- Reusable navigation for different dashboard sections 
- Custom noteForm for adding and editing notes
- Connect with local state using redux/toolkit to check notes functionalities 
- Implement react-select

## [0.5.0] - 2023-11-26

### Added
- Profile cards
- Settings page with delete account (modal confirmation)
- Password change options
- Edit form for users with validation
- Small buttons

### Fixed
- Sidebar issues with labels viabilities 

## [0.4.0] - 2023-11-25

### Added
- Tutor card and Tabs - reusable
- Tutors page with filtering by name or subject
- Tutor profile with reviews 

### Fixed
- Small styles corrections

## [0.3.0] - 2023-11-24

### Added
- Dashboard with media
- Sidebar 
- Pages for dashboard

## [0.2.0] - 2023-11-24

### Added
- Pages
- Themes 
- Routes
- Landing Page
- Contact form
- Connection of contact form with contact form
- Login Page
- Register Page
- Formik for forms
- Yup for validation

### Changed
- Contact form using formik and yup
- Split into smaller components

### Removed

